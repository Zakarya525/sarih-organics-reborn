
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Layout from "@/components/layout/Layout";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/sonner";
import { supabase } from "@/integrations/supabase/client";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  paymentMethod: "cash_on_delivery" | "bank_transfer";
  notes: string;
  sameAsBilling: boolean;
};

const Checkout = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    defaultValues: {
      country: "Pakistan",
      paymentMethod: "cash_on_delivery",
      sameAsBilling: true,
    },
  });

  const sameAsBilling = watch("sameAsBilling");
  
  if (cartItems.length === 0) {
    navigate("/cart");
    return null;
  }
  
  const shippingFee = cartTotal >= 3000 ? 0 : 150;
  const orderTotal = cartTotal + shippingFee;
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Generate order number
      const orderNumber = `ORD-${Date.now().toString().slice(-8)}`;
      
      // Prepare shipping address
      const shippingAddress = {
        name: `${data.firstName} ${data.lastName}`,
        addressLine1: data.address,
        city: data.city,
        state: data.state,
        postalCode: data.postalCode,
        country: data.country,
        phone: data.phone,
      };
      
      // Create order in Supabase
      const { data: order, error } = await supabase
        .from('orders')
        .insert({
          order_number: orderNumber,
          total: orderTotal,
          shipping_fee: shippingFee,
          payment_method: data.paymentMethod,
          shipping_address: shippingAddress,
          billing_address: data.sameAsBilling ? shippingAddress : null,
          notes: data.notes,
        })
        .select('id')
        .single();
      
      if (error) throw error;
      
      // Add order items
      const orderItems = cartItems.map((item) => ({
        order_id: order.id,
        product_id: item.id,
        product_name: item.name,
        product_price: item.price,
        quantity: item.quantity,
        total: item.price * item.quantity,
      }));
      
      const { error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItems);
      
      if (itemsError) throw itemsError;
      
      // Clear cart and redirect to success page
      clearCart();
      toast.success("Order placed successfully!");
      navigate(`/order-success?order=${orderNumber}`);
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("Failed to place order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="container-custom py-12">
        <h1 className="text-3xl font-display font-bold text-sari-terracotta-800 mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-xl font-medium text-sari-terracotta-800 mb-4">Contact Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name*</Label>
                    <Input
                      id="firstName"
                      placeholder="First name"
                      {...register("firstName", { required: "First name is required" })}
                      className={errors.firstName ? "border-red-500" : ""}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm">{errors.firstName.message}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name*</Label>
                    <Input
                      id="lastName"
                      placeholder="Last name"
                      {...register("lastName", { required: "Last name is required" })}
                      className={errors.lastName ? "border-red-500" : ""}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email*</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Email address"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "Invalid email address",
                        },
                      })}
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email.message}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone*</Label>
                    <Input
                      id="phone"
                      placeholder="Phone number"
                      {...register("phone", { required: "Phone is required" })}
                      className={errors.phone ? "border-red-500" : ""}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm">{errors.phone.message}</p>
                    )}
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <h2 className="text-xl font-medium text-sari-terracotta-800 mb-4">Shipping Address</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="address">Address*</Label>
                    <Input
                      id="address"
                      placeholder="Street address"
                      {...register("address", { required: "Address is required" })}
                      className={errors.address ? "border-red-500" : ""}
                    />
                    {errors.address && (
                      <p className="text-red-500 text-sm">{errors.address.message}</p>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City*</Label>
                      <Input
                        id="city"
                        placeholder="City"
                        {...register("city", { required: "City is required" })}
                        className={errors.city ? "border-red-500" : ""}
                      />
                      {errors.city && (
                        <p className="text-red-500 text-sm">{errors.city.message}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="state">State/Province*</Label>
                      <Input
                        id="state"
                        placeholder="State or province"
                        {...register("state", { required: "State is required" })}
                        className={errors.state ? "border-red-500" : ""}
                      />
                      {errors.state && (
                        <p className="text-red-500 text-sm">{errors.state.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="postalCode">Postal Code*</Label>
                      <Input
                        id="postalCode"
                        placeholder="Postal code"
                        {...register("postalCode", { required: "Postal code is required" })}
                        className={errors.postalCode ? "border-red-500" : ""}
                      />
                      {errors.postalCode && (
                        <p className="text-red-500 text-sm">{errors.postalCode.message}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="country">Country*</Label>
                      <Input
                        id="country"
                        placeholder="Country"
                        {...register("country", { required: "Country is required" })}
                        className={errors.country ? "border-red-500" : ""}
                      />
                      {errors.country && (
                        <p className="text-red-500 text-sm">{errors.country.message}</p>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center mb-6">
                  <input
                    type="checkbox"
                    id="sameAsBilling"
                    {...register("sameAsBilling")}
                    className="rounded border-sari-cream-300 text-sari-terracotta-600 shadow-sm focus:border-sari-terracotta-300 focus:ring focus:ring-sari-terracotta-200 focus:ring-opacity-50"
                  />
                  <label htmlFor="sameAsBilling" className="ml-2 text-sm text-sari-terracotta-700">
                    Billing address same as shipping address
                  </label>
                </div>
                
                <Separator className="my-6" />
                
                <h2 className="text-xl font-medium text-sari-terracotta-800 mb-4">Payment Method</h2>
                
                <div className="mb-6">
                  <RadioGroup defaultValue="cash_on_delivery" className="space-y-3" {...register("paymentMethod")}>
                    <div className="flex items-center space-x-2 border p-3 rounded-md">
                      <RadioGroupItem value="cash_on_delivery" id="cash_on_delivery" />
                      <Label htmlFor="cash_on_delivery" className="flex-1">Cash on Delivery</Label>
                    </div>
                    <div className="flex items-center space-x-2 border p-3 rounded-md">
                      <RadioGroupItem value="bank_transfer" id="bank_transfer" />
                      <Label htmlFor="bank_transfer" className="flex-1">Bank Transfer</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="mb-6">
                  <Label htmlFor="notes">Order Notes (optional)</Label>
                  <Textarea
                    id="notes"
                    placeholder="Notes about your order, e.g. special delivery instructions"
                    className="mt-1"
                    {...register("notes")}
                  />
                </div>
              </form>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-28">
              <h2 className="text-lg font-medium text-sari-terracotta-800 mb-4">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex space-x-3">
                    <div className="w-16 h-16 bg-sari-cream-100 rounded-md overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-sari-terracotta-800">{item.name}</p>
                      <p className="text-xs text-sari-terracotta-600">{item.quantity} x ${item.price.toFixed(2)}</p>
                    </div>
                    <div className="text-sm font-medium text-sari-terracotta-800">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-3 mb-6">
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
                    ${orderTotal.toFixed(2)}
                  </span>
                </div>
              </div>
              
              <Button 
                onClick={handleSubmit(onSubmit)}
                className="w-full bg-sari-terracotta-500 hover:bg-sari-terracotta-600"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Place Order"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
