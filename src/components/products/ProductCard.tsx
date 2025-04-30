
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { toast } from "@/components/ui/sonner";
import ProductRating from "./ProductRating";
import ProductBadges from "./ProductBadges";
import QuickView from "./QuickView";
import ProductPriceDisplay from "./ProductPriceDisplay";
import QuickActions from "./QuickActions";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  
  // Calculate rating
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

  const handleQuickAddToCart = (quantity: number) => {
    addToCart(product, quantity);
    toast.success(`Added ${quantity} ${product.name} to your cart`);
    setQuickViewOpen(false);
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
              <div className="mt-1">
                <ProductRating 
                  rating={rating} 
                  reviewCount={product.reviews?.length || 0} 
                />
              </div>
            </div>
            <ProductPriceDisplay price={product.price} oldPrice={product.oldPrice} />
          </div>
        </div>
        
        {/* Quick actions */}
        <QuickActions onAddToCart={handleAddToCart} onQuickView={handleQuickView} />
        
        {/* Product badges */}
        <ProductBadges 
          isNew={product.isNew} 
          isBestSeller={product.isBestSeller} 
          discount={product.discount} 
        />
      </Link>

      {/* Quick View Modal */}
      <QuickView 
        product={product}
        open={quickViewOpen}
        onClose={() => setQuickViewOpen(false)}
        onAddToCart={handleQuickAddToCart}
      />
    </div>
  );
};

export default ProductCard;
