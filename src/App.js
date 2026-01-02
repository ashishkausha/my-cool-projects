import React, { useState } from 'react';
import './App.css';

// Import your components
import QuoteGenerator from './components/QuoteGenerator/QuoteGenerator';
import SoundPad from './components/SoundPad/SoundPad';
import Calculator from './components/Calculator/Calculator';

function App() {
  const [activeProject, setActiveProject] = useState('quote');

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="nav-bar">
        <button 
          className={`nav-btn ${activeProject === 'quote' ? 'active' : ''}`} 
          onClick={() => setActiveProject('quote')}
        >
          Quote Gen
        </button>
        <button 
          className={`nav-btn ${activeProject === 'sound' ? 'active' : ''}`} 
          onClick={() => setActiveProject('sound')}
        >
          Sound Pad
        </button>
        <button 
          className={`nav-btn ${activeProject === 'calc' ? 'active' : ''}`} 
          onClick={() => setActiveProject('calc')}
        >
          Calculator
        </button>
      </nav>

      {/* Project Display Area */}
      <div className="content-area">
        {activeProject === 'quote' && <QuoteGenerator />}
        {activeProject === 'sound' && <SoundPad />}
        {activeProject === 'calc' && <Calculator />}
      </div>
    </div>
  );
}

export default App;