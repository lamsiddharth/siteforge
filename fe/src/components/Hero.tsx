import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Build Faster with Forge
          </h1>
          <p className="text-xl mb-8 text-purple-200">
            The next-generation development environment that brings your ideas to life instantly.
            Code, preview, and ship with confidence.
          </p>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => navigate('/prompt')}
              className="flex items-center px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg font-semibold transition-colors"
            >
              Start Coding <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="flex items-center px-6 py-3 bg-transparent border-2 border-purple-500 hover:bg-purple-500/10 rounded-lg font-semibold transition-colors">
              Try Demo <Zap className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}