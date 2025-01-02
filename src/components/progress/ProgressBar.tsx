import React from 'react';
    import { useProgress } from '../../hooks/useProgress';

    export default function ProgressBar() {
      const { progress, step } = useProgress();
      
      const getProgressColor = (progress: number) => {
        if (progress >= 90) return 'bg-green-500';
        return 'bg-primary';
      };

      return (
        <div className="w-full bg-dark-deeper fixed top-0 left-0 z-50 h-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
            <div className="w-full">
              <div className="relative">
                <div className="overflow-hidden h-2 text-xs flex rounded bg-dark-card">
                  <div 
                    style={{ width: `${progress}%` }}
                    className={`shadow-none flex flex-col text-center whitespace-nowrap justify-center transition-all duration-1000 ease-in-out ${getProgressColor(progress)}`}
                  />
                </div>
              </div>
              <div className="mt-1 text-sm text-white font-medium">
                Step {step} of 2 - {step === 1 ? 'Watch Video' : 'Schedule Your Discovery Call'}
              </div>
            </div>
          </div>
        </div>
      );
    }
