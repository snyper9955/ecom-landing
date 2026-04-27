import React from 'react';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-white overflow-hidden" id="home">
      {/* Decorative background elements */}
      <div className="hidden lg:block absolute top-0 right-0 -mr-20 -mt-20 w-[40rem] h-[40rem] rounded-full bg-orange-50 blur-3xl opacity-50 z-0"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-20 lg:pt-32 px-4 sm:px-6 lg:px-8">
          
          <main className="mt-10 mx-auto max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-800 font-semibold text-sm mb-6 animate-fade-in-up">
                <span className="flex h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
                New Summer Collection 2026
              </div>
              
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block xl:inline">Wear your</span>{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-rose-600 xl:inline">
                  confidence
                </span>
              </h1>
              
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Discover our latest arrivals of premium clothing designed to elevate your everyday style. Crafted with sustainable materials for a better tomorrow.
              </p>
              
              <div className="mt-8 sm:mt-12 sm:flex sm:justify-center lg:justify-start gap-4">
                <div className="rounded-md shadow">
                  <Link
                    to="/shop"
                    className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-gray-900 hover:bg-gray-800 hover:shadow-lg transition-all duration-300 md:text-lg"
                  >
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    Shop Now
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#collections"
                    className="w-full flex items-center justify-center px-8 py-4 border border-gray-300 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 hover:text-gray-900 transition-all duration-300 md:text-lg group"
                  >
                    View Lookbook
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
              
              <div className="mt-10 flex items-center gap-6 sm:justify-center lg:justify-start text-sm text-gray-500 font-medium">
                <div className="flex -space-x-2">
                  <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Customer" />
                  <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="Customer" />
                  <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Customer" />
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">
                    +2k
                  </div>
                </div>
                <div>
                  <p className="text-gray-900 font-bold">4.9/5</p>
                  <p>from 2,000+ reviews</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 mt-10 lg:mt-0">
        <div className="h-64 w-full sm:h-96 md:h-[30rem] lg:h-full relative overflow-hidden">
          {/* Main Hero Image */}
          <img
            className="absolute inset-0 w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-1000"
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
            alt="Fashion model wearing summer collection"
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent lg:via-transparent"></div>
          
          {/* Floating Badge */}
          <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl hidden md:flex items-center gap-4 animate-bounce-slow">
            <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-xl">
              ✨
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">Trending Now</p>
              <p className="text-xs text-gray-500">Silk Summer Dress</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(-5%); }
          50% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Hero;