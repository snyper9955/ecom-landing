import React from 'react';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-white overflow-hidden" id="home">
      {/* Decorative background elements */}
      <div className="hidden lg:block absolute top-0 right-0 -mr-20 -mt-20 w-[40rem] h-[40rem] rounded-full bg-orange-50 blur-3xl opacity-50 z-0"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-24 sm:pt-28 lg:pt-32 px-5 sm:px-6 lg:px-8">
          
          <main className="mt-6 mx-auto max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-green-100 text-green-800 border border-green-600 font-semibold text-xs sm:text-sm mb-4 sm:mb-6 animate-fade-in-up">
                <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                New Summer Collection 2026
              </div>
              
              <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block xl:inline">Wear your</span>{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-rose-600 xl:inline">
                  confidence
                </span>
              </h1>
              
              <p className="mt-3 text-sm text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 max-w-xs mx-auto lg:max-w-none">
                Discover our latest arrivals of premium clothing designed to elevate your everyday style.
              </p>
              
              <div className="mt-6 sm:mt-12 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-3 sm:gap-4">
                <div className="rounded-md shadow">
                  <Link
                    to="/shop"
                    className="w-full flex items-center justify-center px-6 py-3.5 sm:px-8 sm:py-4 border border-transparent text-sm sm:text-base font-medium rounded-full text-white bg-gray-900 hover:bg-gray-800 hover:shadow-lg transition-all duration-300 md:text-lg"
                  >
                    <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Shop Now
                  </Link>
                </div>
              </div>
              
              <div className="mt-8 sm:mt-10 flex items-center gap-4 sm:gap-6 justify-center lg:justify-start text-sm text-gray-500 font-medium">
                <div className="flex -space-x-2">
                  <img className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Customer" />
                  <img className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="Customer" />
                  <img className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Customer" />
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] sm:text-xs font-bold text-gray-600">
                    +2k
                  </div>
                </div>
                <div>
                  <p className="text-gray-900 font-bold text-xs sm:text-sm">4.9/5</p>
                  <p className="text-[11px] sm:text-sm">from 2,000+ reviews</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 mt-6 sm:mt-10 lg:mt-0">
        <div className="h-56 w-full sm:h-80 md:h-[28rem] lg:h-full relative overflow-hidden rounded-t-3xl sm:rounded-t-none mx-auto max-w-lg sm:max-w-none">
          {/* Main Hero Image */}
          <img
            className="absolute inset-0 w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-1000"
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
            alt="Fashion model wearing summer collection"
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent lg:via-transparent"></div>
          {/* Bottom fade on mobile for smooth transition */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent lg:hidden"></div>
          
          {/* Floating Badge */}
          <div className="absolute bottom-6 right-4 sm:bottom-8 sm:right-8 bg-white/90 backdrop-blur-md p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-2xl flex items-center gap-3 sm:gap-4 animate-bounce-slow">
            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-lg sm:text-xl">
              ✨
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-gray-900">Trending Now</p>
              <p className="text-[10px] sm:text-xs text-gray-500">Silk Summer Dress</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
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