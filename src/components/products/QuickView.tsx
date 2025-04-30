
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, X } from "lucide-react";
import { Product } from "@/types";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { Button } from "@/components/ui/button";
import ProductRating from "./ProductRating";

interface QuickViewProps {
  product: Product;
  open: boolean;
  onClose: () => void;
  onAddToCart: (quantity: number) => void;
}

const QuickView = ({ product, open, onClose, onAddToCart }: QuickViewProps) => {
  const [quantity, setQuantity] = useState(1);

  if (!open) return null;
  
  // Calculate rating
  const rating = product.reviews?.length ? 
    product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length : 
    5;
    
  const handleQuickAddToCart = () => {
    onAddToCart(quantity);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto relative">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 bg-white rounded-full p-1 shadow-md hover:bg-sari-cream-100"
        >
          <X className="h-5 w-5 text-sari-terracotta-800" />
        </button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          <div className="aspect-square rounded-lg overflow-hidden bg-sari-cream-100">
            <OptimizedImage
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="flex flex-col">
            <h2 className="text-2xl font-display font-bold text-sari-terracotta-800">{product.name}</h2>
            <p className="text-sari-terracotta-600 mt-1">{product.category}</p>
            
            <div className="mt-2">
              <ProductRating 
                rating={rating} 
                reviewCount={product.reviews?.length || 0} 
                size="md"
              />
            </div>
            
            <div className="mt-4">
              <span className="text-2xl font-medium text-sari-terracotta-800">
                ${product.price.toFixed(2)}
              </span>
              {product.oldPrice && (
                <span className="ml-2 text-sari-terracotta-500 line-through">
                  ${product.oldPrice.toFixed(2)}
                </span>
              )}
            </div>
            
            <p className="mt-4 text-sari-terracotta-700">{product.description}</p>
            
            <div className="mt-6 flex items-center">
              <span className="mr-4">Quantity:</span>
              <div className="flex border border-sari-cream-300 rounded">
                <button 
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  className="px-3 py-1 border-r border-sari-cream-300"
                  type="button"
                >
                  -
                </button>
                <span className="px-4 py-1">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 border-l border-sari-cream-300"
                  type="button"
                >
                  +
                </button>
              </div>
            </div>
            
            <div className="mt-6 space-y-2">
              <Button 
                onClick={handleQuickAddToCart}
                className="w-full bg-sari-terracotta-500 hover:bg-sari-terracotta-600"
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
              
              <Link 
                to={`/product/${product.slug}`}
                className="block text-center text-sari-terracotta-700 hover:text-sari-terracotta-800 underline"
              >
                View Full Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickView;
