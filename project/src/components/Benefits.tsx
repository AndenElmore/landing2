import React from 'react';
import { Calendar, Cog, Target } from 'lucide-react';

const benefits = [
  {
    icon: Calendar,
    title: "Booking Appointments",
    description: "How To Get 300+ FREE Appointments In The First 90 Days Without Using Ads...Using A Little-Known Secret Absolutely No One But Our Clients Have Their Hands On"
  },
  {
    icon: Cog,
    title: "Client Delivery & Scaling",
    description: "How to build a service or product that will make your clients stick around for the longterm, by doing less & having more fun. Which will allow you to scale to 6, 7 or 8-figures"
  },
  {
    icon: Target,
    title: "Sales Mastery",
    description: "How To Create A Plug and Play Sales System That Helps you Skyrocket Your Sales. This system has personally helped us close over 3000+ clients in less than 4 years."
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