import React, { useState } from 'react';
import { Heart, Sparkles, MessageCircleHeart, ChevronDown, ChevronUp } from 'lucide-react';
import { CONFIG } from '../config';

export default function ReasonsSection() {
  const [expandedIds, setExpandedIds] = useState([1, 2, 3, 4]); // expanded by default or toggleable

  const toggleCard = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section
      id="section-reasons"
      style={{
        padding: '80px 20px',
        maxWidth: '1160px',
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
            Dil Ki Baatein
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
          Reasons Why I Love You, Mannu
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
          Itni saari wajah hain tumse pyaar karne ki, ki shayad ek poori zindagi bhi kam pad jaaye.
        </p>
      </div>

      {/* 4 Tall Elegant Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '26px',
        }}
      >
        {CONFIG.reasonsSpecial.map((reason) => {
          const isExpanded = expandedIds.includes(reason.id);

          return (
            <div
              key={reason.id}
              onClick={() => toggleCard(reason.id)}
              className="glass-panel"
              style={{
                padding: '28px 24px',
                borderRadius: '24px',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'rgba(255, 255, 255, 0.85)',
                border: '1.5px solid rgba(244, 114, 182, 0.35)',
                boxShadow: 'var(--shadow-dreamy)',
              }}
            >
              <div>
                {/* Top Badge: Reason Number & Decorative Icon */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '16px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      color: '#be185d',
                      background: '#fce7f3',
                      padding: '4px 12px',
                      borderRadius: '9999px',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {reason.tag}
                  </span>

                  <span style={{ fontSize: '2rem' }}>{reason.icon}</span>
                </div>

                {/* Heading */}
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.35rem',
                    color: '#38202d',
                    marginBottom: '6px',
                    lineHeight: 1.3,
                  }}
                >
                  {reason.title}
                </h3>

                {/* Tagline Badge */}
                {reason.tagline && (
                  <div
                    style={{
                      display: 'inline-block',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: '#ec4899',
                      marginBottom: '10px',
                    }}
                  >
                    🌸 {reason.tagline}
                  </div>
                )}

                {/* Short Description */}
                <p
                  style={{
                    color: '#6b5b73',
                    fontSize: '0.94rem',
                    marginBottom: '14px',
                    lineHeight: 1.5,
                    fontWeight: 500,
                  }}
                >
                  {reason.shortDescription}
                </p>

                {/* Dotted Divider */}
                <div
                  style={{
                    borderTop: '1.5px dashed rgba(244, 114, 182, 0.45)',
                    margin: '14px 0',
                  }}
                />

                {/* Detailed Content */}
                <p
                  style={{
                    fontSize: '0.96rem',
                    color: '#4a2839',
                    lineHeight: 1.68,
                    marginBottom: '16px',
                  }}
                >
                  "{reason.fullDescription}"
                </p>
              </div>

              {/* Handwritten-Style Hinglish Quote */}
              <div
                style={{
                  marginTop: 'auto',
                  paddingTop: '14px',
                  borderTop: '1px solid rgba(244, 114, 182, 0.2)',
                  background: 'rgba(253, 242, 248, 0.5)',
                  padding: '12px',
                  borderRadius: '16px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#be185d',
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    marginBottom: '4px',
                  }}
                >
                  <MessageCircleHeart size={14} color="#ec4899" />
                  <span>Shivam's Heart</span>
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-handwriting)',
                    fontSize: '1.3rem',
                    color: '#be185d',
                    lineHeight: 1.4,
                  }}
                >
                  "{reason.quote}"
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
