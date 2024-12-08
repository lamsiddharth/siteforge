import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wand2, Loader2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Prompt() {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    
    setIsLoading(true);
    // Here you would process the prompt
    setTimeout(() => {
      setIsLoading(false);
      navigate('/builder', { state: { prompt } });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-white hover:text-purple-300 transition-colors mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-6">What would you like to build?</h1>
          <p className="text-purple-200 mb-8">
            Describe your project idea, and we'll help you bring it to life with code.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="E.g., Create a responsive landing page with a hero section, features grid, and contact form..."
                className="w-full h-40 bg-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-purple-300/50"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isLoading}
                className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-lg flex items-center gap-2 transition-colors disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Wand2 className="w-5 h-5" />
                    Generate Code
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}