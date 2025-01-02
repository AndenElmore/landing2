import React, { useEffect } from 'react';
import Hero from './components/Hero';
import VSLSection from './components/VSLSection';
import CalendarSection from './components/calendar/CalendarSection';
import Benefits from './components/Benefits';
import WhatYouGet from './components/WhatYouGet';
import ProgressBar from './components/progress/ProgressBar';
import { useProgress } from './hooks/useProgress';

function App() {
  const { setStep } = useProgress();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const scrollProgress = (scrollPosition / (docHeight - windowHeight)) * 100;
      
      if (scrollProgress > 50) {
        setStep(2);
      } else {
        setStep(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setStep]);

  return (
    <div className="min-h-screen bg-dark-deeper">
      <ProgressBar />
      <div className="pt-12"> {/* Add padding-top to account for fixed progress bar */}
        <Hero />
        <VSLSection />
        <CalendarSection />
        <Benefits />
        <WhatYouGet />
        <CalendarSection />
      </div>
    </div>
  );
}

export default App;
