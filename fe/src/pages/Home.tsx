import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Templates } from '../components/Templates';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Templates />
      </main>
      <Footer />
    </div>
  );
}