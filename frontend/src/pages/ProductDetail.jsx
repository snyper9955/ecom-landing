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
    <div className="h-[100dvh] sm:h-auto sm:min-h-screen bg-gray-50 flex flex-col sm:block overflow-hidden sm:overflow-auto pt-14 sm:pt-24">
      {/* Back link */}
      <div className="shrink-0 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-2 sm:py-6">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 font-medium text-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>
      </div>

      {/* ── MOBILE: flex column, everything in one screen ── */}
      {/* ── DESKTOP: normal grid layout ── */}
      <div className="flex-1 flex flex-col sm:flex-none max-w-6xl mx-auto w-full sm:px-6 lg:px-8 sm:pb-24 min-h-0">
        <div className="flex-1 flex flex-col sm:grid sm:grid-cols-2 lg:gap-16 sm:gap-10 min-h-0">

          {/* Image — fills remaining space on mobile, normal on desktop */}
          <div className="flex-1 relative overflow-hidden sm:rounded-3xl bg-gray-100 sm:shadow-lg sm:aspect-[4/5] sm:flex-none min-h-0">
            <img
              src={product.image}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            {/* Gradient fade into info section on mobile */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent sm:hidden" />
          </div>

          {/* Info + CTA Buttons — pinned at bottom on mobile */}
          <div className="shrink-0 flex flex-col items-start px-5 sm:px-0 pt-3 pb-4 sm:py-8 lg:sticky lg:top-28">
            {/* Category */}
            <span className="text-orange-600 font-semibold tracking-wider uppercase text-[11px] sm:text-sm mb-0.5 sm:mb-3">
              {product.category}
            </span>

            {/* Name */}
            <h1 className="text-lg sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              {product.name}
            </h1>

            {/* Action Buttons — stacked on mobile, side-by-side on sm+ */}
            <div className="w-full flex flex-row sm:flex-row gap-2.5 sm:gap-4 mt-3 sm:mt-8">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="product-whatsapp-buy"
                className="flex-1 inline-flex items-center justify-center gap-2 sm:gap-3 px-4 py-3 sm:px-8 sm:py-5 rounded-full bg-[#25D366] text-white font-bold text-xs sm:text-lg shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <FaWhatsapp className="w-4 h-4 sm:w-6 sm:h-6" />
                WhatsApp
              </a>
              <a
                href={`tel:${WHATSAPP_NUMBER}`}
                id="product-call-now"
                className="flex-1 inline-flex items-center justify-center gap-2 sm:gap-3 px-4 py-3 sm:px-8 sm:py-5 rounded-full bg-gray-900 text-white font-bold text-xs sm:text-lg shadow-lg hover:bg-gray-800 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                📞 Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
