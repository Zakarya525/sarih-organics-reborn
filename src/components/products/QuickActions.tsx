
import React from "react";
import { ShoppingCart, Eye } from "lucide-react";

interface QuickActionsProps {
  onAddToCart: (e: React.MouseEvent) => void;
  onQuickView: (e: React.MouseEvent) => void;
}

const QuickActions = ({ onAddToCart, onQuickView }: QuickActionsProps) => {
  return (
    <div className="absolute bottom-20 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
      <button
        onClick={onAddToCart}
        className="bg-white shadow-md rounded-full p-2 hover:bg-sari-cream-100 transition-colors"
        aria-label="Add to cart"
      >
        <ShoppingCart className="h-5 w-5 text-sari-terracotta-700" />
      </button>
      
      <button
        onClick={onQuickView}
        className="bg-white shadow-md rounded-full p-2 hover:bg-sari-cream-100 transition-colors"
        aria-label="Quick view"
      >
        <Eye className="h-5 w-5 text-sari-terracotta-700" />
      </button>
    </div>
  );
};

export default QuickActions;
