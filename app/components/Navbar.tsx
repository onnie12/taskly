'use client'
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-indigo-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Brand/Logo */}
            <div className="text-xl font-bold">Taskly</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link href="#" className="hover:text-indigo-200 transition-colors">Home</Link>
              <Link href="getstarted" className="hover:text-indigo-200 transition-colors">Get started</Link>
              <Link href="#" className="hover:text-indigo-200 transition-colors">My Tasks</Link>
              <Link href="#" className="hover:text-indigo-200 transition-colors">Log in</Link>
              <Link href="signup" className="hover:text-indigo-200 transition-colors">Sign up</Link>
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              <Link href="#" className="block hover:text-indigo-200 transition-colors">Home</Link>
              <Link href="#" className="block hover:text-indigo-200 transition-colors">About</Link>
              <Link href="#" className="block hover:text-indigo-200 transition-colors">Services</Link>
              <Link href="#" className="block hover:text-indigo-200 transition-colors">Contact</Link>
            </div>
          )}
        </div>
      </nav>
      
      {/* Add padding to main content to account for fixed navbar */}
      <div className="pt-16"></div>
    </>
  );
};
export default Navbar