// src/components/TVGuideGrid.jsx
import React, { useState } from 'react';
import channels from '../data/channelData';

export default function TVGuideGrid({ currentChannel, onSwitch, isPremium, onClose }) {
  const [lockedChannel, setLockedChannel] = useState(null);

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.95)',
      color: 'white',
      zIndex: 9999,
      overflowY: 'auto',
      padding: '1rem'
    }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>📺 TV Guide</h2>
        <button
          onClick={onClose}
          style={{ backgroundColor: '#7c3aed', color: '#fff', padding: '0.4rem 1rem', borderRadius: '6px' }}
        >
          Close
        </button>
      </div>

      {/* Channel Rows Only */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {channels.map((ch) => {
          const isLocked = ch.premium && !isPremium;

          return (
            <div
              key={ch.id}
              onClick={() => {
                if (isLocked) {
                  setLockedChannel(ch.label);
                } else {
                  onSwitch(ch.id);
                  onClose();
                }
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                backgroundColor: currentChannel === ch.id ? '#7c3aed' : '#111',
                border: currentChannel === ch.id ? '2px solid #fff' : '1px solid #333',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <img
                src={ch.thumbnail}
                alt={ch.label}
                style={{
                  width: 80,
                  height: 60,
                  objectFit: 'cover',
                  borderRadius: '6px',
                  marginRight: '1rem',
                  filter: isLocked ? 'blur(4px)' : 'none',
                  opacity: isLocked ? 0.6 : 1,
                }}
              />
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>{ch.label}</div>
                <div style={{ fontSize: '0.85rem', color: '#ccc' }}>{ch.description}</div>
              </div>
              {isLocked && (
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0, bottom: 0,
                  backgroundColor: 'rgba(0,0,0,0.6)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                  pointerEvents: 'none'
                }}>
                  🔒 Premium
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Paywall Modal */}
      {lockedChannel && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10000
        }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔒 {lockedChannel}</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#ccc' }}>
            This channel requires premium access.
          </p>
          <button
            onClick={() => setLockedChannel(null)}
            style={{
              backgroundColor: '#7c3aed',
              padding: '0.6rem 1.5rem',
              fontSize: '1rem',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Got it
          </button>
        </div>
      )}
    </div>
  );
}
