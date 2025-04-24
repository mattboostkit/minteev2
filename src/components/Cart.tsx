import React, { useState } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'phosphor-react';
import { useCart } from '../contexts/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import StripeCheckout from './StripeCheckout';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { cartItems, updateQuantity, removeFromCart, subtotal } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/60 z-50 flex justify-end backdrop-blur-sm"
        onClick={handleBackdropClick}
      >
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.3 }}
          className="bg-white w-full max-w-md h-full flex flex-col"
        >
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="font-gazpacho font-black text-2xl">Your Basket</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-neutral-500 hover:bg-neutral-100 hover:text-neutral-800 transition-colors"
            >
              <X weight="bold" className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <ShoppingBag weight="thin" className="w-24 h-24 text-neutral-300 mb-6" />
                <h3 className="font-gazpacho font-black text-2xl mb-4">Your basket is empty</h3>
                <p className="text-neutral-500 mb-8">Looks like you haven't added any products to your basket yet.</p>
                <button
                  onClick={onClose}
                  className="btn btn-primary"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <AnimatePresence>
                {cartItems.map((item) => (
                  <motion.div
                    key={item.product.id}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex items-start py-6 border-b border-neutral-100"
                  >
                    <div className="w-20 h-20 rounded-xl overflow-hidden mr-4 bg-neutral-100">
                      <img
                        src={item.product.imageSrc}
                        alt={item.product.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="flex-grow">
                      <h4 className="font-medium text-lg mb-1">{item.product.name}</h4>
                      <p className="text-sm text-neutral-500 mb-3">{item.product.size}</p>
                      <div className="flex items-center">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center bg-neutral-100 rounded-full hover:bg-neutral-200 transition-colors"
                        >
                          <Minus weight="bold" className="w-4 h-4" />
                        </button>
                        <span className="mx-3 w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center bg-neutral-100 rounded-full hover:bg-neutral-200 transition-colors"
                        >
                          <Plus weight="bold" className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col items-end">
                      <span className="font-semibold text-lg">£{(item.product.price * item.quantity).toFixed(2)}</span>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="mt-3 p-2 rounded-full text-neutral-400 hover:bg-neutral-100 hover:text-red-500 transition-colors"
                      >
                        <X weight="bold" className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="p-6 border-t">
              <div className="flex justify-between mb-2">
                <span className="text-neutral-600">Subtotal</span>
                <span className="font-medium">£{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-neutral-600">Shipping</span>
                <span className="font-medium">£3.99</span>
              </div>
              <div className="flex justify-between text-xl font-semibold mb-6 pt-3 border-t">
                <span>Total</span>
                <span>£{(subtotal + 3.99).toFixed(2)}</span>
              </div>
              <button
                onClick={handleCheckout}
                className="btn btn-primary w-full py-4"
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </motion.div>
      </div>

      <StripeCheckout isOpen={isCheckoutOpen} onClose={handleCloseCheckout} />
    </>
  );
};

export default Cart;