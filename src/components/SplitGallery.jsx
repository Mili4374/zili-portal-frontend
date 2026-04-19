import { useState } from 'react';
import { ArrowLeft, MapPin, Plus } from 'lucide-react';

// 1. Import your New Selfies + Existing Sunset Skies
import miliSelfie from '../assets/mili-pune.jpeg';
import zaheenSelfie from '../assets/zaheen-blr.jpeg';
import puneSky from '../assets/pune-sunset.jpg';
import blrSky from '../assets/blr-sunset.jpg';

const SplitGallery = ({ onBack }) => {
  const [entries, setEntries] = useState([
    {
      id: 1,
      title: "Mili & Zaheen 🤍",
      date: "April 19, 2026",
      puneImg: miliSelfie,
      bangaloreImg: zaheenSelfie,
      puneCaption: "Mili in Pune",
      bangaloreCaption: "Zaheen in Bangalore"
    },
    {
      id: 2,
      title: "Evening Skies 🌅",
      date: "April 18, 2026",
      puneImg: puneSky,
      bangaloreImg: blrSky,
      puneCaption: "My view from Pune",
      bangaloreCaption: "Zaheen's view from BLR"
    }
  ]);

  return (
    <div className="view-container">
      <div className="view-header">
        <button onClick={onBack} className="back-btn">
          <ArrowLeft size={24} />
        </button>
        <h2 style={{ margin: 0 }}>Split Diary</h2>
      </div>

      <div className="gallery-list">
        {entries.map((entry) => (
          <div key={entry.id} className="card split-card">
            <div className="split-header">
              <h3>{entry.title}</h3>
              <span className="split-date">{entry.date}</span>
            </div>
            
            <div className="split-images-container">
              {/* Mili's Side (Pune) */}
              <div className="split-side">
                <img src={entry.puneImg} alt="Pune" className="split-image" />
                <div className="location-tag">
                  <MapPin size={12} /> Pune
                </div>
                <p className="split-caption">{entry.puneCaption}</p>
              </div>

              {/* The Divider */}
              <div className="split-divider"></div>

              {/* Zaheen's Side (Bangalore) */}
              <div className="split-side">
                <img src={entry.bangaloreImg} alt="Bangalore" className="split-image" />
                <div className="location-tag bangalore-tag">
                  <MapPin size={12} /> BLR
                </div>
                <p className="split-caption">{entry.bangaloreCaption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button 
        className="nudge-btn" 
        style={{ marginTop: '10px' }} 
        onClick={() => alert("Ready for more memories!")}
      >
        <Plus size={20} /> Add New Entry
      </button>
    </div>
  );
};

export default SplitGallery;