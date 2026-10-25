import React, { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';

export default function OrigamiPaperPlane({ isTriggered, onUnfoldLetter }) {
  // states: 'idle' | 'flying-in' | 'waiting-click' | 'swooping-to-center' | 'unfolding'
  const [planeState, setPlaneState] = useState('idle');
  const [trailHearts, setTrailHearts] = useState([]);

  useEffect(() => {
    if (isTriggered && planeState === 'idle') {
      setPlaneState('flying-in');

      // Add trail hearts dynamically
      const interval = setInterval(() => {
        setTrailHearts((prev) => [
          ...prev.slice(-12),
          {
            id: Date.now() + Math.random(),
            x: Math.random() * 20 - 10,
            y: Math.random() * 20 - 10,
            size: 12 + Math.random() * 12,
          },
        ]);
      }, 200);

      // Transition to waiting-click when plane reaches gentle hover position
      const timer = setTimeout(() => {
        setPlaneState('waiting-click');
        clearInterval(interval);
      }, 2600);

      return () => {
        clearInterval(interval);
        clearTimeout(timer);
      };
    }
  }, [isTriggered, planeState]);

  const handlePlaneClick = () => {
    if (planeState === 'waiting-click' || planeState === 'flying-in') {
      setPlaneState('swooping-to-center');

      // Swoop to center, then unfold
      setTimeout(() => {
        setPlaneState('unfolding');
        setTimeout(() => {
          onUnfoldLetter();
        }, 600);
      }, 1000);
    }
  };

  if (!isTriggered || planeState === 'idle') return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: planeState === 'waiting-click' || planeState === 'flying-in' ? 'auto' : 'none',
        zIndex: 40,
        overflow: 'hidden',
      }}
    >
      <div
        className={`plane-container plane-${planeState}`}
        onClick={handlePlaneClick}
        style={{
          position: 'absolute',
          cursor: 'pointer',
          transformOrigin: 'center center',
          userSelect: 'none',
        }}
      >
        {/* Cute Floating Tooltip */}
        {(planeState === 'waiting-click' || planeState === 'flying-in') && (
          <div
            style={{
              position: 'absolute',
              top: '-45px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: '#ec4899',
              color: '#ffffff',
              padding: '6px 14px',
              borderRadius: '9999px',
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '0.85rem',
              whiteSpace: 'nowrap',
              boxShadow: '0 4px 14px rgba(236, 72, 153, 0.45)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              animation: 'bounceTooltip 1.2s ease-in-out infinite alternate',
            }}
          >
            <span>Tap me, Mannu!</span>
            <Heart size={14} fill="#ffffff" />
          </div>
        )}

        {/* Trail Hearts */}
        <div style={{ position: 'absolute', bottom: '10px', left: '-20px', pointerEvents: 'none' }}>
          {trailHearts.map((h, i) => (
            <span
              key={h.id}
              style={{
                position: 'absolute',
                left: `${h.x}px`,
                top: `${h.y}px`,
                fontSize: `${h.size}px`,
                color: '#f43f5e',
                opacity: 0.8 - (i * 0.05),
                animation: 'fadeTrail 1.5s forwards',
              }}
            >
              ❤️
            </span>
          ))}
        </div>

        {/* Realistic Origami Paper Plane SVG */}
        <svg
          width="130"
          height="95"
          viewBox="0 0 160 110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            filter: 'drop-shadow(0 14px 22px rgba(236, 72, 153, 0.35))',
            transition: 'transform 0.3s ease',
          }}
          className="origami-svg"
        >
          {/* Main Top Wing */}
          <polygon points="10,40 150,15 90,85" fill="#fff5f8" />
          {/* Left Crease Facet */}
          <polygon points="10,40 150,15 70,55" fill="#fed7e2" />
          {/* Center Body Keel */}
          <polygon points="70,55 150,15 90,85" fill="#fbb6ce" />
          {/* Underfold Shadow */}
          <polygon points="70,55 90,85 80,100" fill="#f687b3" />
          {/* Back Wing Tip */}
          <polygon points="10,40 70,55 40,65" fill="#fce7f3" />

          {/* Cute Little Heart Stamp on Wing */}
          <path
            d="M 115 32 C 115 28 111 25 107 25 C 103 25 101 28 101 30 C 101 28 99 25 95 25 C 91 25 87 28 87 32 C 87 38 101 46 101 46 C 101 46 115 38 115 32 Z"
            fill="#ec4899"
          />
        </svg>
      </div>

      <style>{`
        /* Flight Path Keyframes */
        .plane-flying-in {
          animation: flyAlongArc 2.6s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        .plane-waiting-click {
          top: 35%;
          left: 55%;
          animation: gentlePlaneHover 2.4s ease-in-out infinite alternate;
        }

        .plane-swooping-to-center {
          top: 35%;
          left: 55%;
          animation: swoopToCenter 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .plane-unfolding {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(1.6);
          opacity: 0;
          transition: all 0.5s ease-out;
        }

        .plane-container:hover .origami-svg {
          transform: scale(1.1) rotate(-4deg);
        }

        @keyframes flyAlongArc {
          0% {
            top: 90%;
            left: -150px;
            transform: rotate(28deg) scale(0.65);
          }
          40% {
            top: 20%;
            left: 35%;
            transform: rotate(-10deg) scale(1.1);
          }
          75% {
            top: 42%;
            left: 65%;
            transform: rotate(8deg) scale(1);
          }
          100% {
            top: 35%;
            left: 55%;
            transform: rotate(-4deg) scale(1.05);
          }
        }

        @keyframes gentlePlaneHover {
          0% {
            transform: translate(-50%, -50%) rotate(-4deg) translateY(0);
          }
          50% {
            transform: translate(-50%, -50%) rotate(2deg) translateY(-14px);
          }
          100% {
            transform: translate(-50%, -50%) rotate(-4deg) translateY(0);
          }
        }

        @keyframes swoopToCenter {
          0% {
            top: 35%;
            left: 55%;
            transform: translate(-50%, -50%) rotate(-4deg) scale(1.05);
          }
          50% {
            top: 46%;
            left: 48%;
            transform: translate(-50%, -50%) rotate(15deg) scale(1.3);
          }
          100% {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(0deg) scale(1.5);
          }
        }

        @keyframes bounceTooltip {
          0% { transform: translateX(-50%) translateY(0); }
          100% { transform: translateX(-50%) translateY(-6px); }
        }

        @keyframes fadeTrail {
          0% { transform: scale(1); opacity: 0.9; }
          100% { transform: scale(0.3) translateY(20px); opacity: 0; }
        }

        @media (max-width: 640px) {
          .plane-waiting-click {
            top: 40% !important;
            left: 50% !important;
          }
        }
      `}</style>
    </div>
  );
}
