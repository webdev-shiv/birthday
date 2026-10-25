import React, { useState, useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, Volume2, FastForward } from 'lucide-react';

const STATIC_PARTICLES = [
  { id: 1, symbol: '❤️', left: '8%', duration: '6s', delay: '0s', size: 18 },
  { id: 2, symbol: '✨', left: '22%', duration: '7s', delay: '1s', size: 20 },
  { id: 3, symbol: '🌸', left: '38%', duration: '6.5s', delay: '2s', size: 16 },
  { id: 4, symbol: '💖', left: '55%', duration: '7.5s', delay: '0.5s', size: 22 },
  { id: 5, symbol: '💫', left: '72%', duration: '6s', delay: '1.5s', size: 18 },
  { id: 6, symbol: '🧸', left: '88%', duration: '7s', delay: '2.5s', size: 20 },
];

export default function StartOverlay({ onStart, onStartWebsite }) {
  // 'initial' | 'playing_video' | 'completed'
  const [phase, setPhase] = useState('initial');
  const [shouldRender, setShouldRender] = useState(true);
  const [videoProgress, setVideoProgress] = useState(0);
  const videoRef = useRef(null);

  const startSiteMelody = onStartWebsite || onStart;

  // Handle START click -> Request Fullscreen & Start Video with Sound
  const handleStartClick = () => {
    // Attempt native browser fullscreen for immersive cinema experience
    try {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      }
    } catch (e) {
      // Graceful fallback
    }

    setPhase('playing_video');
  };

  // Play video with audio as soon as phase changes to 'playing_video'
  useEffect(() => {
    if (phase === 'playing_video' && videoRef.current) {
      const v = videoRef.current;
      v.muted = false;
      v.volume = 1;
      const playPromise = v.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If browser policy blocks sound initially, unmute on first touch
          v.muted = true;
          v.play();
        });
      }
    }
  }, [phase]);

  // Video finished -> Exit native fullscreen, Celebrate & Open Website with background song
  const handleFinish = () => {
    if (phase === 'completed') return;

    // Exit browser fullscreen smoothly if active
    try {
      if (document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      } else if (document.webkitFullscreenElement && document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    } catch (e) {
      // Graceful fallback
    }

    // Confetti celebration
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#ec4899', '#f43f5e', '#fb7185', '#fbbf24', '#f59e0b', '#ffffff'],
    });

    // Start background romantic song as video finishes
    if (startSiteMelody) {
      startSiteMelody();
    }

    setPhase('completed');
    setTimeout(() => {
      setShouldRender(false);
    }, 700);
  };

  // Track video progress bar
  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const pct = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setVideoProgress(pct);
    }
  };

  if (!shouldRender) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background:
          phase === 'playing_video'
            ? '#000000'
            : 'radial-gradient(circle at 15% 20%, rgba(251, 207, 232, 0.65) 0%, transparent 45%), radial-gradient(circle at 85% 80%, rgba(254, 215, 170, 0.55) 0%, transparent 45%), linear-gradient(135deg, #fff1f5 0%, #fdf4ff 50%, #fff7ed 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        overflow: 'hidden',
        transition: 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s ease',
        opacity: phase === 'completed' ? 0 : 1,
        pointerEvents: phase === 'completed' ? 'none' : 'auto',
        transform: phase === 'completed' ? 'scale(1.04)' : 'scale(1)',
      }}
    >
      {/* Floating Particles in Initial State */}
      {phase === 'initial' && (
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          {STATIC_PARTICLES.map((p) => (
            <div
              key={p.id}
              style={{
                position: 'absolute',
                left: p.left,
                top: '-35px',
                fontSize: `${p.size}px`,
                opacity: 0.6,
                animation: `particleFall ${p.duration} linear infinite`,
                animationDelay: p.delay,
              }}
            >
              {p.symbol}
            </div>
          ))}
        </div>
      )}

      {/* PHASE 1: Initial Welcome Card with START Button */}
      {phase === 'initial' && (
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
            maxWidth: '500px',
            width: '90%',
            padding: '44px 28px',
            borderRadius: '30px',
            background: 'rgba(255, 255, 255, 0.94)',
            border: '2px solid rgba(244, 114, 182, 0.45)',
            boxShadow: '0 20px 50px rgba(236, 72, 153, 0.18)',
            animation: 'fadeInUp 0.35s ease-out forwards',
            margin: '20px',
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#fff0f6',
              padding: '6px 18px',
              borderRadius: '9999px',
              border: '1.5px solid rgba(244, 114, 182, 0.4)',
              marginBottom: '18px',
            }}
          >
            <Sparkles size={15} color="#ec4899" />
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#be185d',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              A Special Surprise For Mannu
            </span>
            <Heart size={14} fill="#f43f5e" color="#f43f5e" />
          </div>

          {/* Heading */}
          <h1
            style={{
              fontFamily: 'var(--font-cursive-fancy)',
              fontSize: 'clamp(2.6rem, 6.5vw, 3.8rem)',
              color: '#be185d',
              lineHeight: 1.15,
              marginBottom: '10px',
            }}
          >
            Happy Birthday, Mannu! ❤️
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-handwriting)',
              fontSize: '1.5rem',
              color: '#6b5b73',
              marginBottom: '30px',
              lineHeight: 1.4,
            }}
          >
            Turn up the volume & tap start to begin our story... 🎬🎶
          </p>

          {/* Golden-Rose Metallic START Button */}
          <div>
            <button
              onClick={handleStartClick}
              style={{
                width: 'clamp(230px, 45vw, 300px)',
                height: '62px',
                background: 'linear-gradient(180deg, #ffe082 0%, #f59e0b 45%, #d97706 100%)',
                border: '2px solid rgba(255, 243, 196, 0.95)',
                borderRadius: '9999px',
                boxShadow:
                  '0 8px 25px rgba(245, 158, 11, 0.45), 0 0 25px rgba(236, 72, 153, 0.25)',
                color: '#451a03',
                fontFamily: 'var(--font-heading)',
                fontSize: '1.3rem',
                fontWeight: 800,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                outline: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <span>START</span>
              <Heart size={20} fill="#451a03" color="#451a03" />
            </button>
          </div>

          <div
            style={{
              marginTop: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              color: '#8e7d95',
              fontSize: '0.86rem',
              fontFamily: 'var(--font-heading)',
            }}
          >
            <Volume2 size={14} color="#ec4899" />
            <span>Includes audio experience</span>
          </div>
        </div>
      )}

      {/* PHASE 2: True Fullscreen Edge-To-Edge Video Playback With Sound */}
      {(phase === 'playing_video' || phase === 'completed') && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 10,
            background: '#000000',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Fullscreen Video Element */}
          <video
            ref={videoRef}
            src="/loading-video.mp4"
            playsInline
            autoPlay
            onEnded={handleFinish}
            onTimeUpdate={handleTimeUpdate}
            style={{
              width: '100vw',
              height: '100vh',
              objectFit: 'cover',
              background: '#000000',
              display: 'block',
            }}
          />

          {/* Floating Subtle Skip Button in Top-Right Corner */}
          <button
            onClick={handleFinish}
            style={{
              position: 'absolute',
              top: '20px',
              right: '24px',
              zIndex: 30,
              background: 'rgba(0, 0, 0, 0.55)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: '#ffffff',
              padding: '8px 18px',
              borderRadius: '9999px',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.86rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(236, 72, 153, 0.8)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(0, 0, 0, 0.55)';
            }}
          >
            <span>Skip to Website</span>
            <FastForward size={14} />
          </button>

          {/* Bottom Progress Bar across the entire screen width */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '5px',
              background: 'rgba(255, 255, 255, 0.2)',
              zIndex: 30,
            }}
          >
            <div
              style={{
                width: `${videoProgress}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #f43f5e 0%, #fbbf24 100%)',
                boxShadow: '0 0 10px rgba(244, 63, 94, 0.8)',
                transition: 'width 0.1s linear',
              }}
            />
          </div>
        </div>
      )}

      <style>{`
        @keyframes particleFall {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          100% {
            transform: translateY(105vh) rotate(360deg);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
