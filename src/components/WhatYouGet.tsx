import React from 'react';
    import { Check } from 'lucide-react';

    const features = [
      "Build a predictable client acquisition system that consistently generates high-value leads.",
      "Implement appointment setting to automate your outreach and booking process.",
      "Create a client delivery system that ensures consistent, high-quality results.",
      "Scale your agency without increasing your workload or sacrificing service quality.",
      "Master client retention strategies that keep your clients engaged and satisfied.",
      "Automate key processes, freeing up your time to focus on growth.",
      "Receive ongoing support and coaching from our team of experts.",
      "Transform your agency into a well-oiled machine that generates consistent revenue."
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
                The result? You'll not only double your revenue within 3 months but also establish your agency as a market leader by leveraging our partnership.
              </p>
              <p>
                We provide the systems and support to ensure your success. This is your opportunity to transform your agency and lead the market.
              </p>
              <p>
                If you're ready to stop struggling and start dominating, schedule your call now. The time to lead is now.
              </p>
            </div>
          </div>
        </div>
      );
    }
