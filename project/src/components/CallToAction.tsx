import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CallToAction() {
  return (
    <div className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Double Your Revenue?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Join our exclusive partnership program for just $2,000/month + 20% of new revenue generated.
            Limited spots available.
          </p>
          <button className="inline-flex items-center px-8 py-4 text-dark font-medium rounded-lg text-lg bg-primary hover:bg-primary/90 transition-colors">
            Schedule Your Strategy Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
