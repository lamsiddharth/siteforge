import React from 'react';
import { Github, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Forge</h3>
            <p className="text-sm">Building the future of web development, one project at a time.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-purple-400">Features</a></li>
              <li><a href="#templates" className="hover:text-purple-400">Templates</a></li>
              <li><a href="#docs" className="hover:text-purple-400">Documentation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-purple-400">About</a></li>
              <li><a href="#blog" className="hover:text-purple-400">Blog</a></li>
              <li><a href="#careers" className="hover:text-purple-400">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-400">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-purple-400">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Forge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}