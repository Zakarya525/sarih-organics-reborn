
import React, { createContext, useContext } from "react";
import { CartItem, Order, OrderStatus } from "@/types";
import { supabase } from "@/integrations/supabase/client";

interface OrderContextProps {
  createOrder: (order: Partial<Order>, items: CartItem[]) => Promise<string | null>;
}

const OrderContext = createContext<OrderContextProps | undefined>(undefined);

export const OrderProvider = ({ children }: { children: React.ReactNode }) => {
  const createOrder = async (order: Partial<Order>, cartItems: CartItem[]): Promise<string | null> => {
    try {
      // Create the order
      const orderNumber = `ORD-${Date.now()}`;
      
      const { data: orderData, error: orderError } = await supabase
        .from('orders')
        .insert({
          order_number: orderNumber,
          user_id: order.userId,
          status: order.status,
          total: order.total,
          shipping_address: order.shippingAddress,
          billing_address: order.billingAddress,
          payment_method: order.paymentMethod,
          shipping_fee: order.shipping,
        })
        .select('id')
        .single();

      if (orderError) {
        console.error("Error inserting order:", orderError);
        throw new Error("Failed to insert order");
      }
      
      // Create order items
      const orderItems = cartItems.map(item => ({
        order_id: orderData.id,
        product_id: item.id.toString(),
        product_name: item.name,
        product_price: item.price,
        quantity: item.quantity,
        total: item.price * item.quantity
      }));

      const { error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItems);

      if (itemsError) {
        console.error("Error inserting order items:", itemsError);
        throw new Error("Failed to insert order items");
      }

      return orderNumber;
    } catch (error) {
      console.error("Error in insertOrder:", error);
      throw new Error("Failed to insert order");
    }
  };

  return (
    <OrderContext.Provider value={{ createOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder must be used within an OrderProvider");
  }
  return context;
};
