import React, { useState } from 'react';
import WatchStream from './components/WatchStream';
import TVGuideGrid from './components/TVGuideGrid';

function App() {
  const [channelId, setChannelId] = useState('Black Bunnies'); // 👈 update if needed
  const [guideVisible, setGuideVisible] = useState(false);

  return (
    <div>
      {/* ✅ Video Player */}
      <WatchStream
        channelId={channelId}
        onSwitch={setChannelId}
        isPremium={true}
      />

      {/* ✅ TV Guide overlay */}
      {guideVisible && (
        <TVGuideGrid
          currentChannel={channelId}
          onSwitch={setChannelId}
          isPremium={true}
          onClose={() => setGuideVisible(false)}
        />
      )}

      {/* ✅ Button to open guide */}
      <button
        onClick={() => setGuideVisible(true)}
        style={{
          position: 'absolute',
          top: '1rem',
          left: '1rem',
          zIndex: 1000,
          backgroundColor: '#7c3aed',
          color: '#fff',
          padding: '0.4rem 1rem',
          borderRadius: '6px'
        }}
      >
        Open Guide
      </button>
    </div>
  );
}

export default App;
