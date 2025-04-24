import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { motion } from 'framer-motion';
import { useCart } from '../contexts/CartContext';

// This should be replaced with your actual Stripe publishable key
// Use environment variable for security
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY || 'pk_test_placeholder');

interface CheckoutFormProps {
  clientSecret: string;
  onSuccess: () => void;
  onCancel: () => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ clientSecret, onSuccess, onCancel }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      setError('Card element not found');
      setProcessing(false);
      return;
    }

    const { error: paymentError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: 'Customer Name', // This would be from a form field in production
        },
      }
    });

    setProcessing(false);

    if (paymentError) {
      setError(paymentError.message || 'An error occurred with your payment');
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      onSuccess();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white p-4 rounded-lg border border-neutral-200">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      <div className="flex gap-4">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 py-3 px-6 border border-neutral-300 rounded-lg text-neutral-700 hover:bg-neutral-50 transition-colors"
          disabled={processing}
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={processing || !stripe}
          className="flex-1 py-3 px-6 bg-primary text-white rounded-lg hover:bg-primary-600 transition-colors disabled:opacity-70"
        >
          {processing ? 'Processing...' : 'Pay Now'}
        </button>
      </div>
    </form>
  );
};

interface StripeCheckoutProps {
  isOpen: boolean;
  onClose: () => void;
}

const StripeCheckout: React.FC<StripeCheckoutProps> = ({ isOpen, onClose }) => {
  const { cartItems, subtotal, clearCart } = useCart();
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [clientSecret, setClientSecret] = useState('');
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    if (isOpen && cartItems.length > 0) {
      setLoading(true);

      // In a real implementation, this would call the Supabase Edge Function
      // to create a payment intent and get a client secret
      const fetchPaymentIntent = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-payment-intent`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
            },
            body: JSON.stringify({
              cartItems,
              shippingCost: 3.99
            })
          });

          if (!response.ok) {
            throw new Error('Failed to create payment intent');
          }

          const data = await response.json();
          setClientSecret(data.clientSecret);
          setLoading(false);
        } catch (error) {
          console.error('Error creating payment intent:', error);
          setLoading(false);
          // Handle error - perhaps show an error message to the user
        }
      };

      // For demo purposes, we'll simulate the API call
      // In production, uncomment the fetchPaymentIntent() call and remove this setTimeout
      setTimeout(() => {
        setClientSecret('client_secret_placeholder');
        setLoading(false);
      }, 1000);

      // fetchPaymentIntent();
    }
  }, [isOpen, cartItems]);

  const handlePaymentSuccess = () => {
    setPaymentCompleted(true);
    clearCart();
    // In a real app, you might want to redirect to an order confirmation page
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 m-4"
      >
        {paymentCompleted ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-gazpacho font-black text-2xl mb-4">Payment Successful!</h3>
            <p className="text-neutral-600 mb-6">Your order has been placed and will be processed soon.</p>
            <button
              onClick={onClose}
              className="btn btn-primary"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-gazpacho font-black text-2xl">Checkout</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full text-neutral-500 hover:bg-neutral-100 hover:text-neutral-800 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-neutral-600">Subtotal</span>
                <span className="font-medium">£{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-neutral-600">Shipping</span>
                <span className="font-medium">£3.99</span>
              </div>
              <div className="flex justify-between text-xl font-semibold pt-3 border-t border-neutral-200">
                <span>Total</span>
                <span>£{(subtotal + 3.99).toFixed(2)}</span>
              </div>
            </div>

            {loading ? (
              <div className="py-8 text-center">
                <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-neutral-600">Preparing checkout...</p>
              </div>
            ) : (
              <Elements stripe={stripePromise}>
                <CheckoutForm
                  clientSecret={clientSecret}
                  onSuccess={handlePaymentSuccess}
                  onCancel={onClose}
                />
              </Elements>
            )}
          </>
        )}
      </motion.div>
    </div>
  );
};

export default StripeCheckout;