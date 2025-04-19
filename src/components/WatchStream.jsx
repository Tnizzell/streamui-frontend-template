import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import schedule from '../data/scheduleData';
import channels from '../data/channelData';

export default function WatchStream({ channelId, onSwitch, isPremium }) {
  const videoRef = useRef();
  const [videoIndex, setVideoIndex] = useState(0);
  const [showUpNext, setShowUpNext] = useState(false);
  const [countdown, setCountdown] = useState(5);

  const playlist = schedule[channelId]?.slots || {};
  const orderedVideos = Object.values(playlist);
  const currentVideo = orderedVideos[videoIndex];
  const currentChannelIsPremium = channels.find(ch => ch.id === channelId)?.premium;

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.src = '';
    }
    setVideoIndex(0);
  }, [channelId]);

  useEffect(() => {
    if (!currentVideo?.url || !videoRef.current) return;

    const isHls = currentVideo.url.endsWith('.m3u8');
    let hls;

    if (Hls.isSupported() && isHls) {
      hls = new Hls();
      hls.loadSource(currentVideo.url);
      hls.attachMedia(videoRef.current);
    } else {
      videoRef.current.src = currentVideo.url;
    }

    return () => {
      if (hls) hls.destroy();
    };
  }, [currentVideo]);

  useEffect(() => {
    if (!showUpNext) return;

    if (countdown === 0) {
      const nextIndex = (videoIndex + 1) % orderedVideos.length;
      setVideoIndex(nextIndex);
      setShowUpNext(false);
      return;
    }

    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [showUpNext, countdown, orderedVideos.length, videoIndex]);

  if (!currentVideo) {
    return <div style={{ color: '#fff', padding: 20 }}>No videos found for this channel.</div>;
  }

  return (
    <div style={{
      position: 'absolute',
      top: 0, left: 0, right: 0, bottom: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000'
    }}>
      <video
        ref={videoRef}
        controls
        autoPlay
        onEnded={() => {
          setShowUpNext(true);
          setCountdown(5);
        }}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          backgroundColor: '#000'
        }}
      />

      {/* 🔒 PREMIUM PAYWALL DISABLED FOR TEMPLATE VERSION */}
      {/* This feature requires a real login + subscription system */}
      {/* Uncomment and connect with Supabase + Stripe if you plan to use it */}

      {/*
      {!isPremium && currentChannelIsPremium && (
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backdropFilter: 'blur(12px)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔒 Premium Content</h2>
          <p style={{ fontSize: '1rem', marginBottom: '1.5rem', maxWidth: '320px', textAlign: 'center' }}>
            This stream is blurred because it requires a premium subscription.
          </p>
          <button
            onClick={() => alert('TODO: Trigger Upgrade Modal')}
            style={{
              backgroundColor: '#7c3aed',
              padding: '0.6rem 1.5rem',
              borderRadius: '6px',
              border: 'none',
              fontSize: '1rem',
              color: '#fff',
              cursor: 'pointer'
            }}
          >
            Upgrade to Unlock
          </button>
        </div>
      )}
      */}

      {showUpNext && (
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          zIndex: 9999
        }}>
          <h2 style={{ fontSize: '2rem' }}>🎬 Up Next</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
            Switching in {countdown}s...
          </p>
          <button
            onClick={() => setShowUpNext(false)}
            style={{
              backgroundColor: '#7c3aed',
              padding: '0.5rem 1.5rem',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
