import React from 'react';
    import { Calendar, Cog, Target } from 'lucide-react';

    const benefits = [
      {
        icon: Calendar,
        title: "Consistent Client Flow",
        description: "We'll install a system that guarantees a consistent flow of high-value clients, eliminating the uncertainty of traditional lead generation. This is your foundation for predictable growth."
      },
      {
        icon: Cog,
        title: "Effortless Client Retention",
        description: "We'll partner with you to implement a client delivery system that ensures exceptional results and long-term client satisfaction. This is how you build a sustainable, thriving agency."
      },
      {
        icon: Target,
        title: "Scalable Service Delivery",
        description: "We'll work with you to implement systems that automate key processes, allowing you to scale your agency to new heights. This is your path to breaking through previous limitations."
      }
    ];

    export default function Benefits() {
      return (
        <div className="py-24 bg-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white text-center mb-16">
              What We Will Show You On Your Discovery Call:
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="bg-dark-card hover:bg-dark-card/80 transition-colors rounded-lg p-8">
                  <div className="flex items-center mb-4">
                    <benefit.icon className="h-8 w-8 text-primary mr-4" />
                    <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
