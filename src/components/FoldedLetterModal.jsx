import React, { useState, useEffect, useRef } from 'react';
import { Heart, X, Sparkles, FastForward, RotateCcw, ChevronDown } from 'lucide-react';
import { CONFIG } from '../config';

export default function FoldedLetterModal({ isOpen, onClose, onContinueJourney }) {
  const [displayedTextIndex, setDisplayedTextIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const scrollContainerRef = useRef(null);

  const activeLetter = CONFIG.letter || CONFIG.deepLetter;
  const fullText = activeLetter.paragraphs.join("\n\n");

  // Reset & start typing when opened
  useEffect(() => {
    if (isOpen) {
      setDisplayedTextIndex(0);
      setIsTypingComplete(false);
    }
  }, [isOpen]);

  // Smooth typewriter effect
  useEffect(() => {
    if (isOpen && !isTypingComplete) {
      if (displayedTextIndex < fullText.length) {
        const timeout = setTimeout(() => {
          // Type chunks of 3-4 chars for smooth natural reading speed
          const step = Math.min(3, fullText.length - displayedTextIndex);
          setDisplayedTextIndex((prev) => prev + step);

          // Auto-scroll slightly as new words appear
          if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
          }
        }, 16);

        return () => clearTimeout(timeout);
      } else {
        setIsTypingComplete(true);
      }
    }
  }, [isOpen, displayedTextIndex, fullText, isTypingComplete]);

  const handleSkipTyping = () => {
    setDisplayedTextIndex(fullText.length);
    setIsTypingComplete(true);
  };

  const handleReplayTyping = () => {
    setDisplayedTextIndex(0);
    setIsTypingComplete(false);
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 60,
        backgroundColor: 'rgba(45, 20, 38, 0.72)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        overflowY: 'auto',
        animation: 'fadeIn 0.25s ease',
      }}
    >
      {/* Unfolded Cream Textured Romantic Parchment Letter with Paper Texture */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="parchment-letter-card"
        style={{
          width: 'min(94vw, 760px)',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          backgroundImage: 'url(/paper-texture.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#ffffff',
          border: '2px solid rgba(215, 205, 195, 0.8)',
          borderRadius: '24px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.22), 0 0 30px rgba(244, 114, 182, 0.15)',
          position: 'relative',
          animation: 'expandLetter 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
          overflow: 'hidden',
        }}
      >
        {/* Washi Tape Accent */}
        <div className="washi-tape" />

        {/* Letter Header Bar */}
        <div
          style={{
            padding: '24px 28px 14px 28px',
            borderBottom: '1px solid rgba(180, 160, 150, 0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            flexWrap: 'wrap',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.75), rgba(255,255,255,0.35))',
            backdropFilter: 'blur(4px)',
          }}
        >
          <div>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: '#be185d',
                letterSpacing: '0.08em',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <Sparkles size={13} color="#ec4899" />
              A Personal Letter From Shivam
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.45rem',
                color: '#4a2839',
                margin: '2px 0 0 0',
              }}
            >
              {activeLetter.salutation}
            </h2>
          </div>

          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(251, 207, 232, 0.45)',
              padding: '6px 14px',
              borderRadius: '9999px',
              border: '1px solid rgba(244, 114, 182, 0.35)',
              fontSize: '0.82rem',
              fontFamily: 'var(--font-heading)',
              fontWeight: 600,
              color: '#be185d',
            }}
          >
            <Sparkles size={14} color="#ec4899" />
            <span>Only for Mannu ❤️</span>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            title="Close Letter"
            style={{
              background: 'rgba(0, 0, 0, 0.05)',
              border: 'none',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#6b5b73',
              transition: 'all 0.2s ease',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Typewriter Scrollable Body */}
        <div
          ref={scrollContainerRef}
          style={{
            padding: '26px 32px',
            overflowY: 'auto',
            flex: 1,
            fontFamily: 'var(--font-handwriting)',
            fontSize: '1.54rem',
            lineHeight: 1.85,
            color: '#2a1622',
            whiteSpace: 'pre-line',
          }}
        >
          {/* Typed Text */}
          <span>{fullText.slice(0, displayedTextIndex)}</span>

          {/* Blinking Cursor while typing */}
          {!isTypingComplete && <span className="typewriter-cursor" />}

          {/* Signature when complete or fully displayed */}
          {isTypingComplete && (
            <div
              style={{
                marginTop: '36px',
                paddingTop: '20px',
                borderTop: '1px dashed rgba(180, 160, 150, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px',
              }}
            >
              <div>
                <div style={{ fontSize: '1.25rem', color: '#6b5060' }}>
                  {activeLetter.closing}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-cursive-fancy)',
                    fontSize: '2.6rem',
                    color: '#be185d',
                    marginTop: '-4px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <span>{activeLetter.signature}</span>
                  <Heart size={20} fill="#f43f5e" color="#f43f5e" />
                </div>
              </div>

              {/* Wax Stamp Seal at bottom */}
              <div className="wax-seal" style={{ width: '54px', height: '54px', fontSize: '0.95rem' }}>
                <span>M ❤️ S</span>
              </div>
            </div>
          )}
        </div>

        {/* Letter Bottom Controls */}
        <div
          style={{
            padding: '14px 28px',
            background: 'rgba(255, 255, 255, 0.72)',
            backdropFilter: 'blur(8px)',
            borderTop: '1px solid rgba(180, 160, 150, 0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          {/* Speed-up / Replay buttons */}
          <div style={{ display: 'flex', gap: '8px' }}>
            {!isTypingComplete ? (
              <button
                onClick={handleSkipTyping}
                className="btn-secondary-soft"
                style={{ fontSize: '0.85rem', padding: '6px 14px' }}
              >
                <FastForward size={14} />
                <span>Read Instantly</span>
              </button>
            ) : (
              <button
                onClick={handleReplayTyping}
                className="btn-secondary-soft"
                style={{ fontSize: '0.85rem', padding: '6px 14px' }}
              >
                <RotateCcw size={14} />
                <span>Replay Typing</span>
              </button>
            )}
          </div>

          {/* Next Chapter CTA Button */}
          <button
            onClick={() => {
              onClose();
              onContinueJourney();
            }}
            className="btn-glowing-pink"
            style={{
              padding: '10px 24px',
              fontSize: '0.95rem',
            }}
          >
            <span>Continue Our Journey</span>
            <ChevronDown size={16} />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes expandLetter {
          0% {
            transform: scale(0.82) translateY(24px);
            opacity: 0;
          }
          100% {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
