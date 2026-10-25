import React, { useState } from 'react';
import { Heart, Sparkles, MessageCircleHeart, X } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CONFIG } from '../config';

export default function WishesSection() {
  const [likedWishes, setLikedWishes] = useState({});
  const [activeRevealedId, setActiveRevealedId] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const handleCardClick = (wish) => {
    // 1. Update wish counter
    setLikedWishes((prev) => ({
      ...prev,
      [wish.id]: (prev[wish.id] || 0) + 1,
    }));

    // 2. Reveal interactive message
    setActiveRevealedId(wish.id);
    setToastMessage(wish.interactiveMessage);

    // 3. Subtle romantic heart confetti burst
    confetti({
      particleCount: 28,
      spread: 55,
      origin: { y: 0.65 },
      colors: ['#ec4899', '#f43f5e', '#fb7185', '#fbcfe8', '#ffffff'],
      shapes: ['circle'],
      scalar: 0.9,
    });

    // Auto-dismiss toast after 4s
    setTimeout(() => {
      setToastMessage((current) => (current === wish.interactiveMessage ? null : current));
    }, 4000);
  };

  return (
    <section
      id="section-wishes"
      style={{
        padding: '80px 20px',
        maxWidth: '1140px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2,
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255, 255, 255, 0.85)',
            padding: '6px 18px',
            borderRadius: '9999px',
            border: '1px solid rgba(244, 114, 182, 0.35)',
            marginBottom: '14px',
            boxShadow: '0 4px 14px rgba(236,72,153,0.1)',
          }}
        >
          <Sparkles size={15} color="#ec4899" />
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
            Heartfelt Blessings
          </span>
          <Heart size={14} color="#f43f5e" fill="#f43f5e" />
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
            color: '#3d1d2e',
            marginBottom: '12px',
          }}
        >
          {CONFIG.wishesSection?.heading || "Birthday Wishes for My Mannu"}
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-heading)',
            color: '#6b5b73',
            fontSize: '1.1rem',
            maxWidth: '620px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}
        >
          {CONFIG.wishesSection?.subtitle || "Meri taraf se tumhare liye chaar chhoti si wishes, kyunki tum meri duniya ka sabse beautiful hissa ho."}
        </p>
      </div>

      {/* 4 Interactive Wish Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px',
        }}
      >
        {CONFIG.birthdayWishes.map((w, index) => {
          const likes = likedWishes[w.id] || 0;
          const isRevealed = activeRevealedId === w.id;

          return (
            <div
              key={w.id}
              onClick={() => handleCardClick(w)}
              className="glass-panel"
              style={{
                padding: '28px 24px',
                borderRadius: '24px',
                cursor: 'pointer',
                transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                background: isRevealed
                  ? 'linear-gradient(145deg, #ffffff 0%, #fff1f5 100%)'
                  : 'rgba(255, 255, 255, 0.8)',
                border: isRevealed
                  ? '2px solid rgba(244, 114, 182, 0.7)'
                  : '1.5px solid rgba(244, 114, 182, 0.25)',
                boxShadow: isRevealed ? 'var(--shadow-hover)' : 'var(--shadow-dreamy)',
                animation: `floatWish 4s ease-in-out infinite alternate`,
                animationDelay: `${index * 0.35}s`,
              }}
            >
              <div>
                {/* Emoji and Tag Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '16px',
                  }}
                >
                  <span style={{ fontSize: '2.4rem' }}>{w.emoji}</span>
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      color: '#ec4899',
                      background: 'rgba(251, 207, 232, 0.45)',
                      padding: '4px 12px',
                      borderRadius: '9999px',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {w.tag}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.3rem',
                    color: '#3d1d2e',
                    marginBottom: '12px',
                    lineHeight: 1.3,
                  }}
                >
                  {w.title}
                </h3>

                {/* Exact Content */}
                <p
                  style={{
                    color: '#4a2839',
                    fontSize: '0.96rem',
                    lineHeight: 1.68,
                  }}
                >
                  "{w.wish}"
                </p>

                {/* Card Reveal: Interactive Message */}
                {isRevealed && w.interactiveMessage && (
                  <div
                    style={{
                      marginTop: '16px',
                      padding: '12px 14px',
                      background: 'linear-gradient(135deg, #fff0f6 0%, #fce7f3 100%)',
                      border: '1.5px solid #f472b6',
                      borderRadius: '16px',
                      animation: 'fadeInUp 0.3s ease',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: '#be185d',
                        fontWeight: 700,
                        fontSize: '0.8rem',
                        fontFamily: 'var(--font-heading)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        marginBottom: '4px',
                      }}
                    >
                      <MessageCircleHeart size={14} color="#ec4899" />
                      <span>Dil Se Ek Baat</span>
                    </div>
                    <p
                      style={{
                        fontFamily: 'var(--font-handwriting)',
                        fontSize: '1.25rem',
                        color: '#3d1d2e',
                        lineHeight: 1.45,
                        margin: 0,
                      }}
                    >
                      "{w.interactiveMessage}"
                    </p>
                  </div>
                )}
              </div>

              {/* Bottom Interactive Heart Counter */}
              <div
                style={{
                  marginTop: '20px',
                  paddingTop: '14px',
                  borderTop: '1px dashed rgba(244, 114, 182, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.84rem',
                    color: '#8e7d95',
                    fontWeight: 500,
                  }}
                >
                  {isRevealed ? 'Sent with Love ❤️' : 'Tap to receive love ❤️'}
                </span>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: likes > 0 ? '#fce7f3' : 'rgba(0,0,0,0.03)',
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    transition: 'transform 0.2s ease',
                    transform: likes > 0 ? 'scale(1.08)' : 'scale(1)',
                  }}
                >
                  <Heart
                    size={16}
                    color="#ec4899"
                    fill={likes > 0 ? '#ec4899' : 'transparent'}
                  />
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      color: '#be185d',
                    }}
                  >
                    {likes}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating Bottom Toast for Interactive Message */}
      {toastMessage && (
        <div
          style={{
            position: 'fixed',
            bottom: '24px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 100,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(12px)',
            border: '1.5px solid #f472b6',
            borderRadius: '9999px',
            padding: '12px 24px',
            boxShadow: '0 12px 35px rgba(236,72,153,0.25)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            maxWidth: 'min(92vw, 560px)',
            animation: 'fadeInUp 0.3s ease',
          }}
        >
          <Heart size={20} fill="#f43f5e" color="#f43f5e" style={{ flexShrink: 0 }} />
          <span
            style={{
              fontFamily: 'var(--font-handwriting)',
              fontSize: '1.25rem',
              color: '#be185d',
              lineHeight: 1.3,
            }}
          >
            "{toastMessage}"
          </span>
          <button
            onClick={() => setToastMessage(null)}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: '#8e7d95',
              padding: '2px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <X size={16} />
          </button>
        </div>
      )}

      <style>{`
        @keyframes floatWish {
          0% { transform: translateY(0); }
          100% { transform: translateY(-8px); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
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
