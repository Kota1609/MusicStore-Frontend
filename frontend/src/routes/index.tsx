import { Link, createFileRoute } from "@tanstack/react-router";
import { MessageSquare, ShoppingCart, Headphones } from "lucide-react";
import { fetchGuitars } from "@/utils/apis";

export const Route = createFileRoute("/")({
  component: App,
  loader: async () => {
    return fetchGuitars();
  },
});

export default function App() {
  const guitars = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-r from-emerald-50 to-white">
        <div className="absolute inset-0 bg-[url('/guitar-pattern.svg')] opacity-10"></div>
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">
              Find Your Perfect <span className="text-emerald-600">Guitar</span> with AI
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Describe what you're looking for, and our AI assistant will help you find the perfect instrument.
              From beginners to professionals, we have something for everyone.
            </p>
            <div className="flex gap-4">
              <Link
                to="/chat"
                className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 transition-colors"
              >
                <MessageSquare size={20} />
                Chat with AI Assistant
              </Link>
              <Link
                to="/about"
                className="flex items-center gap-2 px-6 py-3 bg-white text-emerald-600 border border-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-emerald-50">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="text-emerald-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Shopping Assistant</h3>
              <p className="text-gray-600">
                Chat with our AI to find the perfect guitar based on your preferences and needs.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-emerald-50">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Headphones className="text-emerald-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
              <p className="text-gray-600">
                Get detailed information and recommendations from our AI assistant.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-emerald-50">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <ShoppingCart className="text-emerald-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Purchase</h3>
              <p className="text-gray-600">
                Complete your purchase with just a few clicks through our AI assistant.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Guitar Collection Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured <span className="text-emerald-600">Guitars</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guitars.map((guitar) => (
              <Link
                key={guitar.id}
                to="/guitars/$guitarId"
                params={{ guitarId: guitar.id.toString() }}
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={guitar.image}
                    alt={guitar.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{guitar.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{guitar.shortDescription}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-emerald-600">
                      ${guitar.price}
                    </span>
                    <span className="px-4 py-2 bg-emerald-100 text-emerald-600 rounded-full text-sm font-medium">
                      View Details
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Find Your Perfect Guitar?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Chat with our AI assistant to discover the perfect instrument for you.
            Whether you're a beginner or a professional, we'll help you find exactly what you need.
          </p>
          <Link
            to="/chat"
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 transition-colors text-lg font-medium"
          >
            <MessageSquare size={24} />
            Start Chatting with AI
          </Link>
        </div>
      </div>
    </div>
  );
}
