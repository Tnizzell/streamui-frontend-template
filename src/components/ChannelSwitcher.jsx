import React from 'react';

const channels = [
  { id: 'channel_01', label: 'Earth TV' },
  { id: 'channel_02', label: 'Channel 2' },
  { id: 'channel_03', label: 'NSFW Zone 🔒', premium: true },
  // Add up to 99 channels here
];

export default function ChannelSwitcher({ currentChannel, onSwitch }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center py-4">
      {channels.map((channel) => (
        <button
          key={channel.id}
          onClick={() => onSwitch(channel.id)}
          className={`px-4 py-2 rounded-md font-medium border ${
            currentChannel === channel.id
              ? 'bg-violet-600 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          {channel.label}
        </button>
      ))}
    </div>
  );
}
