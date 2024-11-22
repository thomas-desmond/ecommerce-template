import React from "react";
import { Search, ShoppingBag, User } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 1059.99,
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    name: "Organic Cotton Sweater",
    price: 89.99,
    category: "Clothing",
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    name: "Leather Crossbody Bag",
    price: 129.99,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    name: "Handcrafted Wall Art",
    price: 199.99,
    category: "Home Decor",
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Image
              src="/cloudflare-logo.png"
              alt="Cloudflare"
              width={120}
              height={40}
              className="h-10"
            />

            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="flex items-center gap-6">
              <button className="text-gray-600 hover:text-indigo-600">
                <User className="h-6 w-6" />
              </button>
              <button className="text-gray-600 hover:text-indigo-600">
                <ShoppingBag className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gray-900">
        <Image
          src="https://images.unsplash.com/photo-1674286388329-837db73581c3?auto=format&fit=crop&q=80&w=2000"
          alt="Hero"
          className="w-full h-full object-cover opacity-70"
          width={2000}
          height={1125}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Curated Collection
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Discover unique products handpicked by our experts
            </p>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
              />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
