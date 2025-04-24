# Stripe Integration Guide for Mintee

This document provides step-by-step instructions for setting up Stripe payments for the Mintee e-commerce platform.

## Overview

The Mintee website has been pre-integrated with Stripe to handle secure payments. The integration is complete but requires your Stripe account details before it can process real payments.

## Prerequisites

Before proceeding, ensure you have:
- Administrative access to your Mintee deployment
- Authority to create a Stripe account for your business
- Basic understanding of environment variables

## 1. Create a Stripe Account

1. Visit [Stripe's website](https://stripe.com) and click "Start now" or "Create account"
2. Follow the registration process, providing your business details
3. Complete the verification process (may require business documentation)

## 2. Obtain Your API Keys

Once your Stripe account is set up:

1. Log in to your [Stripe Dashboard](https://dashboard.stripe.com)
2. Navigate to Developers → API keys
3. You'll see two keys:
   - **Publishable Key**: Starts with `pk_test_` or `pk_live_`
   - **Secret Key**: Starts with `sk_test_` or `sk_live_`

For initial testing, use the test keys. For production, use the live keys.

> ⚠️ **Important**: Never share your Secret Key publicly. This key provides full access to your Stripe account.

## 3. Configure Environment Variables

The Mintee website uses environment variables to securely store Stripe keys:

1. Locate the `.env.example` file in the root directory
2. Create a copy and rename it to `.env`
3. Update the file with your Stripe API keys:

```
# Stripe API keys
VITE_STRIPE_PUBLIC_KEY=pk_test_your_publishable_key_here
STRIPE_SECRET_KEY=sk_test_your_secret_key_here

# Supabase (leave as is if already configured)
VITE_SUPABASE_URL=your_supabase_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

## 4. Deploy Stripe Edge Function

The website uses a Supabase Edge Function to securely handle payment intent creation:

1. Ensure you have access to your Supabase project
2. Deploy the `create-payment-intent` edge function from the `supabase/functions` directory
3. Set the `STRIPE_SECRET_KEY` in your Supabase environment

This function is already implemented and will communicate with Stripe's API securely.

## 5. Testing the Integration

Before going live, thoroughly test the payment system:

1. Use Stripe's test card numbers:
   - Success: `4242 4242 4242 4242`
   - Decline: `4000 0000 0000 0002`
   - Use any future expiry date, any 3-digit CVC, and any postal code
2. Place test orders on your website
3. Verify that payment intents appear in your Stripe Dashboard
4. Check that order confirmations work correctly

## 6. Going Live

When you're ready to accept real payments:

1. Complete Stripe's account verification process
2. Update your environment variables to use live keys (starting with `pk_live_` and `sk_live_`)
3. Re-deploy your application with the updated environment
4. Process a small real payment to verify everything works correctly

## 7. Monitoring Payments

After going live:

1. Regular payments will appear in your [Stripe Dashboard](https://dashboard.stripe.com)
2. Set up webhook notifications in Stripe for payment events
3. Configure email notifications for successful/failed payments

## Troubleshooting

If you encounter issues:

1. Check Stripe logs in your Dashboard under Developers → Logs
2. Verify API keys are correctly entered in environment variables
3. Ensure the edge function is properly deployed
4. Check browser console for any frontend errors

## Customer Support

For questions regarding the Stripe integration:
1. For technical issues with the implementation, contact your development team
2. For Stripe account questions, contact [Stripe Support](https://support.stripe.com)

---

## Appendix: Key Features of the Integration

The Mintee Stripe integration includes:

- Secure payment processing with Stripe Elements
- Built-in test mode for development
- Responsive checkout experience
- Automatic calculation of cart totals
- Proper handling of shipping costs
- Order metadata sent to Stripe for reference
- Support for Apple Pay and Google Pay (when enabled in Stripe Dashboard)

For any further customization needs, please consult with your development team.