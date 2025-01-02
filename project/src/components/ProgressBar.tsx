import React from 'react';

interface ProgressBarProps {
  currentStep: 1 | 2;
  totalSteps?: number;
}

export default function ProgressBar({ currentStep, totalSteps = 2 }: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100;
  
  return (
    <div className="w-full bg-slate-800 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
        <div className="w-full">
          <div className="relative">
            <div className="overflow-hidden h-2 text-xs flex rounded bg-slate-700">
              <div 
                style={{ width: `${progress}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary transition-all duration-500 ease-in-out"
              />
            </div>
          </div>
          <div className="mt-1 text-sm text-white font-medium">
            Step {currentStep} of {totalSteps} - {currentStep === 1 ? 'Watch Video' : 'Schedule Your Discovery Call'}
          </div>
        </div>
      </div>
    </div>
  );
}
