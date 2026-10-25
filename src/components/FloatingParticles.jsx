import React, { useMemo } from 'react';

const ICONS = ['❤️', '💖', '🌸', '✨', '⭐', '💕', '🌷', '💫'];

export default function FloatingParticles({ count = 24 }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const icon = ICONS[i % ICONS.length];
      const left = Math.random() * 96; // 0% to 96%
      const duration = 12 + Math.random() * 18; // 12s to 30s
      const delay = Math.random() * 10;
      const size = 14 + Math.random() * 18; // 14px to 32px
      const opacity = 0.35 + Math.random() * 0.45;
      const drift = -30 + Math.random() * 60; // horizontal drift

      return {
        id: i,
        icon,
        left: `${left}%`,
        duration: `${duration}s`,
        delay: `${delay}s`,
        size: `${size}px`,
        opacity,
        drift: `${drift}px`,
      };
    });
  }, [count]);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      {particles.map((p) => (
        <span
          key={p.id}
          style={{
            position: 'absolute',
            bottom: '-40px',
            left: p.left,
            fontSize: p.size,
            opacity: p.opacity,
            animation: `driftUp ${p.duration} linear infinite`,
            animationDelay: p.delay,
            filter: 'drop-shadow(0 2px 4px rgba(236,72,153,0.25))',
            userSelect: 'none',
          }}
        >
          {p.icon}
        </span>
      ))}

      <style>{`
        @keyframes driftUp {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          90% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(-105vh) translateX(40px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
