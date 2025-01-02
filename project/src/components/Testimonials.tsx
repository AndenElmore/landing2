import React from 'react';

const testimonials = [
  {
    title: "''$1k/PM TO $340K/PM IN 24 MONTHS''",
    videoUrl: "#"
  },
  {
    title: "''$100K+/YR SMMA IN 6 MONTHS''",
    videoUrl: "#"
  },
  {
    title: "''35k/PM COACHING BUSINESS''",
    videoUrl: "#"
  }
];

export default function Testimonials() {
  return (
    <div className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Recent Results We've Gotten For Agency Owners Just Like You:
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            2400+ Happy Clients Served Worldwide
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.title} className="bg-dark-card rounded-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-dark-deeper">
                {/* Video embed */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white text-center">
                  {testimonial.title}
                </h3>
              </div>
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
