# Setting Up Stripe Webhooks for Mintee

This guide explains how to configure Stripe webhooks to handle payment events for the Mintee website.

## What Are Webhooks?

Webhooks allow Stripe to notify your application when events happen in your account, such as successful payments, failed payments, or disputes.

## Why Use Webhooks?

Webhooks are essential for:
- Confirming successful payments server-side
- Handling failed payments gracefully
- Managing subscription lifecycle events
- Detecting fraudulent transaction attempts
- Providing order fulfillment triggers

## Setting Up Webhooks

### 1. Create a Webhook Endpoint in Stripe

1. Log in to your [Stripe Dashboard](https://dashboard.stripe.com)
2. Go to Developers → Webhooks
3. Click "Add endpoint"
4. Enter your webhook URL:
   - For production: `https://{your-supabase-url}/functions/v1/stripe-webhook`
   - For testing: Use [Stripe CLI](https://stripe.com/docs/stripe-cli) or a service like [ngrok](https://ngrok.com/)
5. Select events to listen for (recommended events):
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
   - `charge.succeeded`
   - `charge.failed`
   - `checkout.session.completed` (if using Checkout)

### 2. Obtain Your Webhook Secret

After creating the webhook, Stripe will provide a signing secret. This is used to verify incoming webhooks are legitimate:

1. In the webhook details page, reveal and copy the signing secret
2. Add this to your Supabase Edge Function environment variables:
   ```
   STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
   ```

### 3. Deploy the Webhook Handler Function

The project includes a pre-built webhook handler. Ensure it's deployed:

1. Navigate to the `supabase/functions/stripe-webhook` directory
2. Deploy this Edge Function to your Supabase project
3. Verify the function is active

### 4. Test the Webhook Integration

1. Use the Stripe CLI to send test webhook events:
   ```
   stripe trigger payment_intent.succeeded
   ```
2. Verify your application handles the event correctly
3. Check the function logs in Supabase to confirm receipt

## Webhook Event Handling

The webhook handler processes these key events:

### Payment Success (`payment_intent.succeeded`)
- Confirms the order in your database
- Triggers order fulfillment processes
- Sends confirmation emails to customers

### Payment Failure (`payment_intent.payment_failed`)
- Updates order status
- Notifies customer of payment issues
- Logs failed payment attempts

## Webhook Security

To ensure webhook security:
1. Always verify the webhook signature using the webhook secret
2. Process events idempotently (handle duplicate events gracefully)
3. Implement proper error handling

## Monitoring Webhooks

Monitor webhook activity in:
1. Stripe Dashboard → Developers → Webhooks → Recent Events
2. Supabase Edge Function logs
3. Your application's error tracking system

## Troubleshooting

Common webhook issues:
- Signature verification failures (check secret key)
- Timeouts (webhook processing too slow)
- Incorrect event handling

For detailed logs, check the Stripe Dashboard and Supabase function logs.

---

## Example Implementation

The following shows a basic webhook handler structure (already implemented in your project):

```typescript
// Simplified example of the webhook handler
import { createClient } from '@supabase/supabase-js';
import { Stripe } from 'stripe';

export async function handler(event) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const signature = event.headers['stripe-signature'];
  
  try {
    // Verify webhook signature
    const stripeEvent = stripe.webhooks.constructEvent(
      event.body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
    
    // Handle different event types
    switch (stripeEvent.type) {
      case 'payment_intent.succeeded':
        await handleSuccessfulPayment(stripeEvent.data.object);
        break;
      case 'payment_intent.payment_failed':
        await handleFailedPayment(stripeEvent.data.object);
        break;
      // Handle other events...
    }
    
    return { statusCode: 200 };
  } catch (error) {
    console.error('Webhook error:', error);
    return { statusCode: 400, body: `Webhook Error: ${error.message}` };
  }
}
```