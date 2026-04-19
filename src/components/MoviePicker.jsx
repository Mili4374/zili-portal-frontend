import { useState } from 'react';
import { ArrowLeft, Film, Clapperboard, Popcorn } from 'lucide-react';

const MoviePicker = ({ onBack }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);

  const movies = [
    "Barfi!", "Ready", "Happy New Year", "Veer-Zaara", "Kal Ho Naa Ho", 
    "Bodyguard", "Ajab Prem Ki Ghazab Kahani", "Yeh Jawaani Hai Deewani", 
    "Jab We Met", "Zindagi Na Milegi Dobara", "Dil Chahta Hai", 
    "Chennai Express", "Main Hoon Na", "Om Shanti Om", "3 Idiots"
  ];

  const pickMovie = () => {
    setIsSpinning(true);
    setSelectedMovie(null);
    
    // Fake "spinning" effect by waiting 1.5 seconds before showing the result
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * movies.length);
      setSelectedMovie(movies[randomIndex]);
      setIsSpinning(false);
    }, 1500);
  };

  return (
    <div className="card" style={{ padding: '20px', minHeight: '400px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
        <button onClick={onBack} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ff4d6d', display: 'flex', alignItems: 'center', padding: 0 }}>
          <ArrowLeft size={24} /> <span style={{ fontWeight: 'bold', marginLeft: '5px' }}>Back</span>
        </button>
        <h2 style={{ flex: 1, textAlign: 'center', margin: 0, color: '#590d22', paddingRight: '40px' }}>Movie Night</h2>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        
        {/* The Display Area */}
        <div style={{ 
          background: '#fff0f3', 
          width: '100%', 
          padding: '40px 20px', 
          borderRadius: '20px', 
          marginBottom: '30px',
          boxSizing: 'border-box',
          minHeight: '180px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {isSpinning ? (
            <div style={{ color: '#ff4d6d', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
              <Film size={48} style={{ animation: 'spin 2s linear infinite' }} />
              <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
              <span style={{ fontWeight: '600' }}>Choosing our movie...</span>
            </div>
          ) : selectedMovie ? (
            <div>
              <p style={{ margin: '0 0 10px 0', color: '#800f2f', fontWeight: '600', fontSize: '0.9rem' }}>Tonight we are watching:</p>
              <h2 style={{ margin: 0, color: '#ff4d6d', fontSize: '2rem', fontWeight: '800' }}>{selectedMovie} 🍿</h2>
            </div>
          ) : (
            <div style={{ color: '#800f2f', opacity: 0.7 }}>
              <Clapperboard size={48} style={{ marginBottom: '10px' }} />
              <p style={{ margin: 0, fontWeight: '500' }}>Ready for a FaceTime movie date?</p>
            </div>
          )}
        </div>

        <button 
          className="nudge-btn" 
          onClick={pickMovie} 
          disabled={isSpinning}
          style={{ width: '80%', opacity: isSpinning ? 0.7 : 1 }}
        >
          <Popcorn size={20} /> {selectedMovie ? "Pick Another!" : "Roll the Dice"}
        </button>
      </div>
    </div>
  );
};

export default MoviePicker;