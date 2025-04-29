
import React from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-sari-cream-100 py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3')" }}
        />
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-sari-terracotta-800 mb-6">
            Our Story: Nature's Purity, Delivered to You
          </h1>
          <p className="text-lg md:text-xl text-sari-terracotta-700 max-w-3xl mx-auto">
            Founded with a passion for organic nutrition and sustainable sourcing, 
            we're on a mission to bring the purest, most natural products to your table.
          </p>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-16 bg-white">
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
              <div className="space-y-4 mb-8">
                <h2 className="text-3xl font-display font-bold text-sari-terracotta-800">
                  Organic Nutrition
                </h2>
                <p className="text-sari-terracotta-700">
                  At Sari Horganics, we believe that what you put into your body matters. Our products 
                  are crafted with carefully selected organic ingredients, free from pesticides, 
                  GMOs, and artificial additives. We're committed to providing foods that nourish 
                  both body and soul, bringing you closer to nature with every bite.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-3xl font-display font-bold text-sari-terracotta-800">
                  Sustainable Sourcing
                </h2>
                <p className="text-sari-terracotta-700">
                  Our relationship with the earth is sacred. We work directly with local farmers 
                  who share our vision for sustainable agriculture. By supporting traditional 
                  farming practices and ensuring fair compensation, we're helping to preserve 
                  both cultural heritage and environmental integrity for generations to come.
                </p>
              </div>
              
              <Link 
                to="/shop" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sari-terracotta-500 hover:bg-sari-terracotta-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sari-terracotta-500 transition mt-4"
              >
                Shop Our Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-16 bg-sari-cream-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-sari-terracotta-800">
                Our Promise
              </h2>
              <p className="text-lg text-sari-terracotta-700">
                We promise to deliver products of exceptional quality, made with integrity and care. 
                From our farm to your home, every step of our process is guided by respect for 
                nature and a commitment to your well-being.
              </p>
              <p className="text-lg text-sari-terracotta-700">
                Our dedication to quality isn't just about what we put in our products – it's also 
                about what we leave out. No artificial preservatives, no chemical additives, 
                and no shortcuts. Just pure, natural goodness in every package.
              </p>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-sari-terracotta-800">
                Our Sourcing
              </h2>
              <p className="text-lg text-sari-terracotta-700">
                We personally visit every farm we source from, building lasting relationships with 
                the farmers who grow our ingredients. By keeping our supply chain short and transparent, 
                we ensure that every product meets our exacting standards.
              </p>
              <p className="text-lg text-sari-terracotta-700">
                Our ingredients are harvested at peak ripeness and processed within hours to preserve 
                their nutritional integrity. This farm-to-table approach means you're getting the 
                freshest, most flavorful products possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-sari-terracotta-800 text-center mb-12">
            Our Quality Standards
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex">
              <div className="flex-shrink-0 w-12 h-12 bg-sari-terracotta-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold">01</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-sari-terracotta-800 mb-2">
                  Highest Purity Standards
                </h3>
                <p className="text-sari-terracotta-700">
                  We rigorously test all our products to ensure they meet the highest standards of purity. 
                  Our commitment to quality means you can trust what's in every package.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 w-12 h-12 bg-sari-terracotta-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold">02</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-sari-terracotta-800 mb-2">
                  100% Certified Organic
                </h3>
                <p className="text-sari-terracotta-700">
                  Every ingredient we use is certified organic, grown without synthetic pesticides or fertilizers. 
                  We believe organic isn't just better for you – it's better for the planet.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 w-12 h-12 bg-sari-terracotta-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold">03</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-sari-terracotta-800 mb-2">
                  Traditional Processing Methods
                </h3>
                <p className="text-sari-terracotta-700">
                  We honor traditional processing techniques that have been refined over generations. 
                  These methods preserve the natural flavors and nutritional benefits of our ingredients.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 w-12 h-12 bg-sari-terracotta-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold">04</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-sari-terracotta-800 mb-2">
                  Eco-Friendly Packaging
                </h3>
                <p className="text-sari-terracotta-700">
                  Our commitment to sustainability extends to our packaging. We use eco-friendly, 
                  biodegradable materials that minimize our environmental footprint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sari-terracotta-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Experience the Sari Horganics Difference
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join us in our mission to make pure, organic nutrition accessible to everyone.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              to="/shop" 
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-sari-terracotta-500 transition"
            >
              Shop Our Products
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-transparent text-base font-medium rounded-md text-sari-terracotta-500 bg-white hover:bg-sari-cream-100 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
