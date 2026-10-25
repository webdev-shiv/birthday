import React from 'react';
import { Heart, Sparkles, Send, Stars } from 'lucide-react';
import { CONFIG } from '../config';

export default function LandingHero({ onStartSurprise, isPlaneFlying }) {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '30px 20px',
        position: 'relative',
        zIndex: 2,
      }}
    >
      {/* Decorative floating top badge */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(10px)',
          padding: '8px 20px',
          borderRadius: '9999px',
          border: '1.5px solid rgba(244, 114, 182, 0.4)',
          boxShadow: '0 4px 18px rgba(236, 72, 153, 0.15)',
          marginBottom: '24px',
          animation: 'gentleFloat 3s ease-in-out infinite alternate',
        }}
      >
        <Sparkles size={16} color="#ec4899" />
        <span
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '0.9rem',
            fontWeight: 700,
            color: '#be185d',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}
        >
          A Special Celebration for You
        </span>
        <Heart size={15} color="#f43f5e" fill="#f43f5e" />
      </div>

      {/* Main Birthday Title */}
      <div style={{ maxWidth: '850px', position: 'relative' }}>
        <h1
          style={{
            fontFamily: 'var(--font-cursive-fancy)',
            fontSize: 'clamp(3.2rem, 8vw, 6.5rem)',
            lineHeight: 1.15,
            color: '#be185d',
            textShadow: '0 4px 20px rgba(236, 72, 153, 0.25)',
            marginBottom: '10px',
            fontWeight: 700,
          }}
        >
          Happy Birthday, {CONFIG.recipient.name}!
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.45rem)',
            color: '#6b5b73',
            maxWidth: '620px',
            margin: '0 auto 34px auto',
            fontWeight: 400,
            lineHeight: 1.6,
          }}
        >
          To the girl whose smile makes my entire world light up.
          <br />
          <span style={{ color: '#be185d', fontWeight: 600 }}>
            Today is all about you, meri jaan. ❤️
          </span>
        </p>
      </div>

      {/* Glowing Call-to-Action Button */}
      <div style={{ position: 'relative', marginTop: '10px' }}>
        <button
          id="btn-surprise"
          onClick={onStartSurprise}
          disabled={isPlaneFlying}
          className="btn-glowing-pink"
          style={{
            opacity: isPlaneFlying ? 0.7 : 1,
            cursor: isPlaneFlying ? 'default' : 'pointer',
          }}
        >
          <Sparkles size={20} />
          <span>A Little Surprise for You</span>
          <Send size={18} style={{ transform: 'rotate(12deg)' }} />
        </button>

        {/* Subtle subtext */}
        <p
          style={{
            fontFamily: 'var(--font-handwriting)',
            fontSize: '1.25rem',
            color: '#be185d',
            marginTop: '16px',
            opacity: 0.9,
          }}
        >
          {isPlaneFlying
            ? 'Look! A special message is flying towards you... ✨'
            : 'Tap the button to send a little magic your way ✨'}
        </p>
      </div>

      {/* Cute sender signature pill */}
      <div
        style={{
          position: 'absolute',
          bottom: '24px',
          fontFamily: 'var(--font-handwriting)',
          fontSize: '1.25rem',
          color: '#8e7d95',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        <span>With endless love,</span>
        <span style={{ color: '#ec4899', fontWeight: 700 }}>Shivam</span>
        <Heart size={14} color="#ec4899" fill="#ec4899" />
      </div>

      <style>{`
        @keyframes gentleFloat {
          0% { transform: translateY(0); }
          100% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
}
