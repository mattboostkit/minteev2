import { createClient } from 'npm:@supabase/supabase-js@2.2.0';
import { Stripe } from 'npm:stripe@12.11.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, stripe-signature',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

Deno.serve(async (req) => {
  // Handle CORS preflight request
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
    apiVersion: '2023-10-16',
  });

  try {
    // Get the webhook signature from the request headers
    const signature = req.headers.get('stripe-signature');
    if (!signature) {
      return new Response(
        JSON.stringify({ error: 'Missing stripe-signature header' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    // Get the webhook secret from the environment
    const webhookSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET');
    if (!webhookSecret) {
      return new Response(
        JSON.stringify({ error: 'Webhook secret not configured' }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    // Get the raw request body as text
    const payload = await req.text();

    // Verify the signature and construct the event
    let event;
    try {
      event = stripe.webhooks.constructEvent(
        payload,
        signature,
        webhookSecret
      );
    } catch (err) {
      return new Response(
        JSON.stringify({ error: `Webhook signature verification failed: ${err.message}` }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    // Handle the event based on its type
    switch (event.type) {
      case 'payment_intent.succeeded':
        await handlePaymentIntentSucceeded(event.data.object);
        break;
      case 'payment_intent.payment_failed':
        await handlePaymentIntentFailed(event.data.object);
        break;
      // Add other event types as needed
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    // Return a 200 response to Stripe
    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    // Handle errors
    console.error('Error processing webhook:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});

// Handle successful payment intents
async function handlePaymentIntentSucceeded(paymentIntent) {
  console.log('Payment succeeded:', paymentIntent.id);
  
  try {
    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    // Get order items from metadata
    const orderItems = JSON.parse(paymentIntent.metadata.order_items || '[]');
    
    // Create order record in database
    const { data, error } = await supabase
      .from('orders')
      .insert({
        payment_intent_id: paymentIntent.id,
        amount: paymentIntent.amount / 100, // Convert from cents back to dollars/pounds
        currency: paymentIntent.currency,
        status: 'completed',
        customer_email: paymentIntent.receipt_email,
        items: orderItems,
      });
    
    if (error) {
      console.error('Error creating order record:', error);
    }
    
    // Additional order processing logic can go here
    // Such as: inventory updates, sending confirmation emails, etc.
    
  } catch (error) {
    console.error('Error processing successful payment:', error);
  }
}

// Handle failed payment intents
async function handlePaymentIntentFailed(paymentIntent) {
  console.log('Payment failed:', paymentIntent.id);
  
  try {
    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    // Create failed order record for tracking
    const { data, error } = await supabase
      .from('orders')
      .insert({
        payment_intent_id: paymentIntent.id,
        amount: paymentIntent.amount / 100,
        currency: paymentIntent.currency,
        status: 'failed',
        error_message: paymentIntent.last_payment_error?.message || 'Payment failed',
      });
    
    if (error) {
      console.error('Error creating failed order record:', error);
    }
    
    // Additional failure handling logic can go here
    
  } catch (error) {
    console.error('Error processing failed payment:', error);
  }
}