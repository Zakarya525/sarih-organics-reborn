
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Star, Eye, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  
  // Display 5 stars and use the product's rating to determine how many are filled
  const rating = product.reviews?.length ? 
    product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length : 
    5; // Default to 5 if no reviews
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    toast.success(`Added ${product.name} to your cart`);
  };
  
  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setQuickViewOpen(true);
  };

  const closeQuickView = () => {
    setQuickViewOpen(false);
    setQuantity(1);
  };

  const handleQuickAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`Added ${quantity} ${product.name} to your cart`);
    closeQuickView();
  };

  return (
    <div className="group relative">
      <Link to={`/product/${product.slug}`} className="block">
        <div className="aspect-square rounded-lg overflow-hidden bg-sari-cream-200">
          <OptimizedImage
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="mt-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-medium text-sari-terracotta-800">{product.name}</h3>
              <p className="text-sm text-sari-terracotta-600">{product.category}</p>
              
              {/* Rating display */}
              <div className="flex items-center mt-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4" 
                      fill={i < Math.floor(rating) ? "#F59E0B" : "transparent"} 
                      color={i < Math.floor(rating) ? "#F59E0B" : "#D1D5DB"} 
                    />
                  ))}
                </div>
                <span className="ml-1 text-xs text-sari-terracotta-500">
                  ({product.reviews?.length || 0})
                </span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-medium text-sari-terracotta-800">${product.price.toFixed(2)}</p>
              {product.oldPrice && (
                <p className="text-sm text-sari-terracotta-500 line-through">
                  ${product.oldPrice.toFixed(2)}
                </p>
              )}
            </div>
          </div>
        </div>
        
        {/* Quick actions */}
        <div className="absolute bottom-20 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={handleAddToCart}
            className="bg-white shadow-md rounded-full p-2 hover:bg-sari-cream-100 transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingCart className="h-5 w-5 text-sari-terracotta-700" />
          </button>
          
          <button
            onClick={handleQuickView}
            className="bg-white shadow-md rounded-full p-2 hover:bg-sari-cream-100 transition-colors"
            aria-label="Quick view"
          >
            <Eye className="h-5 w-5 text-sari-terracotta-700" />
          </button>
        </div>
        
        {/* Product badges */}
        {product.isNew && (
          <span className="absolute top-4 left-4 bg-sari-terracotta-600 text-white text-xs font-bold px-2 py-1 rounded">
            NEW
          </span>
        )}
        
        {product.isBestSeller && (
          <span className="absolute top-4 left-4 bg-sari-brown-500 text-white text-xs font-bold px-2 py-1 rounded">
            BESTSELLER
          </span>
        )}
        
        {product.discount > 0 && (
          <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            -{product.discount}%
          </span>
        )}
      </Link>

      {/* Quick View Modal */}
      {quickViewOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto relative">
            <button 
              onClick={closeQuickView}
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
                
                <div className="flex items-center mt-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-4 h-4" 
                        fill={i < Math.floor(rating) ? "#F59E0B" : "transparent"} 
                        color={i < Math.floor(rating) ? "#F59E0B" : "#D1D5DB"} 
                      />
                    ))}
                  </div>
                  <span className="ml-1 text-sm text-sari-terracotta-500">
                    ({product.reviews?.length || 0} reviews)
                  </span>
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
                    >
                      -
                    </button>
                    <span className="px-4 py-1">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1 border-l border-sari-cream-300"
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
      )}
    </div>
  );
};

export default ProductCard;
