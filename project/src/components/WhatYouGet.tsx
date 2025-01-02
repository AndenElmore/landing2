import React from 'react';
import { Check } from 'lucide-react';

const features = [
  "Set proper foundations in your agency, coaching or consulting business",
  "Grab a profitable niche & create an irresistible offer",
  "Become an organic attraction/outreach assassin",
  "Book 100-300+ calls per month using proprietary organic attraction methods",
  "Build a funnel that pumps out 100+ calls/mo",
  "Build paid campaigns with unprecedented KPI's",
  "Learn to sell. Extremely f**king well",
  "Master your mindset & learn to think like a millionaire",
  "Systemise your business & deliver kickass results"
];

export default function WhatYouGet() {
  return (
    <div className="py-24 bg-dark-deeper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">
          Here's what's included:
        </h2>
        
        <div className="space-y-4">
          {features.map((feature) => (
            <div key={feature} className="flex items-start">
              <div className="flex-shrink-0">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <p className="ml-3 text-lg text-gray-300">{feature}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-lg text-gray-300 space-y-6">
          <p>
            The Endgame? You build a business that scales easily & you become a successful entrepreneur with plenty of money, freedom and status.
          </p>
          <p>
            We guarantee 20 paid clients, so it's risk free. Students get 30+ weekly coaching calls & access to a bustling business owner community. That's about it.
          </p>
          <p>
            If you want to transform your business from a source of pain/struggle to a source of pleasure/freedom, Schedule A Call NOW. The struggle stops now.
          </p>
        </div>
      </div>
    </div>
  );
}
