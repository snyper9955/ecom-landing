import React, { useState } from "react";
import Hero from "../components/Hero";
import { ShoppingBag, ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const mockProducts = [
  {
    id: 1,
    name: "Classic White Tee",
    price: 29.99,
    category: "Men",
    image:
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=80",
    isNew: false,
  },
  {
    id: 2,
    name: "Summer Floral Dress",
    price: 79.99,
    category: "Women",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    isNew: true,
  },
  {
    id: 3,
    name: "Denim Jacket",
    price: 89.99,
    category: "Unisex",
    image:
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=800&q=80",
    isNew: false,
  },
  {
    id: 5,
    name: "Leather Crossbody Bag",
    price: 129.99,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=800&q=80",
    isNew: true,
  },
];

const Home = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  return (
    <div className="bg-white">
      <Hero />

      {/* Trending Products Section */}
      <section className="py-12 sm:py-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-12 gap-4 sm:gap-6 relative z-10">
            <div className="max-w-2xl">
              <span className="text-orange-600 font-semibold tracking-wider uppercase text-xs sm:text-sm mb-1 sm:mb-2 block animate-fade-in-up">
                Top Picks
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 md:text-5xl tracking-tight">
                Trending Now
              </h2>
              <p className="mt-2 sm:mt-4 text-sm sm:text-xl text-gray-500">
                Discover our most loved pieces of the season, handpicked for
                your elevated wardrobe.
              </p>
            </div>
            <Link
              to="/shop"
              className="group inline-flex items-center text-sm sm:text-base text-orange-600 font-semibold hover:text-orange-700 transition-colors"
            >
              View All Products
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
            {mockProducts.map((product) => (
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                className="group relative block"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-100 shadow-md transition-shadow hover:shadow-2xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />

                  {/* Hover Actions Overlay */}
                  <div
                    className={`absolute inset-0 bg-black/20 flex items-end p-4 transition-opacity duration-300 pointer-events-none ${
                      hoveredProduct === product.id
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  ></div>
                </div>

                <div className="mt-2.5 sm:mt-5 flex justify-between items-start px-0.5 sm:px-1">
                  <div className="min-w-0">
                    <h3 className="text-xs sm:text-base lg:text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors truncate">
                      {product.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
