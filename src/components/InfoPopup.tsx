import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'phosphor-react';

interface InfoPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const InfoPopup: React.FC<InfoPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-6 m-4"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-gazpacho font-black text-2xl">Stripe Integration Demo</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-neutral-500 hover:bg-neutral-100 hover:text-neutral-800 transition-colors"
          >
            <X weight="bold" className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 mb-6">
          <p className="text-neutral-700">
            This is a demonstration of the Stripe payment integration. In this demo mode:
          </p>

          <ul className="list-disc list-inside space-y-2 text-neutral-700">
            <li>The checkout process is simulated</li>
            <li>No actual payments are processed</li>
            <li>No credit card information is sent to Stripe</li>
            <li>For testing with real payments, you'll need to add your Stripe API keys</li>
          </ul>

          <div className="bg-primary-50 p-4 rounded-lg">
            <h3 className="font-medium text-primary mb-2">To set up real payments:</h3>
            <ol className="list-decimal list-inside space-y-1 text-neutral-700">
              <li>Create a Stripe account at <a href="https://stripe.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">stripe.com</a></li>
              <li>Get your API keys from the Stripe Dashboard</li>
              <li>Rename <span className="font-mono bg-neutral-100 px-1 rounded">.env.example</span> to <span className="font-mono bg-neutral-100 px-1 rounded">.env</span></li>
              <li>Add your Stripe publishable and secret keys to the .env file</li>
              <li>Deploy the Supabase edge function for payment intent creation</li>
            </ol>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="btn btn-primary"
          >
            Got it
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default InfoPopup;