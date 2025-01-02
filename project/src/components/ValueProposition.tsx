import React from 'react';
import { Shield, Timer, BarChart2 } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Guaranteed Success",
    description: "Our white-label partnership ensures both you and your clients achieve measurable results."
  },
  {
    icon: Timer,
    title: "Rapid Implementation",
    description: "Start seeing results within weeks, not months, with our proven AI-powered systems."
  },
  {
    icon: BarChart2,
    title: "Market Leadership",
    description: "Stand out with unique solutions that put you ahead of your competition."
  }
];

export default function ValueProposition() {
  return (
    <div className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="flex justify-center">
                <feature.icon className="h-12 w-12 text-primary" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-4 text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/main
