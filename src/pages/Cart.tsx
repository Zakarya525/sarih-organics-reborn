
import React from "react";
import { Link } from "react-router-dom";
import { Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/sonner";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  
  if (cartItems.length === 0) {
    return (
      <Layout>
        <div className="container-custom py-16">
          <div className="flex flex-col items-center justify-center py-12">
            <h1 className="text-3xl font-display text-sari-terracotta-800 mb-4">Your Cart is Empty</h1>
            <p className="text-sari-terracotta-600 mb-8 text-center max-w-md">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sari-terracotta-500 hover:bg-sari-terracotta-600 transition"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container-custom py-12">
        <h1 className="text-3xl font-display font-bold text-sari-terracotta-800 mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="hidden md:grid md:grid-cols-12 text-sm font-medium text-sari-terracotta-600 mb-4">
                <div className="md:col-span-6">Product</div>
                <div className="md:col-span-2 text-center">Price</div>
                <div className="md:col-span-2 text-center">Quantity</div>
                <div className="md:col-span-2 text-center">Total</div>
              </div>
              
              <Separator className="mb-6 md:hidden" />
              
              {cartItems.map((item) => (
                <div key={item.id} className="py-6 border-b border-sari-cream-200 last:border-b-0">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    {/* Product */}
                    <div className="md:col-span-6 flex items-center space-x-4">
                      <div className="w-20 h-20 bg-sari-cream-100 rounded-md overflow-hidden">
                        <OptimizedImage
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <Link to={`/product/${item.slug}`} className="font-medium text-sari-terracotta-800 hover:text-sari-terracotta-600">
                          {item.name}
                        </Link>
                        <p className="text-sm text-sari-terracotta-600">{item.category}</p>
                        
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-sm text-red-500 flex items-center mt-2 md:hidden"
                        >
                          <Trash2 className="w-4 h-4 mr-1" />
                          Remove
                        </button>
                      </div>
                    </div>
                    
                    {/* Price */}
                    <div className="md:col-span-2 text-right md:text-center">
                      <div className="md:hidden text-sm text-sari-terracotta-600">Price:</div>
                      <div className="font-medium text-sari-terracotta-800">${item.price.toFixed(2)}</div>
                    </div>
                    
                    {/* Quantity */}
                    <div className="md:col-span-2 md:text-center">
                      <div className="md:hidden text-sm text-sari-terracotta-600 mb-1">Quantity:</div>
                      <div className="flex items-center border border-sari-cream-300 rounded-md w-28 md:mx-auto">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 text-sari-terracotta-600 hover:text-sari-terracotta-800"
                          disabled={item.quantity <= 1}
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </button>
                        <span className="px-3 py-1 border-x border-sari-cream-300 flex-1 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 text-sari-terracotta-600 hover:text-sari-terracotta-800"
                          disabled={item.quantity >= (item.stockQuantity || 10)}
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    
                    {/* Total */}
                    <div className="md:col-span-2 text-right md:text-center">
                      <div className="md:hidden text-sm text-sari-terracotta-600">Total:</div>
                      <div className="font-medium text-sari-terracotta-800">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                      
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-sm text-red-500 hidden md:flex md:justify-center items-center mt-2"
                      >
                        <Trash2 className="w-4 h-4 mr-1" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="mt-6 flex justify-between">
                <Link
                  to="/shop"
                  className="flex items-center text-sari-terracotta-600 hover:text-sari-terracotta-800"
                >
                  <ChevronLeft className="mr-1 h-4 w-4" />
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-28">
              <h2 className="text-lg font-medium text-sari-terracotta-800 mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-sari-terracotta-600">Subtotal</span>
                  <span className="font-medium text-sari-terracotta-800">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sari-terracotta-600">Shipping</span>
                  <span className="font-medium text-sari-terracotta-800">
                    {cartTotal >= 3000 ? "Free" : "$150.00"}
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="font-medium text-sari-terracotta-800">Total</span>
                  <span className="font-bold text-lg text-sari-terracotta-800">
                    ${cartTotal >= 3000 ? cartTotal.toFixed(2) : (cartTotal + 150).toFixed(2)}
                  </span>
                </div>
              </div>
              
              <Link to="/checkout">
                <Button className="w-full bg-sari-terracotta-500 hover:bg-sari-terracotta-600">
                  Proceed to Checkout
                </Button>
              </Link>
              
              <div className="mt-4 text-xs text-center text-sari-terracotta-600">
                Free shipping on all orders over Rs. 3,000
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
