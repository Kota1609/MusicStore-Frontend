import { createFileRoute } from "@tanstack/react-router";
import { Send, Music, ShoppingCart, MessageSquare, Headphones, Bot, Package } from "lucide-react";
import { Link } from "@tanstack/react-router";

import "../demo.index.css";

// This can be configured based on environment
const ADMIN_URL = import.meta.env.VITE_ADMIN_URL || "http://localhost:3001";

function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Welcome to <span className="text-emerald-600">Music Store</span>
        </h1>
        <p className="text-gray-600 text-lg text-center mb-12">
          Experience the future of online shopping with our AI-powered music store.
          Simply describe what you want, and our intelligent assistant will help you find and purchase your perfect instrument.
        </p>

        <div className="bg-emerald-50 rounded-xl p-8 mb-12">
          <p className="text-lg text-gray-700 mb-6">
            Experience the future of guitar shopping with our AI-powered assistant. 
            Simply chat with our AI assistant to explore our collection, get personalized recommendations, 
            and place your order - all through a natural conversation!
          </p>
          <div className="flex justify-center">
            <Link
              to="/chat"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              Start Chatting with AI
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <Bot className="w-6 h-6 text-emerald-600" />
              <h2 className="text-xl font-semibold">AI Shopping Assistant</h2>
            </div>
            <p className="text-gray-600">
              Our AI assistant is here to help you find the perfect guitar. Just chat naturally about what you're looking for, 
              and it will guide you through the selection process and help you place your order.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <Headphones className="w-6 h-6 text-emerald-600" />
              <h2 className="text-xl font-semibold">Expert Guidance</h2>
            </div>
            <p className="text-gray-600">
              Get personalized recommendations based on your preferences, playing style, and budget. 
              Our AI understands guitar specifications and can help you make an informed decision.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <ShoppingCart className="w-6 h-6 text-emerald-600" />
            <h2 className="text-xl font-semibold">Easy Ordering</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Ordering is as simple as having a conversation! Just tell our AI assistant which guitar you want, 
            and it will handle the entire ordering process for you. No complicated forms or checkout steps required.
          </p>
          <div className="flex justify-center">
            <Link
              to="/chat"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              Order Through Chat
            </Link>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold mb-4">Order Tracking</h2>
          <p className="text-gray-600 mb-4">
            After placing your order through the AI assistant, you can track your order status through our admin portal.
          </p>
          <a
            href={ADMIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            View Orders
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/about")({
  component: AboutPage,
});