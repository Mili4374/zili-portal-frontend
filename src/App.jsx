import { useState, useEffect } from 'react';
import Countdown from './components/Countdown';
import DistanceTracker from './components/DistanceTracker';
import Vault from './components/Vault';
import MoviePicker from './components/MoviePicker';
import Calendar from './components/Calendar';
import Timeline from './components/Timeline';
import SplitGallery from './components/SplitGallery';
import ProfileSelector from './components/ProfileSelector'; // 1. New Import
import API from './services/api';
import { CalendarHeart, LockKeyhole, Film, Sparkles, History, Heart, Images, UserCircle } from 'lucide-react';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [currentUser, setCurrentUser] = useState(null); // 2. Start as null

  // 3. Check memory when the app opens
  useEffect(() => {
    const savedUser = localStorage.getItem('userProfile');
    if (savedUser) {
      setCurrentUser(savedUser);
    }
  }, []);

  // 4. Handle picking a profile
  const handleProfileSelect = (name) => {
    localStorage.setItem('userProfile', name);
    setCurrentUser(name);
  };

  // 5. Handle Logout / Switch
  const handleSwitchProfile = () => {
    localStorage.removeItem('userProfile');
    setCurrentUser(null);
    setCurrentView('dashboard');
  };

  const partnerName = currentUser === 'Mili' ? 'Zaheen' : 'Mili';

  const handleNudge = async () => {
    try {
      await API.post('/nudge', { sender: currentUser });
      alert(`Nudge sent to ${partnerName}!`); 
    } catch (error) {
      alert(`Nudge sent to ${partnerName}! (Offline Mode)`);
    }
  };

  // 6. If no user is selected, show the selector first
  if (!currentUser) {
    return <ProfileSelector onSelect={handleProfileSelect} />;
  }

  return (
    <div className="dashboard-container">
      <header className="header">
        <div style={{ display: 'flex', justifyBetween: 'center', alignItems: 'center', width: '100%' }}>
           <h1 style={{ flex: 1 }}>Zili Portal <Sparkles size={32} style={{ color: '#ffb703', display: 'inline' }}/></h1>
           {/* 7. Added a Switch Profile button */}
           <button onClick={handleSwitchProfile} className="switch-profile-btn">
             <UserCircle size={20} />
           </button>
        </div>
        <p>Pune ↔️ Bangalore | Hello, {currentUser}!</p>
      </header>

      {currentView === 'dashboard' ? (
        <>
          <Countdown />

          <div className="nav-grid">
            <button className="nav-btn" onClick={() => setCurrentView('calendar')}>
              <div className="icon-wrapper"><CalendarHeart size={28} /></div>
              <div>
                <p className="nav-title">Write</p>
                <p className="nav-sub">Send a Note</p>
              </div>
            </button>
            
            <button className="nav-btn" onClick={() => setCurrentView('timeline')}>
              <div className="icon-wrapper"><History size={28} /></div>
              <div>
                <p className="nav-title">Timeline</p>
                <p className="nav-sub">Our History</p>
              </div>
            </button>

            <button className="nav-btn" onClick={() => setCurrentView('gallery')}>
              <div className="icon-wrapper"><Images size={28} /></div>
              <div>
                <p className="nav-title">Diary</p>
                <p className="nav-sub">Pune ↔️ BLR</p>
              </div>
            </button>

            <button className="nav-btn" onClick={() => setCurrentView('vault')}>
              <div className="icon-wrapper"><LockKeyhole size={28} /></div>
              <div>
                <p className="nav-title">Vault</p>
                <p className="nav-sub">Open When...</p>
              </div>
            </button>

            <button className="nav-btn" onClick={() => setCurrentView('movies')}>
              <div className="icon-wrapper"><Film size={28} /></div>
              <div>
                <p className="nav-title">Movies</p>
                <p className="nav-sub">Watchlist</p>
              </div>
            </button>
          </div>

          <DistanceTracker />

          <button className="nudge-btn" onClick={handleNudge}>
            <Heart fill="white" style={{marginRight: '8px', verticalAlign: 'middle'}}/> 
            Send a Nudge to {partnerName}
          </button>
        </>
      ) : (
        <div className="view-container">
          {currentView === 'calendar' && <Calendar onBack={() => setCurrentView('dashboard')} />}
          {currentView === 'timeline' && <Timeline onBack={() => setCurrentView('dashboard')} />}
          {currentView === 'gallery' && <SplitGallery onBack={() => setCurrentView('dashboard')} />}
          {currentView === 'vault' && <Vault onBack={() => setCurrentView('dashboard')} />}
          {currentView === 'movies' && <MoviePicker onBack={() => setCurrentView('dashboard')} />}
        </div>
      )}
    </div>
  );
}

export default App;