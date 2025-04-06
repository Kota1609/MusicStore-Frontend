import { Link } from "@tanstack/react-router";
import { Guitar, Package } from "lucide-react";
import AIAssistant from "./AIAssistant";

const ADMIN_URL = import.meta.env.VITE_ADMIN_URL || "http://localhost:3001";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Guitar className="h-8 w-8 text-emerald-600" />
              <span className="text-xl font-bold text-gray-900">Music Store</span>
            </Link>
          </div>

          <nav className="flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-600 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/chat"
              className="text-gray-600 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Chat
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              About
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href={`${ADMIN_URL}/orders`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors"
            >
              <Package className="w-4 h-4" />
              <span className="text-sm font-medium">Orders</span>
            </a>
            <AIAssistant />
          </div>
        </div>
      </div>
    </header>
  );
}
