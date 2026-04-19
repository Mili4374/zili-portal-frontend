import { MapPin, Plane, ArrowLeft } from 'lucide-react';

const DistanceTracker = ({ onBack }) => {
  const puneLat = 18.5462;
  const puneLon = 73.9040;
  const bangLat = 12.9656;
  const bangLon = 77.7253;

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; 
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round(R * c);
  };

  const distanceKm = calculateDistance(puneLat, puneLon, bangLat, bangLon);

  return (
    <div className="card" style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
      
      {/* Added the Header with Back Button */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
       
        <h2 style={{ flex: 1, textAlign: 'center', margin: 0, color: '#590d22', paddingRight: '40px' }}>Distance</h2>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ textAlign: 'center', width: '80px' }}>
          <MapPin size={28} color="#ff4d6d" />
          <p style={{ margin: '8px 0 0', fontWeight: '700', fontSize: '0.95rem', color: '#590d22' }}>Pune</p>
          <p style={{ margin: 0, fontSize: '0.75rem', color: '#800f2f', fontWeight: '600' }}>Mili</p>
        </div>
        
        <div style={{ flex: 1, padding: '0 15px', position: 'relative' }}>
           <div style={{ borderBottom: '2px dashed #ffb1bd', position: 'absolute', top: '50%', left: '10px', right: '10px', zIndex: 1 }}></div>
           <Plane 
             size={24} 
             color="#ff4d6d" 
             style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2, backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '50%', padding: '2px' }} 
           />
        </div>

        <div style={{ textAlign: 'center', width: '80px' }}>
          <MapPin size={28} color="#ff4d6d" />
          <p style={{ margin: '8px 0 0', fontWeight: '700', fontSize: '0.95rem', color: '#590d22' }}>Bangalore</p>
          <p style={{ margin: 0, fontSize: '0.75rem', color: '#800f2f', fontWeight: '600' }}>Zaheen</p>
        </div>
      </div>
      
      <div style={{ textAlign: 'center', background: '#fff0f3', padding: '12px', borderRadius: '16px' }}>
        <span style={{ fontSize: '1.8rem', fontWeight: '800', color: '#ff4d6d' }}>{distanceKm}</span>
        <span style={{ fontWeight: '700', color: '#800f2f', marginLeft: '8px', fontSize: '1rem' }}>km Apart</span>
      </div>
    </div>
  );
};

export default DistanceTracker;