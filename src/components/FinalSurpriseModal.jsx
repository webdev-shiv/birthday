import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, Cake, PartyPopper, Check, Wine } from 'lucide-react';
import { CONFIG } from '../config';
import { musicPlayer } from '../utils/audio';

export default function FinalSurpriseModal() {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [acceptedPromise, setAcceptedPromise] = useState(false);

  const triggerConfetti = () => {
    // Multi-stage celebratory confetti explosion
    const count = 220;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#ec4899', '#f43f5e', '#a855f7', '#fbbf24', '#fbcfe8'],
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  };

  const handleBlowCandles = () => {
    if (!candlesBlown) {
      setCandlesBlown(true);
      musicPlayer.playChimeSound();
      triggerConfetti();

      // Second wave of romantic heart confetti
      setTimeout(() => {
        confetti({
          particleCount: 85,
          spread: 80,
          origin: { y: 0.6 },
          shapes: ['circle'],
          colors: ['#f43f5e', '#ec4899', '#fbcfe8', '#ffffff'],
        });
      }, 500);

      // Smoothly scroll down slightly to ensure the revealed message is in full view
      setTimeout(() => {
        const el = document.getElementById('revealed-birthday-message');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 350);
    }
  };

  const handlePromiseClick = () => {
    setAcceptedPromise(true);
    triggerConfetti();
  };

  return (
    <section
      id="section-final"
      style={{
        padding: '90px 20px 120px 20px',
        maxWidth: '920px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
        zIndex: 2,
      }}
    >
      {/* Outer Glow Container */}
      <div
        className="glass-panel-pink"
        style={{
          padding: '48px 24px',
          borderRadius: '32px',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(253, 242, 248, 0.85) 100%)',
          border: '2px solid rgba(244, 114, 182, 0.35)',
          boxShadow: 'var(--shadow-hover)',
        }}
      >
        {/* Top Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: '#ffffff',
            padding: '6px 20px',
            borderRadius: '9999px',
            border: '1.5px solid rgba(244, 114, 182, 0.4)',
            marginBottom: '18px',
            boxShadow: '0 4px 14px rgba(236,72,153,0.12)',
          }}
        >
          <Sparkles size={16} color="#ec4899" />
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.85rem',
              fontWeight: 700,
              color: '#be185d',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            {CONFIG.finalSurprise.badge}
          </span>
          <Heart size={14} color="#f43f5e" fill="#f43f5e" />
        </div>

        {/* Section Heading */}
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
            color: '#3d1d2e',
            marginBottom: '10px',
          }}
        >
          One Last Birthday Surprise
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-heading)',
            color: '#6b5b73',
            fontSize: '1.1rem',
            maxWidth: '560px',
            margin: '0 auto 24px auto',
            lineHeight: 1.5,
          }}
        >
          {!candlesBlown
            ? CONFIG.finalSurprise.cakePrompt
            : CONFIG.finalSurprise.cakeSuccess}
        </p>

        {/* Interactive Virtual Birthday Cake */}
        <div
          onClick={handleBlowCandles}
          style={{
            display: 'inline-block',
            cursor: !candlesBlown ? 'pointer' : 'default',
            margin: '0 auto 36px auto',
            position: 'relative',
            userSelect: 'none',
            transition: 'transform 0.3s ease',
          }}
        >
          {/* Cake Illustration */}
          <div
            style={{
              width: '240px',
              height: '175px',
              position: 'relative',
              margin: '0 auto',
            }}
          >
            {/* 3 Candles */}
            <div
              style={{
                position: 'absolute',
                top: '0',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '28px',
                zIndex: 5,
              }}
            >
              {[1, 2, 3].map((candle) => (
                <div
                  key={candle}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  {/* Flame or Rising Smoke */}
                  {!candlesBlown ? (
                    <div className="candle-flame" />
                  ) : (
                    <div className="candle-smoke" />
                  )}

                  {/* Candle Wick */}
                  <div
                    style={{
                      width: '2px',
                      height: '6px',
                      backgroundColor: '#374151',
                    }}
                  />

                  {/* Candle Body */}
                  <div
                    style={{
                      width: '12px',
                      height: '38px',
                      borderRadius: '4px',
                      background:
                        candle % 2 === 0
                          ? 'repeating-linear-gradient(45deg, #f472b6, #f472b6 6px, #ffffff 6px, #ffffff 12px)'
                          : 'repeating-linear-gradient(45deg, #c084fc, #c084fc 6px, #ffffff 6px, #ffffff 12px)',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Cake Top Layer */}
            <div
              style={{
                position: 'absolute',
                top: '46px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '165px',
                height: '46px',
                background: 'linear-gradient(180deg, #fce7f3 0%, #fbcfe8 100%)',
                borderRadius: '18px 18px 10px 10px',
                border: '2px solid #f472b6',
                boxShadow: '0 4px 10px rgba(0,0,0,0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontSize: '1.1rem' }}>🍓 🌸 🍓</span>
            </div>

            {/* Cake Bottom Layer */}
            <div
              style={{
                position: 'absolute',
                top: '84px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '220px',
                height: '65px',
                background: 'linear-gradient(180deg, #fff1f2 0%, #fecdd3 100%)',
                borderRadius: '16px 16px 14px 14px',
                border: '2px solid #fb7185',
                boxShadow: '0 8px 24px rgba(236,72,153,0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                padding: '0 16px',
              }}
            >
              <span style={{ fontSize: '1.1rem' }}>💖</span>
              <span
                style={{
                  fontFamily: 'var(--font-cursive-fancy)',
                  fontSize: '1.5rem',
                  color: '#be185d',
                  fontWeight: 700,
                }}
              >
                Mannu ❤️
              </span>
              <span style={{ fontSize: '1.1rem' }}>💖</span>
            </div>

            {/* Cake Plate */}
            <div
              style={{
                position: 'absolute',
                top: '144px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '250px',
                height: '14px',
                background: '#ffffff',
                borderRadius: '9999px',
                boxShadow: '0 6px 16px rgba(0,0,0,0.1)',
                border: '1.5px solid #fbcfe8',
              }}
            />
          </div>

          {!candlesBlown && (
            <div
              style={{
                marginTop: '10px',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.92rem',
                color: '#ec4899',
                fontWeight: 700,
                animation: 'pulseText 1.5s infinite alternate',
              }}
            >
              ✨ Click the cake to blow out candles! ✨
            </div>
          )}
        </div>

        {/* SECTION 2: Birthday Message & Promise Card - Revealed ONLY AFTER blowing the candles */}
        {!candlesBlown ? (
          <div
            onClick={handleBlowCandles}
            style={{
              background: 'rgba(255, 255, 255, 0.85)',
              borderRadius: '24px',
              padding: '36px 24px',
              border: '2px dashed #f472b6',
              boxShadow: '0 10px 30px rgba(236, 72, 153, 0.08)',
              maxWidth: '560px',
              margin: '0 auto',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🎁 ✨</div>
            <h4
              style={{
                fontFamily: 'var(--font-cursive-fancy)',
                fontSize: '2.2rem',
                color: '#be185d',
                marginBottom: '8px',
                lineHeight: 1.2,
              }}
            >
              Secret Birthday Wish Locked 🔒
            </h4>
            <p
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.02rem',
                color: '#6b5b73',
                margin: 0,
                lineHeight: 1.5,
              }}
            >
              Blow out the candles on the cake above to unlock your special birthday message & promise! 🎂🕯️
            </p>
          </div>
        ) : (
          <div
            id="revealed-birthday-message"
            style={{
              background: '#ffffff',
              borderRadius: '28px',
              padding: '42px 32px',
              border: '2px solid #fbcfe8',
              boxShadow: '0 20px 50px rgba(236, 72, 153, 0.16)',
              position: 'relative',
              animation: 'fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
              textAlign: 'center',
            }}
          >
            {/* Decorative Icons: Party Popper, Birthday Cake, Champagne Glasses */}
            <div
              style={{
                fontSize: '2.8rem',
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
              }}
            >
              <span>🎉</span>
              <span>🎂</span>
              <span>🥂</span>
            </div>

            {/* Main Heading in Elegant Rose-Pink Cursive Typography */}
            <h3
              style={{
                fontFamily: 'var(--font-cursive-fancy)',
                fontSize: 'clamp(2.6rem, 6vw, 3.8rem)',
                color: '#be185d',
                marginBottom: '16px',
                lineHeight: 1.15,
              }}
            >
              {CONFIG.finalSurprise.mainHeading}
            </h3>

            {/* Description */}
            <p
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.14rem',
                color: '#4a2839',
                maxWidth: '680px',
                margin: '0 auto 22px auto',
                lineHeight: 1.75,
              }}
            >
              "{CONFIG.finalSurprise.description}"
            </p>

            {/* Romantic Quote in Cursive Font */}
            <div
              style={{
                fontFamily: 'var(--font-handwriting)',
                fontSize: '1.65rem',
                color: '#ec4899',
                maxWidth: '640px',
                margin: '0 auto 30px auto',
                lineHeight: 1.45,
              }}
            >
              "{CONFIG.finalSurprise.romanticQuote}"
            </div>

            {/* Promise Card with Light Pink Background & Thin Pink Border */}
            <div
              style={{
                background: 'linear-gradient(135deg, #fff0f6 0%, #fdf2f8 100%)',
                border: '1.5px solid #f472b6',
                borderRadius: '22px',
                padding: '24px 28px',
                maxWidth: '640px',
                margin: '0 auto 24px auto',
                boxShadow: '0 8px 24px rgba(236, 72, 153, 0.1)',
                textAlign: 'center',
              }}
            >
              {/* Promise Card Title */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: '#be185d',
                  marginBottom: '10px',
                }}
              >
                <Heart size={18} fill="#f43f5e" color="#f43f5e" />
                <span>{CONFIG.finalSurprise.promiseTitle}</span>
                <Heart size={18} fill="#f43f5e" color="#f43f5e" />
              </div>

              {/* Promise Message */}
              <p
                style={{
                  fontFamily: 'var(--font-handwriting)',
                  fontSize: '1.45rem',
                  color: '#3d1d2e',
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                "{CONFIG.finalSurprise.promiseMessage}"
              </p>
            </div>

            {/* Interactive Promise Buttons / Sealed State */}
            {!acceptedPromise ? (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '16px',
                  flexWrap: 'wrap',
                  marginTop: '16px',
                }}
              >
                <button
                  onClick={handlePromiseClick}
                  className="btn-glowing-pink"
                  style={{ padding: '14px 30px', fontSize: '1.05rem' }}
                >
                  <Heart size={18} fill="#ffffff" />
                  <span>{CONFIG.finalSurprise.primaryBtn}</span>
                </button>

                <button
                  onClick={handlePromiseClick}
                  className="btn-secondary-soft"
                  style={{ padding: '14px 28px', fontSize: '1.05rem' }}
                >
                  <span>{CONFIG.finalSurprise.secondaryBtn}</span>
                </button>
              </div>
            ) : (
              <div
                style={{
                  animation: 'fadeIn 0.4s ease',
                  background: '#ffffff',
                  borderRadius: '9999px',
                  padding: '12px 28px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  border: '1.5px solid #ec4899',
                  boxShadow: '0 6px 18px rgba(236, 72, 153, 0.2)',
                  marginTop: '12px',
                }}
              >
                <div
                  style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    background: '#10b981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                  }}
                >
                  <Check size={16} />
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    color: '#be185d',
                    fontSize: '0.98rem',
                  }}
                >
                  Promise Accepted & Sealed Forever! 💖
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      <style>{`
        @keyframes pulseText {
          0% { transform: scale(1); opacity: 0.85; }
          100% { transform: scale(1.04); opacity: 1; }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
