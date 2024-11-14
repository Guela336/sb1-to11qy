import React, { useState } from 'react';
import {
  FileText,
  Settings2,
  Sparkles,
  Volume2,
  Shield,
  ArrowRight,
  CheckCircle2,
  History,
} from 'lucide-react';
import { FeatureCard } from './components/FeatureCard';
import { LanguageSelector } from './components/LanguageSelector';
import { translations } from './translations';

function App() {
  const [currentLang, setCurrentLang] = useState('en');
  const t = translations[currentLang];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Language Selector */}
      <div className="fixed top-4 right-4 z-50">
        <LanguageSelector
          currentLang={currentLang}
          onLanguageChange={setCurrentLang}
        />
      </div>

      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t.hero.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t.hero.subtitle}
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-2">
                {t.hero.getStarted} <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-gray-300 px-8 py-3 rounded-lg font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-colors">
                {t.hero.learnMore}
              </button>
            </div>
          </div>
        </div>
        
        {/* Demo Preview */}
        <div className="max-w-6xl mx-auto px-4 mt-12">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <img
              src="https://images.unsplash.com/photo-1600267204091-5c1ab8b10c02?auto=format&fit=crop&q=80&w=2000"
              alt="FALC Software Interface Preview"
              className="rounded-lg w-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t.features.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.features.cards.map((card, index) => (
              <FeatureCard
                key={index}
                icon={[FileText, Sparkles, Settings2, Volume2, Shield, History][index]}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t.benefits.title}</h2>
              <div className="space-y-4">
                {t.benefits.items.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1024"
                alt="Team working on accessibility"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            {t.cta.title}
          </h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            {t.cta.subtitle}
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
            {t.cta.button}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Training</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>© 2024 FALC Transform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;