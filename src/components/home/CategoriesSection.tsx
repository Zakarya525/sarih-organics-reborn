
import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Granola",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3",
    link: "/shop/granola"
  },
  {
    id: 2,
    name: "Honey",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3",
    link: "/shop/honey"
  },
  {
    id: 3,
    name: "Cookies",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3",
    link: "/shop/cookies"
  },
  {
    id: 4,
    name: "Jams & Spreads",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3",
    link: "/shop/jams"
  }
];

const CategoriesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-sari-green-800">Shop by Category</h2>
          <p className="mt-4 text-sari-green-600 max-w-2xl mx-auto">
            Explore our range of handcrafted organic products, made with love in Bali
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link to={category.link} key={category.id} className="group">
              <div className="relative rounded-lg overflow-hidden h-64">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sari-green-900/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                  <p className="text-sari-cream-100 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Shop Now &rarr;
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
