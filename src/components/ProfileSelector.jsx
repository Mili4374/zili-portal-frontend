import React from 'react';
import { Heart, User } from 'lucide-react';

const ProfileSelector = ({ onSelect }) => {
  const handleSelect = (name) => {
    localStorage.setItem('userProfile', name); // Saves to the phone's memory
    onSelect(name);
  };

  return (
    <div className="view-container flex-center" style={{ textAlign: 'center', padding: '40px 20px' }}>
      <Heart size={48} color="#be185d" fill="#be185d" style={{ marginBottom: '20px' }} />
      <h2 className="text-2xl font-bold text-rose-800">Welcome to the Portal</h2>
      <p className="text-gray-500 mb-8">Who is entering today?</p>
      
      <div className="flex flex-col gap-4 w-full">
        <button 
          onClick={() => handleSelect('Mili')}
          className="nudge-btn" 
          style={{ padding: '20px', fontSize: '1.2rem' }}
        >
          I am Mili 🙋‍♀️
        </button>
        
        <button 
          onClick={() => handleSelect('Zaheen')}
          className="nudge-btn" 
          style={{ padding: '20px', fontSize: '1.2rem', backgroundColor: '#1e40af' }}
        >
          I am Zaheen 🙋‍♂️
        </button>
      </div>
    </div>
  );
};

export default ProfileSelector;