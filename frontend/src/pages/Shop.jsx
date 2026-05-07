import React, { useState } from 'react';
import { ArrowRight, ShoppingBag, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data for products
const mockProducts = [
  { id: 1, name: 'Classic White Tee', price: 29.99, category: 'Men', image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=80', isNew: false, isFeatured: true },
  { id: 2, name: 'Summer Floral Dress', price: 79.99, category: 'Women', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80', isNew: true, isFeatured: true },
  { id: 4, name: 'Streetwear Cargo Pants', price: 59.99, category: 'Men', image: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&w=800&q=80', isNew: false, isFeatured: false },
  { id: 5, name: 'Leather Crossbody Bag', price: 129.99, category: 'Accessories', image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=800&q=80', isNew: true, isFeatured: true },
  { id: 6, name: 'Minimalist Watch', price: 199.99, category: 'Accessories', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80', isNew: false, isFeatured: false },
  { id: 7, name: 'Ribbed Knit Sweater', price: 69.99, category: 'Women', image: 'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?auto=format&fit=crop&w=800&q=80', isNew: false, isFeatured: true },
  { id: 8, name: 'Classic Aviators', price: 149.99, category: 'Accessories', image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=800&q=80', isNew: false, isFeatured: false },
];

const categories = ['All', 'Men', 'Women', 'Kids', 'Accessories'];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProduct, setHoveredProduct] = useState(null);

  // Filter products
  const filteredProducts = activeCategory === 'All' 
    ? mockProducts 
    : mockProducts.filter(product => product.category === activeCategory);

  return (
    <div className="bg-gray-50 min-h-screen pt-24 sm:pt-32 pb-16 sm:pb-24">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-16 text-center animate-fade-in-up">
        <span className="text-orange-600 font-semibold tracking-wider uppercase text-xs sm:text-sm mb-2 block">Collections</span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-2 sm:mb-4">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 animate-gradient">Lookbook</span>
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="flex overflow-x-auto sm:flex-wrap sm:overflow-visible justify-start sm:justify-center gap-2 sm:gap-3 mb-8 sm:mb-16 pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar animate-fade-in-up" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all duration-300 transform hover:scale-105 whitespace-nowrap shrink-0
                ${activeCategory === category 
                  ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg shadow-pink-500/30' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm border border-gray-100'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {filteredProducts.map((product, idx) => (
            <div 
              key={product.id}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${200 + idx * 50}ms`, animationFillMode: 'both' }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-100 shadow-md transition-shadow hover:shadow-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                
                {/* Badges */}
                <div className="absolute top-2 left-2 sm:top-4 sm:left-4 flex flex-col gap-2 z-20">
                  {product.isNew && (
                    <span className="bg-white text-gray-900 text-[8px] sm:text-[10px] font-black uppercase tracking-widest px-2 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-lg">
                      New
                    </span>
                  )}
                </div>
                
                {/* Hover Overlay */}
                <div 
                  className={`absolute inset-0 bg-black/10 transition-opacity duration-500 z-10 pointer-events-none ${
                    hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                  }`}
                ></div>
              </div>
              
              <div className="mt-2.5 sm:mt-5 flex justify-between items-start px-0.5 sm:px-1">
                <div className="min-w-0">
                  <h3 className="text-xs sm:text-base lg:text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors truncate">
                    <Link to={`/product/${product.id}`}>
                      {/* Interactive invisible layer for link */}
                      <span aria-hidden="true" className="absolute inset-0 z-0" />
                      {product.name}
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12 sm:py-20 animate-fade-in-up">
            <p className="text-base sm:text-xl text-gray-500">No products found in this category.</p>
            <button 
              onClick={() => setActiveCategory('All')}
              className="mt-6 text-orange-600 font-semibold hover:text-orange-700 transition-colors"
            >
              View All Products
            </button>
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
      `}} />
    </div>
  );
};

export default Shop;