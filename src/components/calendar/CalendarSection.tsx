import React from 'react';
    import CalendarWidget from './CalendarWidget';

    export default function CalendarSection() {
      return (
        <div className="py-12 bg-dark-deeper">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Step 2 of 2: Schedule Your Discovery Call
              </h2>
              <p className="text-gray-400">
                Your answers will remain completely confidential and are used to prepare a strategy for you prior to the call.
              </p>
            </div>
            
            <CalendarWidget className="max-w-3xl mx-auto" />
          </div>
        </div>
      );
    }
