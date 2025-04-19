import React, { useState } from 'react';
import ChannelSwitcher from './components/ChannelSwitcher';

const PlayerScreen = () => {
  const [streamUrl, setStreamUrl] = useState('/streams/channel_01/index.m3u8');

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      <div className="md:w-1/4 w-full p-4 bg-gray-900">
        <ChannelSwitcher onChannelSelect={setStreamUrl} />
      </div>
      <div className="md:w-3/4 w-full flex justify-center items-center bg-black">
        <video
          controls
          autoPlay
          className="w-full max-w-6xl h-auto"
          src={streamUrl}
          type="application/x-mpegURL"
        />
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <PlayerScreen />
    </div>
  );
}

export default App;
