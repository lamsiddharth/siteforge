import React from 'react';
import { Hammer } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-purple-900 to-indigo-900 text-white z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Hammer className="w-8 h-8" />
          <span className="text-2xl font-bold">Forge</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#features" className="hover:text-purple-300 transition-colors">Features</a></li>
            <li><a href="#templates" className="hover:text-purple-300 transition-colors">Templates</a></li>
            <li><Link to="/builder" className="hover:text-purple-300 transition-colors">Builder</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}