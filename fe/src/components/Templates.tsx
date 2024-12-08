import React from 'react';

const templates = [
  {
    title: 'React + TypeScript',
    description: 'Modern web development with type safety',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Next.js Project',
    description: 'Full-stack React framework for production',
    image: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Vue + Vite',
    description: 'Lightning fast modern web development',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=800&q=80'
  }
];

export function Templates() {
  return (
    <section id="templates" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Start with a Template
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={template.image} 
                  alt={template.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{template.title}</h3>
                    <p className="text-purple-200">{template.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}