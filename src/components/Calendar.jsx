import { useState, useEffect } from 'react';
import API from '../services/api';
import { ArrowLeft, Send } from 'lucide-react';

const Calendar = ({ onBack }) => {
  const [newNote, setNewNote] = useState("");

  const handleAddNote = async () => {
    if (!newNote.trim()) return;
    try {
      await API.post('/notes', { author: 'Mili', content: newNote });
      setNewNote("");
      alert("Note sent! Check the Timeline to see it.");
    } catch (e) {
      alert("Note saved locally (Backend offline)");
    }
  };

  return (
    <div className="view-container">
      {/* HEADER: Always at the top */}
      <div className="view-header">
        <button onClick={onBack} className="back-btn">
          <ArrowLeft size={24} />
        </button>
        <h2 style={{ margin: 0 }}>Write a Note</h2>
      </div>

      <div className="card">
        <textarea 
          placeholder="What's on your mind?..." 
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          className="note-textarea"
        />
        <button onClick={handleAddNote} className="nudge-btn" style={{marginTop: '10px'}}>
          <Send size={20} /> Send Note
        </button>
      </div>
      
      <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#800f2f' }}>
        Notes sent here appear in the <strong>Timeline</strong> tab.
      </p>
    </div>
  );
};

export default Calendar;