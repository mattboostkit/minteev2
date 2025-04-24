import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'phosphor-react';
import { Product } from '../types';
import { useCart } from '../contexts/CartContext';

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <div className="aspect-square overflow-hidden relative">
            <img
              src={product.imageSrc}
              alt={product.name}
              className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="p-8">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="badge badge-primary">
                {product.size}
              </span>
              <span className="badge badge-neutral">
                {product.category}
              </span>
            </div>

            <div className="flex justify-between items-start mb-3">
              <h3 className="font-inter-tight font-semibold text-2xl">
                {product.name}
              </h3>
              <span className="font-semibold text-xl">£{product.price.toFixed(2)}</span>
            </div>

            <p className="text-neutral-600 mb-6">
              {product.description}
            </p>

            <div className="flex justify-between items-center">
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                product.inStock
                  ? 'bg-green-50 text-green-600'
                  : 'bg-red-50 text-red-600'
              }`}>
                {product.inStock ? 'In stock' : 'Out of stock'}
              </span>

              <button
                onClick={() => addToCart(product)}
                disabled={!product.inStock}
                className={`btn ${
                  product.inStock
                    ? 'btn-primary'
                    : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                }`}
              >
                <ShoppingCart weight="bold" className="w-5 h-5 mr-2" />
                Add to Basket
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProductList;