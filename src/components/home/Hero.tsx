
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-sari-green-100 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3')" }}
      />
      <div className="container-custom relative z-10 py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-sari-green-800 mb-4">
            Natural & Organic Products from Bali
          </h1>
          <p className="text-lg md:text-xl text-sari-green-700 mb-8">
            Handcrafted with care, our organic products support local farmers and sustainable practices. Taste the difference.
          </p>
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <Link 
              to="/shop" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sari-green-600 hover:bg-sari-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sari-green-500 transition"
            >
              Shop Now
            </Link>
            <Link 
              to="/about" 
              className="inline-flex items-center justify-center px-6 py-3 border border-sari-green-600 text-base font-medium rounded-md text-sari-green-700 bg-transparent hover:bg-sari-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sari-green-500 transition"
            >
              Learn Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
