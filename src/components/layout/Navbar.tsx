
import React from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import ProductSearch from "@/components/search/ProductSearch";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { cart } = useCart();
  
  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-white border-b border-sari-cream-200 sticky top-0 z-30">
      <div className="container-custom mx-auto">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="font-display text-2xl font-bold text-sari-terracotta-800">
            Sari Organics
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sari-terracotta-700 hover:text-sari-terracotta-900">
              Home
            </Link>
            <Link to="/shop" className="text-sari-terracotta-700 hover:text-sari-terracotta-900">
              Shop
            </Link>
            <Link to="/about" className="text-sari-terracotta-700 hover:text-sari-terracotta-900">
              About
            </Link>
            <Link to="/blog" className="text-sari-terracotta-700 hover:text-sari-terracotta-900">
              Blog
            </Link>
            <Link to="/contact" className="text-sari-terracotta-700 hover:text-sari-terracotta-900">
              Contact
            </Link>
          </nav>
          
          {/* Actions */}
          <div className="flex items-center space-x-4">
            <ProductSearch />
            
            <Link to="/cart" className="relative text-sari-terracotta-700 hover:text-sari-terracotta-900">
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-sari-terracotta-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden text-sari-terracotta-700 hover:text-sari-terracotta-900"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                onClick={() => setIsMenuOpen(false)}
                className="text-sari-terracotta-700 hover:text-sari-terracotta-900"
              >
                Home
              </Link>
              <Link 
                to="/shop" 
                onClick={() => setIsMenuOpen(false)}
                className="text-sari-terracotta-700 hover:text-sari-terracotta-900"
              >
                Shop
              </Link>
              <Link 
                to="/about" 
                onClick={() => setIsMenuOpen(false)}
                className="text-sari-terracotta-700 hover:text-sari-terracotta-900"
              >
                About
              </Link>
              <Link 
                to="/blog" 
                onClick={() => setIsMenuOpen(false)}
                className="text-sari-terracotta-700 hover:text-sari-terracotta-900"
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className="text-sari-terracotta-700 hover:text-sari-terracotta-900"
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
