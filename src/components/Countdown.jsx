import { useState, useEffect } from 'react';
import { Plane } from 'lucide-react'; // Make sure lucide-react is installed!

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Target date: May 27th, 2026
    const targetDate = new Date('May 27, 2026 00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Cute little component for the boxes
  const TimeBox = ({ value, label }) => (
    <div style={{
      background: '#fff0f3', // Very light pink
      borderRadius: '16px',
      padding: '12px 10px',
      minWidth: '65px',
      textAlign: 'center',
      boxShadow: '0 4px 10px rgba(255, 77, 109, 0.05)'
    }}>
      <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#ff4d6d', lineHeight: '1' }}>
        {value}
      </div>
      <div style={{ fontSize: '0.65rem', fontWeight: '700', color: '#800f2f', textTransform: 'uppercase', marginTop: '4px' }}>
        {label}
      </div>
    </div>
  );

  return (
    <div className="card" style={{ textAlign: 'center' }}>
      <h3 style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
        Counting down to May 27th! <Plane size={22} color="#ff4d6d" />
      </h3>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
        <TimeBox value={timeLeft.days} label="Days" />
        <TimeBox value={timeLeft.hours} label="Hours" />
        <TimeBox value={timeLeft.minutes} label="Mins" />
        <TimeBox value={timeLeft.seconds} label="Secs" />
      </div>
    </div>
  );
};

export default Countdown;