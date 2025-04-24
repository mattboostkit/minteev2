# Stripe Testing Guide

This document provides instructions for testing the Stripe payment integration on the Mintee website.

## Test Card Numbers

Use these card numbers to simulate different payment scenarios:

| Card Number | Description |
|-------------|-------------|
| 4242 4242 4242 4242 | Success - Payment succeeds |
| 4000 0000 0000 0027 | Requires authentication (3D Secure) |
| 4000 0000 0000 9995 | Payment declined (insufficient funds) |
| 4000 0000 0000 0069 | Payment declined (expired card) |
| 4000 0000 0000 3220 | Payment succeeds but card is later disputed |

## Testing Credentials

For any test card, use:
- Any future expiration date (MM/YY)
- Any 3-digit CVC
- Any postal code

## Common Testing Scenarios

### Successful Payment
1. Add products to cart
2. Proceed to checkout
3. Enter card number: 4242 4242 4242 4242
4. Complete payment
5. Verify successful confirmation

### Failed Payment
1. Add products to cart
2. Proceed to checkout
3. Enter card number: 4000 0000 0000 9995
4. Complete payment
5. Verify appropriate error message

### 3D Secure Authentication
1. Add products to cart
2. Proceed to checkout
3. Enter card number: 4000 0000 0000 0027
4. Complete 3D Secure challenge in popup
5. Verify successful confirmation

## Testing in Different Environments

### Development Environment
- Uses test API keys (pk_test_*)
- Transactions appear in Stripe Dashboard with "Test" badge
- No real charges occur

### Production Environment
- Uses live API keys (pk_live_*)
- Real transactions will occur
- Always use test cards during development and staging

## Verifying Test Results

After running tests, verify:

1. **Stripe Dashboard**: Check that payment intents appear correctly
2. **Order Database**: Confirm order records are created properly
3. **Email Confirmations**: Test that order confirmation emails send correctly
4. **Cart State**: Verify cart clears after successful payment

## Customizing the Payment Experience

The Stripe Elements integration can be customized in:
- `src/components/StripeCheckout.tsx`

For visual styling changes, modify the `options` object in the CardElement component.

---

## Additional Test Resources

- [Stripe Testing Documentation](https://stripe.com/docs/testing)
- [Test Clocks for Subscription Testing](https://stripe.com/docs/billing/testing/test-clocks)
- [Testing Radar (Fraud Prevention)](https://stripe.com/docs/radar/testing)