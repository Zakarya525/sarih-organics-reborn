
import React from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3" 
                alt="Organic farming at Sari Horganics" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-lg overflow-hidden shadow-lg hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3" 
                alt="Organic produce" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-sari-green-100 text-sari-green-800 rounded-full px-4 py-1 text-sm font-medium">
                Our Story
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-sari-green-800">
              Committed to Sustainable Organic Products
            </h2>
            <p className="text-sari-green-600">
              Founded in 2010, Sari Horganics was born from a passion to create truly organic products while supporting local Balinese farmers. From our humble beginnings at the Ubud market, we've grown while staying true to our values.
            </p>
            <p className="text-sari-green-600">
              Every product is carefully crafted using traditional methods, with ingredients sourced from our own organic farm and trusted local suppliers. We're committed to sustainability and ethical practices at every step.
            </p>
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              <div>
                <div className="text-3xl font-display font-bold text-sari-green-600">15+</div>
                <p className="text-sari-green-700">Years of Experience</p>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-sari-green-600">100%</div>
                <p className="text-sari-green-700">Organic Ingredients</p>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-sari-green-600">50+</div>
                <p className="text-sari-green-700">Local Farmers Supported</p>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-sari-green-600">30+</div>
                <p className="text-sari-green-700">Unique Products</p>
              </div>
            </div>
            <Link 
              to="/about" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sari-green-600 hover:bg-sari-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sari-green-500 transition"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
