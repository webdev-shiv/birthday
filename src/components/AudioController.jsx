import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Music, Heart, Eye } from 'lucide-react';
import { musicPlayer } from '../utils/audio';
import { CONFIG } from '../config';

export default function AudioController({ isPlaying, onTogglePlay }) {
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleMuteToggle = (e) => {
    e.stopPropagation();
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    musicPlayer.setMute(newMuted);
  };

  const handleMainToggle = () => {
    setHasInteracted(true);
    onTogglePlay();
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      {/* Soft Music Widget */}
      <button
        onClick={handleMainToggle}
        title={isPlaying ? "Pause Romantic Music" : "Play Romantic Music"}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(10px)',
          border: '1.5px solid rgba(244, 114, 182, 0.4)',
          borderRadius: '9999px',
          padding: '8px 16px',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(236, 72, 153, 0.18)',
          color: '#be185d',
          fontWeight: 600,
          fontSize: '0.88rem',
          transition: 'all 0.3s ease',
        }}
      >
        <span
          style={{
            display: 'inline-flex',
            animation: isPlaying ? 'spinSlow 6s linear infinite' : 'none',
          }}
        >
          <Music size={16} color="#ec4899" />
        </span>
        <span style={{ display: 'none', smDisplay: 'inline' }} className="music-label">
          {isPlaying ? 'Music: Playing' : 'Music: Soft Melodies'}
        </span>
        {isPlaying && (
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#10b981',
              boxShadow: '0 0 8px #10b981',
              display: 'inline-block',
            }}
          />
        )}
      </button>

      {/* Mute / Unmute Button */}
      {isPlaying && (
        <button
          onClick={handleMuteToggle}
          title={isMuted ? "Unmute" : "Mute"}
          style={{
            background: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(10px)',
            border: '1.5px solid rgba(244, 114, 182, 0.4)',
            borderRadius: '50%',
            width: '38px',
            height: '38px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(236, 72, 153, 0.15)',
            color: '#be185d',
            transition: 'all 0.2s ease',
          }}
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      )}

      <style>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (min-width: 640px) {
          .music-label {
            display: inline !important;
          }
        }
      `}</style>
    </div>
  );
}
