import React, { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/sonner";
import { useNavigate } from "react-router-dom";
import { OrderStatus } from "@/types";
import { useUser } from "@clerk/clerk-react";
import { supabase } from "@/integrations/supabase/client";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { user } = useUser();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    paymentMethod: "Credit Card",
  });

  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        name: `${user.firstName} ${user.lastName}`,
      }));
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const subtotal = calculateSubtotal();
  const shippingCost = subtotal > 3000 ? 0 : 50;
  const taxRate = 0.05;
  const tax = subtotal * taxRate;
  const total = subtotal + shippingCost + tax;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (cart.length === 0) {
      toast.error("Your cart is empty.");
      return;
    }

    setIsSubmitting(true);
    try {
      await insertOrder();
      clearCart();
      toast.success("Order placed successfully!");
      navigate("/order-success");
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("Failed to place order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

const insertOrder = async () => {
  try {
    // Convert the product IDs to strings for Supabase
    const orderItems = cart.map(item => ({
      product_id: item.id.toString(), // Convert to string to match UUID type
      product_name: item.name,
      product_price: item.price,
      quantity: item.quantity,
      total: item.price * item.quantity
    }));

    const { data: orderData, error: orderError } = await supabase
      .from('orders')
      .insert({
        user_id: user?.id,
        order_number: `ORD-${Date.now()}`,
        date: new Date().toISOString(),
        status: OrderStatus.Pending,
        subtotal: calculateSubtotal(),
        shipping: shippingCost,
        tax: tax,
        total: total,
        shipping_address: formData.address,
        payment_method: formData.paymentMethod,
      })
      .select('id')
      .single();

    if (orderError) {
      console.error("Error inserting order:", orderError);
      throw new Error("Failed to insert order");
    }

    const orderId = orderData.id;

    // Insert order items
    const { error: orderItemsError } = await supabase
      .from('order_items')
      .insert(
        orderItems.map(item => ({
          order_id: orderId,
          product_id: item.product_id,
          product_name: item.product_name,
          quantity: item.quantity,
          price: item.product_price,
          total: item.total,
        }))
      );

    if (orderItemsError) {
      console.error("Error inserting order items:", orderItemsError);
      throw new Error("Failed to insert order items");
    }
  } catch (error) {
    console.error("Error in insertOrder:", error);
    throw error;
  }
};


  return (
    <div className="container mx-auto mt-10">
      <Card className="lg:w-4/5 xl:w-3/5 mx-auto">
        <CardHeader className="bg-sari-cream-100">
          <CardTitle className="text-2xl font-bold text-sari-terracotta-800">Checkout</CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-sari-terracotta-700">Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1"
                  required
                />
              </div>
              <div>
                <Label htmlFor="address" className="text-sari-terracotta-700">Address</Label>
                <Input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-1"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <Label htmlFor="city" className="text-sari-terracotta-700">City</Label>
                <Input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="mt-1"
                  required
                />
              </div>
              <div>
                <Label htmlFor="postalCode" className="text-sari-terracotta-700">Postal Code</Label>
                <Input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  className="mt-1"
                  required
                />
              </div>
              <div>
                <Label htmlFor="country" className="text-sari-terracotta-700">Country</Label>
                <Input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="mt-1"
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="paymentMethod" className="text-sari-terracotta-700">Payment Method</Label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="w-full mt-1 rounded-md border border-sari-cream-300 shadow-sm focus:border-sari-terracotta-300 focus:ring focus:ring-sari-terracotta-200 focus:ring-opacity-50"
              >
                <option>Credit Card</option>
                <option>PayPal</option>
                <option>Cash on Delivery</option>
              </select>
            </div>

            <Separator />

            <div>
              <h3 className="text-xl font-semibold text-sari-terracotta-800 mb-4">Order Summary</h3>
              <ul className="space-y-3">
                {cart.map((item) => (
                  <li key={item.id} className="flex justify-between text-sari-terracotta-700">
                    <span>{item.name} ({item.quantity})</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Separator />

            <div className="space-y-2 text-sari-terracotta-700">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>${shippingCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax ({(taxRate * 100).toFixed(0)}%):</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold text-sari-terracotta-800">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-sari-terracotta-600 hover:bg-sari-terracotta-700 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Placing Order..." : "Place Order"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Checkout;
