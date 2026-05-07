import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// Same product data — in a real app this would come from an API / shared store
const allProducts = [
  { id: 1, name: "Classic White Tee", price: 29.99, category: "Men", image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=1200&q=80" },
  { id: 2, name: "Summer Floral Dress", price: 79.99, category: "Women", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80" },
  { id: 3, name: "Denim Jacket", price: 89.99, category: "Unisex", image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=1200&q=80" },
  { id: 4, name: "Streetwear Cargo Pants", price: 59.99, category: "Men", image: "https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&w=1200&q=80" },
  { id: 5, name: "Leather Crossbody Bag", price: 129.99, category: "Accessories", image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=1200&q=80" },
  { id: 6, name: "Minimalist Watch", price: 199.99, category: "Accessories", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80" },
  { id: 7, name: "Ribbed Knit Sweater", price: 69.99, category: "Women", image: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?auto=format&fit=crop&w=1200&q=80" },
  { id: 8, name: "Classic Aviators", price: 149.99, category: "Accessories", image: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=1200&q=80" },
];

const WHATSAPP_NUMBER = "1234567890"; // same number as WhatsAppButton

const ProductDetail = () => {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>
      </div>
    );
  }

  const whatsappMessage = `Hi! I'm interested in buying "${product.name}" ($${product.price}). Is it available?`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-gray-50 pt-20 sm:pt-24">
      {/* Back link */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 font-medium text-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>
      </div>

      {/* Product Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 items-start">

          {/* Image */}
          <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-100 shadow-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Info + WhatsApp CTA */}
          <div className="flex flex-col items-start py-2 sm:py-8 lg:sticky lg:top-28">
            {/* Category */}
            <span className="text-orange-600 font-semibold tracking-wider uppercase text-xs sm:text-sm mb-2 sm:mb-3">
              {product.category}
            </span>

            {/* Name */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              {product.name}
            </h1>

            {/* Price */}
            {/* <p className="mt-3 sm:mt-4 text-xl sm:text-2xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </p> */}

            {/* Divider */}
            <div className="w-full h-px bg-gray-200 my-6 sm:my-8" />

            {/* WhatsApp Buy Button */}
            <div className="flex items-center justify-center gap-5">
              <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="product-whatsapp-buy"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 sm:py-5 rounded-full bg-[#25D366] text-white font-bold text-base sm:text-lg shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <FaWhatsapp className="w-6 h-6" />
              Buy on WhatsApp
            </a>
            <Link to={`tel:${WHATSAPP_NUMBER}`}><button className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 sm:py-5 rounded-full bg-[#25D366] text-white font-bold text-base sm:text-lg shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:scale-105 active:scale-95 transition-all duration-300">Call Now</button></Link>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-gray-400">
              Tap the button to chat with us and place your order instantly.
            </p>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
};

export default ProductDetail;
