import React, { useState } from 'react';
import { Sparkles, Heart, Camera, ChevronLeft, ChevronRight, X, ZoomIn, Image } from 'lucide-react';
import { CONFIG } from '../config';

export default function MemoriesScrapbook() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [failedImages, setFailedImages] = useState({});

  const handleImageError = (id) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  const openLightbox = (memory) => {
    setSelectedPhoto(memory);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const nextPhoto = (e) => {
    e.stopPropagation();
    if (!selectedPhoto) return;
    const currentIndex = CONFIG.memories.findIndex((m) => m.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % CONFIG.memories.length;
    setSelectedPhoto(CONFIG.memories[nextIndex]);
  };

  const prevPhoto = (e) => {
    e.stopPropagation();
    if (!selectedPhoto) return;
    const currentIndex = CONFIG.memories.findIndex((m) => m.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + CONFIG.memories.length) % CONFIG.memories.length;
    setSelectedPhoto(CONFIG.memories[prevIndex]);
  };

  return (
    <section
      id="section-memories"
      style={{
        padding: '80px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2,
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
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
          <Camera size={15} color="#ec4899" />
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
            A Scrapbook of Us
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
          Our Little Memories
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-heading)',
            color: '#6b5b73',
            fontSize: '1.1rem',
            maxWidth: '580px',
            margin: '0 auto',
          }}
        >
          Every moment with you is etched into my heart. Tap any polaroid snapshot to view our memory up close!
        </p>


      </div>

      {/* Scrapbook Polaroid Grid with Tilted Frames */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '36px 28px',
          padding: '10px 0',
        }}
      >
        {CONFIG.memories.map((item, index) => {
          const isFailed = failedImages[item.id];

          return (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              className="polaroid-card"
              style={{
                transform: `rotate(${item.tilt})`,
              }}
            >
              {/* Washi Tape */}
              <div
                className="washi-tape"
                style={{
                  background: item.tapeColor || '#fbcfe8',
                  transform: `translateX(-50%) rotate(${index % 2 === 0 ? '-2deg' : '3deg'})`,
                }}
              />

              {/* Photo Frame */}
              <div className="polaroid-image-frame">
                {!isFailed ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    onError={() => handleImageError(item.id)}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                ) : (
                  /* Aesthetic Illustrated Romantic Placeholder */
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      background: item.fallbackGradient,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      textAlign: 'center',
                      padding: '16px',
                    }}
                  >
                    <span style={{ fontSize: '2.5rem', marginBottom: '8px' }}>{item.sticker}</span>
                    <span
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.2rem',
                        fontWeight: 600,
                        textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                      }}
                    >
                      {item.title}
                    </span>
                    <span
                      style={{
                        fontSize: '0.8rem',
                        opacity: 0.9,
                        marginTop: '4px',
                        background: 'rgba(0,0,0,0.15)',
                        padding: '2px 8px',
                        borderRadius: '9999px',
                      }}
                    >
                      Tap to open
                    </span>
                  </div>
                )}

                {/* Corner Zoom Icon */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '8px',
                    right: '8px',
                    background: 'rgba(255, 255, 255, 0.85)',
                    borderRadius: '50%',
                    width: '28px',
                    height: '28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                  }}
                >
                  <ZoomIn size={14} color="#ec4899" />
                </div>
              </div>

              {/* Handwritten Polaroid Caption */}
              <div style={{ marginTop: '14px', textAlign: 'center' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 700,
                    fontSize: '1.25rem',
                    color: '#3d1d2e',
                    lineHeight: 1.25,
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-handwriting)',
                    fontSize: '1.38rem',
                    color: '#6b5b73',
                    marginTop: '6px',
                    lineHeight: 1.45,
                    padding: '0 4px',
                  }}
                >
                  "{item.caption}"
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: '#ec4899',
                    marginTop: '8px',
                    letterSpacing: '0.03em',
                  }}
                >
                  📅 {item.date} • 📍 {item.location}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          onClick={closeLightbox}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 60,
            backgroundColor: 'rgba(25, 12, 22, 0.85)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            animation: 'fadeIn 0.25s ease',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '680px',
              width: '100%',
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              padding: '18px 18px 24px 18px',
              boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
            }}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              style={{
                position: 'absolute',
                top: '-16px',
                right: '-16px',
                background: '#ffffff',
                border: 'none',
                borderRadius: '50%',
                width: '38px',
                height: '38px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
                color: '#be185d',
                zIndex: 10,
              }}
            >
              <X size={20} />
            </button>

            {/* Lightbox Large Image Display */}
            <div
              style={{
                width: '100%',
                maxHeight: '60vh',
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundColor: '#f3f4f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {!failedImages[selectedPhoto.id] ? (
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    maxHeight: '60vh',
                    objectFit: 'contain',
                  }}
                />
              ) : (
                <div
                  style={{
                    width: '100%',
                    height: '360px',
                    background: selectedPhoto.fallbackGradient,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    padding: '24px',
                    textAlign: 'center',
                  }}
                >
                  <span style={{ fontSize: '4rem', marginBottom: '12px' }}>{selectedPhoto.sticker}</span>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem' }}>{selectedPhoto.title}</h3>
                  <p style={{ marginTop: '8px', maxWidth: '400px', fontSize: '1.05rem', opacity: 0.95 }}>
                    "{selectedPhoto.caption}"
                  </p>
                </div>
              )}
            </div>

            {/* Captions and Navigation Controls */}
            <div
              style={{
                marginTop: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
              }}
            >
              <div>
                <h4
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.4rem',
                    color: '#3d1d2e',
                  }}
                >
                  {selectedPhoto.title}
                </h4>
                <p
                  style={{
                    fontFamily: 'var(--font-handwriting)',
                    color: '#6b5b73',
                    fontSize: '1.45rem',
                    margin: '4px 0 8px 0',
                    lineHeight: 1.4,
                  }}
                >
                  "{selectedPhoto.caption}"
                </p>
                <span
                  style={{
                    fontSize: '0.85rem',
                    color: '#ec4899',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                  }}
                >
                  {selectedPhoto.date} • {selectedPhoto.location}
                </span>
              </div>

              {/* Prev / Next Buttons */}
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={prevPhoto}
                  className="btn-secondary-soft"
                  style={{ padding: '8px 14px' }}
                >
                  <ChevronLeft size={16} />
                  <span>Prev</span>
                </button>
                <button
                  onClick={nextPhoto}
                  className="btn-secondary-soft"
                  style={{ padding: '8px 14px' }}
                >
                  <span>Next</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
