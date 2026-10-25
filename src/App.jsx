import React, { useState } from 'react';
import FloatingParticles from './components/FloatingParticles';
import AudioController from './components/AudioController';
import LandingHero from './components/LandingHero';
import OrigamiPaperPlane from './components/OrigamiPaperPlane';
import FoldedLetterModal from './components/FoldedLetterModal';
import ReasonsSection from './components/ReasonsSection';
import MemoriesScrapbook from './components/MemoriesScrapbook';
import WishesSection from './components/WishesSection';
import FinalSurpriseModal from './components/FinalSurpriseModal';
import StartOverlay from './components/StartOverlay';
import { musicPlayer } from './utils/audio';
import { CONFIG } from './config';
import { Heart, ArrowUp } from 'lucide-react';

export default function App() {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [isPlaneFlying, setIsPlaneFlying] = useState(false);
  const [isLetterOpen, setIsLetterOpen] = useState(false);

  // Triggered when entering through the theme-matched Start button
  const handleStartWebsite = () => {
    if (!isPlayingMusic) {
      const playing = musicPlayer.toggle(CONFIG.audio.customMp3Url);
      setIsPlayingMusic(playing);
    }
  };

  // Toggle romantic background music
  const handleToggleMusic = () => {
    const playing = musicPlayer.toggle(CONFIG.audio.customMp3Url);
    setIsPlayingMusic(playing);
  };

  // Trigger paper plane from landing page
  const handleStartSurprise = () => {
    setIsPlaneFlying(true);

    // Auto-start soft melody on user interaction if not playing yet
    if (!isPlayingMusic) {
      const playing = musicPlayer.toggle(CONFIG.audio.customMp3Url);
      setIsPlayingMusic(playing);
    }
  };

  // Called when paper plane arrives and is clicked
  const handleUnfoldLetter = () => {
    setIsPlaneFlying(false);
    setIsLetterOpen(true);
  };

  // Smooth scroll to the journey sections
  const scrollToJourney = () => {
    const el = document.getElementById('section-reasons');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Theme-Matched Cinematic Start Screen */}
      <StartOverlay onStart={handleStartWebsite} />

      {/* Background Floating Glow Orbs */}
      <div className="bg-glow-orb bg-orb-1" />
      <div className="bg-glow-orb bg-orb-2" />
      <div className="bg-glow-orb bg-orb-3" />

      {/* Floating Particles (Hearts, Stars, Petals) */}
      <FloatingParticles count={26} />

      {/* Audio Controller */}
      <AudioController
        isPlaying={isPlayingMusic}
        onTogglePlay={handleToggleMusic}
      />

      {/* 1. Landing Hero Page */}
      <LandingHero
        onStartSurprise={handleStartSurprise}
        isPlaneFlying={isPlaneFlying}
      />

      {/* 2. Origami Paper Plane Arrival */}
      <OrigamiPaperPlane
        isTriggered={isPlaneFlying}
        onUnfoldLetter={handleUnfoldLetter}
      />

      {/* 3. Realistic 3D Letter Opening Modal */}
      <FoldedLetterModal
        isOpen={isLetterOpen}
        onClose={() => setIsLetterOpen(false)}
        onContinueJourney={scrollToJourney}
      />

      {/* 4. Interactive Birthday Journey Sections */}
      <main>
        {/* Reasons Why You're Special */}
        <ReasonsSection />

        {/* Our Little Memories Scrapbook */}
        <MemoriesScrapbook />

        {/* Birthday Wishes Cards */}
        <WishesSection />

        {/* One Last Surprise (Cake & Candles) */}
        <FinalSurpriseModal />
      </main>

      {/* Romantic Footer */}
      <footer
        style={{
          textAlign: 'center',
          padding: '40px 20px 60px 20px',
          borderTop: '1px solid rgba(244, 114, 182, 0.25)',
          background: 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(8px)',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            fontFamily: 'var(--font-cursive-fancy)',
            fontSize: '2rem',
            color: '#be185d',
            marginBottom: '8px',
          }}
        >
          <span>Created with endless love for Mannu</span>
          <Heart size={20} fill="#f43f5e" color="#f43f5e" />
        </div>

        <p
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '0.95rem',
            color: '#8e7d95',
          }}
        >
          Happy Birthday, my girl. Today and forever yours,{' '}
          <strong style={{ color: '#be185d' }}>Shivam</strong> ❤️
        </p>

        <button
          onClick={scrollToTop}
          title="Back to Top"
          className="btn-secondary-soft"
          style={{ marginTop: '20px', padding: '8px 18px', fontSize: '0.85rem' }}
        >
          <ArrowUp size={14} />
          <span>Back to Top</span>
        </button>
      </footer>
    </div>
  );
}
