
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const { cartItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-xl md:text-2xl font-display font-bold text-sari-terracotta-600">
              Sari Horganics
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-sari-terracotta-800 hover:text-sari-terracotta-600 transition">
              Home
            </Link>
            <Link to="/shop" className="font-medium text-sari-terracotta-800 hover:text-sari-terracotta-600 transition">
              Shop
            </Link>
            <Link to="/about" className="font-medium text-sari-terracotta-800 hover:text-sari-terracotta-600 transition">
              About
            </Link>
            <Link to="/blog" className="font-medium text-sari-terracotta-800 hover:text-sari-terracotta-600 transition">
              Blog
            </Link>
            <Link to="/contact" className="font-medium text-sari-terracotta-800 hover:text-sari-terracotta-600 transition">
              Contact
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Link to="/account" className="text-sari-terracotta-800 hover:text-sari-terracotta-600 transition">
              <User size={20} />
            </Link>
            <Link to="/cart" className="text-sari-terracotta-800 hover:text-sari-terracotta-600 transition relative">
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-sari-terracotta-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              className="md:hidden text-sari-terracotta-800 hover:text-sari-terracotta-600 transition"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-4 bg-white animate-fade-in">
            <nav className="flex flex-col space-y-3">
              <Link
                to="/"
                className="px-4 py-2 text-sari-terracotta-800 hover:bg-sari-cream-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/shop"
                className="px-4 py-2 text-sari-terracotta-800 hover:bg-sari-cream-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                to="/about"
                className="px-4 py-2 text-sari-terracotta-800 hover:bg-sari-cream-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/blog"
                className="px-4 py-2 text-sari-terracotta-800 hover:bg-sari-cream-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="px-4 py-2 text-sari-terracotta-800 hover:bg-sari-cream-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
