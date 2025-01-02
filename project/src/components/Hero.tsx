import React from 'react';

export default function Hero() {
  return (
    <div className="relative pt-4 pb-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-extrabold">
            {/* Primary headline - moderately large but not overwhelming */}
            <span className="block text-3xl md:text-4xl text-gray-200 mb-1">
              HOME SERVICE MARKETING AGENCIES
            </span>
            <span className="block text-3xl md:text-4xl mb-2">
              <span className="text-primary underline">GENERATING AT LEAST $50K PER MONTH</span>:
            </span>
            
            {/* Secondary headline - noticeably smaller */}
            <span className="block text-2xl md:text-3xl text-gray-100 mb-1">
              <span className="text-primary underline">DOUBLE YOUR REVENUE WITHIN 3 MONTHS</span>
            </span>
            <span className="block text-2xl md:text-3xl mb-2">
              and Lead The Market By <span className="text-primary underline">LEVERAGING OUR AI PARTNERSHIP</span>
            </span>
          </h1>

          <p className="text-lg text-gray-300 font-medium mb-2">
            (Our White Labeled Partnership Guarantees Success For You and Your Clients)
          </p>
        </div>
      </div>
    </div>
  );
}
