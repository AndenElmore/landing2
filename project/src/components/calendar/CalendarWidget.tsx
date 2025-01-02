import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, Calendar as CalendarIcon } from 'lucide-react';
import { useProgress } from '../../hooks/useProgress';

interface CalendarWidgetProps {
  className?: string;
}

export default function CalendarWidget({ className = '' }: CalendarWidgetProps) {
  const { completeBooking } = useProgress();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showTimes, setShowTimes] = useState(false);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setShowTimes(true);
  };

  const handleTimeSelect = async (time: string) => {
    if (selectedDate) {
      // Placeholder for calendar integration
      console.log('Selected datetime:', selectedDate, time);
      completeBooking();
    }
  };

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM',
    '01:00 PM', '02:00 PM', '03:00 PM',
    '04:00 PM', '05:00 PM'
  ];

  return (
    <div className={`bg-dark-card rounded-lg shadow-xl ${className}`}>
      <div className="grid md:grid-cols-2 divide-x divide-gray-800">
        {/* Left side - Call info */}
        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">Growth Is Simple AI Growth Call</h2>
          <div className="flex items-center text-gray-400">
            <Clock className="w-5 h-5 mr-2" />
            <span>45 Mins</span>
          </div>
          <div className="flex items-center text-gray-400">
            <CalendarIcon className="w-5 h-5 mr-2" />
            <span>{selectedDate?.toLocaleDateString() || 'Select a date'}</span>
          </div>
          <p className="text-gray-400 text-sm">
            This is a sales call. We'd love to see if we're a good fit. Limited spots available.
          </p>
        </div>

        {/* Right side - Calendar */}
        <div className="p-6">
          {!showTimes ? (
            <>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl text-white">Select Date</h3>
                <div className="flex space-x-2">
                  <button className="p-2 rounded-full bg-dark-deeper hover:bg-gray-800">
                    <ChevronLeft className="w-5 h-5 text-gray-400" />
                  </button>
                  <button className="p-2 rounded-full bg-dark-deeper hover:bg-gray-800">
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-2 text-center mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="text-gray-400 text-sm">{day}</div>
                ))}
                {Array.from({ length: 31 }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => handleDateSelect(new Date(2024, 0, i + 1))}
                    className="p-2 text-gray-300 hover:bg-primary hover:text-dark transition-colors rounded-full"
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl text-white">Select Time</h3>
                <button 
                  onClick={() => setShowTimes(false)}
                  className="text-primary hover:text-primary/80"
                >
                  Back to calendar
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {timeSlots.map(time => (
                  <button
                    key={time}
                    onClick={() => handleTimeSelect(time)}
                    className="p-3 text-gray-300 hover:bg-primary hover:text-dark transition-colors rounded-lg text-center"
                  >
                    {time}
                  </button>
                ))}
              </div>
            </>
          )}

          <div className="mt-4 text-gray-400 text-sm">
            <div className="flex items-center justify-center">
              <span>Timezone: GMT-05:00 America/New_York (EST)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}