import React from 'react';
import { Cloud, Code2, Globe, Rocket } from 'lucide-react';

const features = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: 'Instant Development',
    description: 'Start coding immediately with zero setup time and configuration.'
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Real-time Preview',
    description: 'See your changes instantly with our lightning-fast preview environment.'
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: 'Cloud-Powered',
    description: 'Everything runs in the cloud, accessible from any device, anywhere.'
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: 'One-Click Deploy',
    description: 'Deploy your projects instantly to production with a single click.'
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Why Choose Forge?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-purple-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}