import React, { useEffect } from 'react';
import { useProgress } from '../hooks/useProgress';
import { ArrowRight } from 'lucide-react';

interface VSLSectionProps {
  onComplete?: () => void;
}

export default function VSLSection({ onComplete }: VSLSectionProps) {
  const { setVideoWatched } = useProgress();

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoWatched(true);
      onComplete?.();
    }, 5000);

    return () => clearTimeout(timer);
  }, [setVideoWatched, onComplete]);

  return (
    <div className="py-2 bg-dark-deeper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Schedule Growth Button */}
        <div className="text-center mb-4">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium rounded-full text-dark bg-primary hover:bg-primary/90 transition-colors">
            Schedule Your Growth
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>

        <div className="text-center mb-2">
          <h2 className="text-xl font-bold text-white">
            Step 1 of 2: Watch Video
          </h2>
        </div>
        <div className="aspect-w-16 aspect-h-9 bg-dark-card rounded-lg shadow-2xl">
          {/* Video embed here */}
          <div className="flex items-center justify-center">
            <p className="text-gray-400">Video Sales Letter</p>
          </div>
        </div>
      </div>
    </div>
  );
}