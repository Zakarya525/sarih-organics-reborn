
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const OrderSuccess = () => {
  const [searchParams] = useSearchParams();
  const orderNumber = searchParams.get("order");
  const [countdown, setCountdown] = useState(10);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  useEffect(() => {
    if (countdown === 0) {
      window.location.href = "/";
    }
  }, [countdown]);

  return (
    <Layout>
      <div className="container-custom py-16">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <Check className="h-12 w-12 text-green-600" />
            </div>
          </div>
          
          <h1 className="text-3xl font-display font-bold text-sari-terracotta-800 mb-4">
            Thank You for Your Order!
          </h1>
          
          {orderNumber ? (
            <p className="text-sari-terracotta-600 mb-6">
              Your order <span className="font-medium">{orderNumber}</span> has been received and is now being processed.
            </p>
          ) : (
            <p className="text-sari-terracotta-600 mb-6">
              Your order has been received and is now being processed.
            </p>
          )}
          
          <p className="text-sari-terracotta-600 mb-8">
            We've sent you an email with your order details and will notify you when your order has shipped.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/">
              <Button className="bg-sari-terracotta-500 hover:bg-sari-terracotta-600">
                Continue Shopping
              </Button>
            </Link>
          </div>
          
          <p className="text-sm text-sari-terracotta-500 mt-8">
            Redirecting to homepage in {countdown} seconds...
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default OrderSuccess;
