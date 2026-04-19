import { useState, useEffect } from 'react';
import API from '../services/api';
import { Lock, Unlock, ArrowLeft } from 'lucide-react';

const Vault = ({ onBack }) => {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    const fetchLetters = async () => {
      try {
        const response = await API.get('/vault');
        // If backend returns empty, use a placeholder
        setLetters(response.data.length > 0 ? response.data : [
          { id: 99, title: "Sample: Open on May 1st", content: "This is a secret message!", unlockDate: "2026-05-01" }
        ]);
      } catch (e) {
        // Mock data for offline testing
        setLetters([{ id: 1, title: "Welcome to the Vault", content: "More letters coming soon!", unlockDate: "2024-01-01" }]);
      }
    };
    fetchLetters();
  }, []);

  return (
    <div className="view-container">
      <div className="view-header">
        <button onClick={onBack} className="back-btn">
          <ArrowLeft size={24} />
        </button>
        <h2 style={{ margin: 0 }}>The Vault</h2>
      </div>

      <div className="vault-list" style={{ overflowY: 'auto', maxHeight: '70vh' }}>
        {letters.map((letter) => {
          const isLocked = new Date(letter.unlockDate) > new Date();
          return (
            <div key={letter.id} className="card" style={{ opacity: isLocked ? 0.8 : 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{letter.title}</h3>
                {isLocked ? <Lock size={20} color="#ff4d6d" /> : <Unlock size={20} color="#4CAF50" />}
              </div>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>
                {isLocked ? `Locked until ${new Date(letter.unlockDate).toLocaleDateString()}` : letter.content}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Vault;