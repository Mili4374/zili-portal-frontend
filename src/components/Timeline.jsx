import { useState, useEffect } from 'react';
import API from '../services/api';
import { ArrowLeft, MessageCircle } from 'lucide-react';

const Timeline = ({ onBack }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await API.get('/notes');
        setNotes(response.data);
      } catch (e) { 
        console.error("Timeline error:", e); 
      }
    };
    fetchNotes();
  }, []);

  return (
    <div className="card">
      <div className="view-header">
        <button onClick={onBack} className="back-btn"><ArrowLeft size={20}/></button>
        <h2 style={{ margin: 0, color: '#590d22' }}>Our Timeline</h2>
      </div>

      <div className="notes-history-list" style={{ maxHeight: '60vh', overflowY: 'auto', marginTop: '20px' }}>
        {notes.length > 0 ? (
          notes.map((note) => (
            <div key={note.id} className="note-card" style={{ background: 'white', padding: '15px', borderRadius: '15px', marginBottom: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                <span style={{ fontWeight: 700, fontSize: '0.75rem', color: '#ff4d6d', textTransform: 'uppercase' }}>{note.author}</span>
                <span style={{ fontSize: '0.7rem', color: '#800f2f' }}>{new Date(note.createdAt).toLocaleDateString()}</span>
              </div>
              <p style={{ margin: 0, color: '#590d22', fontSize: '0.95rem' }}>{note.content}</p>
            </div>
          ))
        ) : (
          <div style={{ textAlign: 'center', padding: '40px', color: '#800f2f' }}>
            <MessageCircle size={48} style={{ opacity: 0.2, marginBottom: '10px' }} />
            <p>No memories logged yet!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;