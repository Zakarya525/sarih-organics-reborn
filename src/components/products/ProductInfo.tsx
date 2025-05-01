import React from "react";
import { Product } from "@/types";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { toast } from "@/components/ui/sonner";
import { Star, Check, Leaf, Zap, Heart } from "lucide-react";

interface ProductInfoProps {
  product: Product;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = React.useState(1);
  const [selectedWeight, setSelectedWeight] = React.useState("500G");

  const handleAddToCart = () => {
    addToCart(
      {
        ...product,
        selectedWeight: selectedWeight,
      },
      quantity
    );
    toast.success(
      `Added ${quantity} ${product.name} (${selectedWeight}) to your cart`
    );
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const savings = product.oldPrice
    ? product.oldPrice - (product.price || 0)
    : 0;

  return (
    <div>
      <h1 className="text-3xl font-display font-bold text-sari-terracotta-800 mb-2">
        {product.name}
      </h1>
      <p className="text-sari-terracotta-600 mb-4">{product.category}</p>

      <div className="flex items-center mb-4">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < (product.rating || 0)
                  ? "fill-sari-terracotta-500 text-sari-terracotta-500"
                  : "fill-gray-300 text-gray-300"
              }`}
            />
          ))}
        </div>
        <span className="ml-2 text-sm text-sari-terracotta-600">
          ({product.reviewCount || 0} reviews)
        </span>
      </div>

      <div className="mb-4">
        <div className="flex items-center">
          <span className="text-2xl font-medium text-sari-terracotta-800">
            ${product.price?.toFixed(2)}
          </span>
          {product.oldPrice && (
            <>
              <span className="ml-2 text-sari-terracotta-500 line-through">
                ${product.oldPrice?.toFixed(2)}
              </span>
              <span className="ml-2 text-sari-terracotta-700 font-medium">
                Save ${savings.toFixed(2)}
              </span>
            </>
          )}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-sm font-medium text-sari-terracotta-700 mb-2">
          Weight:
        </h3>
        <div className="flex flex-wrap gap-2">
          {["250G", "500G", "1000G"].map((weight) => (
            <Button
              key={weight}
              variant={selectedWeight === weight ? "default" : "outline"}
              className={`${
                selectedWeight === weight
                  ? "bg-sari-terracotta-500 hover:bg-sari-terracotta-600"
                  : "border-sari-terracotta-300 text-sari-terracotta-700 hover:bg-sari-terracotta-50"
              }`}
              onClick={() => setSelectedWeight(weight)}
            >
              {weight}
            </Button>
          ))}
        </div>
      </div>

      <p className="text-sari-terracotta-700 mb-6">{product.description}</p>

      {/* Benefits Section */}
      <div className="bg-sari-terracotta-50 p-4 rounded-lg mb-6">
        <h3 className="font-bold text-sari-terracotta-800 mb-3">Benefits:</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <Leaf className="h-4 w-4 text-sari-terracotta-600 mt-0.5 mr-2 flex-shrink-0" />
            <span>100% organic & pure — Natural vitamins and antioxidants</span>
          </li>
          <li className="flex items-start">
            <Zap className="h-4 w-4 text-sari-terracotta-600 mt-0.5 mr-2 flex-shrink-0" />
            <span>
              Gives instant energy, sharpens focus, boosts memory & melts away
              stress
            </span>
          </li>
          <li className="flex items-start">
            <Heart className="h-4 w-4 text-sari-terracotta-600 mt-0.5 mr-2 flex-shrink-0" />
            <span>
              Strengthens heart, improves digestion & keeps sugar levels in
              check
            </span>
          </li>
        </ul>

        <h3 className="font-bold text-sari-terracotta-800 mt-4 mb-3">
          What You Get:
        </h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <Check className="h-4 w-4 text-sari-terracotta-600 mt-0.5 mr-2 flex-shrink-0" />
            <span>Premium honey-nut fusion, rich in taste & nutrients</span>
          </li>
          <li className="flex items-start">
            <Check className="h-4 w-4 text-sari-terracotta-600 mt-0.5 mr-2 flex-shrink-0" />
            <span>
              Free shipping on orders over PKR 3,000, Fast delivery in 2–3 days
            </span>
          </li>
          <li className="flex items-start">
            <Check className="h-4 w-4 text-sari-terracotta-600 mt-0.5 mr-2 flex-shrink-0" />
            <span>
              100% MONEY-BACK: "Na khush? Pure paise wapas – 15 din ke andar!"
            </span>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center border border-sari-terracotta-300 rounded-md">
          <Button
            variant="ghost"
            className="text-sari-terracotta-700 hover:bg-sari-terracotta-50 h-10 w-10"
            onClick={handleDecrement}
          >
            -
          </Button>
          <span className="w-10 text-center">{quantity}</span>
          <Button
            variant="ghost"
            className="text-sari-terracotta-700 hover:bg-sari-terracotta-50 h-10 w-10"
            onClick={handleIncrement}
          >
            +
          </Button>
        </div>
        <Button
          onClick={handleAddToCart}
          className="bg-sari-terracotta-500 hover:bg-sari-terracotta-600 flex-1"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;
