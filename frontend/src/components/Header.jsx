import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Heart, Search, ArrowRight } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          scrolled || isOpen
            ? 'bg-white/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex-shrink-0 flex items-center cursor-pointer group relative z-50"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-2xl md:text-2xl font-black  tracking-tighter text-gray-900 group-hover:scale-105 transition-transform duration-300" style={{ fontWeight: 900, WebkitTextStroke: '0.5px currentColor' }}>
                NOVA<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500" style={{ fontWeight: 900, WebkitTextStroke: '0.5px' }}>CART</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative text-sm font-semibold tracking-wide uppercase transition-all duration-300 group ${
                    location.pathname === link.path && link.path !== '#'
                      ? 'text-orange-600'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-300 ${
                      location.pathname === link.path && link.path !== '#'
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </Link>
              ))}
              
            </nav>
             <div className="hidden md:flex items-center space-x-6">
              <Link to={'/contact'}>
                <button className='text-sm font-semibold tracking-wide hover:text-red-500 transition-all duration-300 uppercase'>Contact</button>
              </Link>
              
            </div>

            {/* Action Icons */}
           

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-50 p-2 text-gray-900 hover:bg-gray-100 rounded-full transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                <span className={`absolute w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45' : '-translate-y-2'}`} />
                <span className={`absolute w-full h-0.5 bg-current transform transition-all duration-200 ease-in-out ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`} />
                <span className={`absolute w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45' : 'translate-y-2'}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      <div
        className={`fixed inset-0 z-30 bg-black/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-full sm:w-96 bg-white/95 backdrop-blur-xl shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] md:hidden transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div 
          className={`flex flex-col h-full justify-center px-8 pt-20 transition-all duration-500 ease-out delay-100 ${
            isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}
        >
          <nav className="flex flex-col gap-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-between text-3xl font-black tracking-tight text-gray-900 py-2 border-b border-gray-100/50"
                style={{ transitionDelay: `${isOpen ? 150 + index * 100 : 0}ms` }}
              >
                <span className="group-hover:translate-x-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-500 transition-all duration-300">
                  {link.name}
                </span>
                <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-pink-500" />
              </Link>
            
            ))}
            <Link to={'/contact'}
            onClick={() => setIsOpen(false)}>
              <button className='text-3xl font-black tracking-tight text-gray-900 py-2 border-b border-gray-100/50 transition-all duration-300 uppercase'>Contact</button>
            </Link>
          </nav>
          
          <div 
            className={`flex flex-col gap-6 mt-12 transition-all duration-500 delay-500 ${
              isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            
            
            <div className="text-center mt-4">
              <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">NovaCart © 2026</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;