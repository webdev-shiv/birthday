// Web Audio Synthesizer for romantic acoustic music box & custom MP3 loader
class RomanticMusicPlayer {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.isMuted = false;
    this.volume = 0.5;
    this.audioElement = null;
    this.timerId = null;
    this.masterGain = null;
  }

  initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.volume, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play a gentle bell / music box note
  playBellNote(frequency, time, duration = 1.6, velocity = 0.25) {
    if (!this.ctx || this.isMuted) return;

    try {
      const osc = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const noteGain = this.ctx.createGain();

      // Soft sine waves with gentle harmonic
      osc.type = 'sine';
      osc.frequency.setValueAtTime(frequency, time);

      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(frequency * 2, time);

      // Bell envelope: fast attack, gentle decay
      noteGain.gain.setValueAtTime(0.001, time);
      noteGain.gain.linearRampToValueAtTime(velocity * (this.isMuted ? 0 : this.volume), time + 0.02);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

      osc.connect(noteGain);
      osc2.connect(noteGain);
      noteGain.connect(this.masterGain);

      osc.start(time);
      osc2.start(time);
      osc.stop(time + duration);
      osc2.stop(time + duration);
    } catch {
      // safe fallback
    }
  }

  // Romantic acoustic chord progression (Cmaj7 -> G -> Am7 -> Fadd9)
  startSynthMelody() {
    if (this.timerId) return;

    const chords = [
      // Cmaj7 (C4, E4, G4, B4, C5)
      [261.63, 329.63, 392.00, 493.88, 523.25],
      // G (G3, D4, G4, B4, D5)
      [196.00, 293.66, 392.00, 493.88, 587.33],
      // Am7 (A3, E4, A4, C5, E5)
      [220.00, 329.63, 440.00, 523.25, 659.25],
      // Fadd9 (F3, C4, F4, A4, G4)
      [174.61, 261.63, 349.23, 440.00, 392.00]
    ];

    let chordIndex = 0;
    const playChordStep = () => {
      if (!this.isPlaying) return;
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const currentChord = chords[chordIndex];

      // Arpeggiate chord notes like a sweet music box
      currentChord.forEach((freq, idx) => {
        const noteTime = now + (idx * 0.35);
        this.playBellNote(freq, noteTime, 2.2, 0.22);
      });

      // Add a tender high twinkle note
      if (Math.random() > 0.3) {
        const twinkleFreq = currentChord[Math.floor(Math.random() * currentChord.length)] * 2;
        this.playBellNote(twinkleFreq, now + 1.2, 1.4, 0.15);
      }

      chordIndex = (chordIndex + 1) % chords.length;
      this.timerId = setTimeout(playChordStep, 2400);
    };

    playChordStep();
  }

  playChimeSound() {
    this.initContext();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const chimeFreqs = [523.25, 659.25, 783.99, 1046.50];
    chimeFreqs.forEach((freq, i) => {
      this.playBellNote(freq, now + i * 0.08, 1.8, 0.3);
    });
  }

  play(customUrl = '') {
    this.initContext();
    this.isPlaying = true;

    const targetUrl = customUrl || '/song.mp3';

    const tryPlayAudio = (srcUrl) => {
      if (!this.audioElement) {
        this.audioElement = new Audio();
        this.audioElement.loop = true;
        this.audioElement.preload = 'auto';

        // Additional safeguard for guaranteed infinite looping across all browsers
        this.audioElement.addEventListener('ended', () => {
          if (this.isPlaying) {
            this.audioElement.currentTime = 0;
            this.audioElement.play().catch(() => {});
          }
        });
      }

      if (this.audioElement.src !== window.location.origin + srcUrl && !this.audioElement.src.endsWith(srcUrl)) {
        this.audioElement.src = srcUrl;
      }
      this.audioElement.loop = true;
      this.audioElement.volume = this.isMuted ? 0 : this.volume;

      const playPromise = this.audioElement.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn(`Audio playback attempt failed for ${srcUrl}:`, err);
          if (srcUrl.includes('song.mp3')) {
            // Try /song.mp4 container fallback
            tryPlayAudio('/song.mp4');
          } else {
            // Fallback to synthesized melody if audio file cannot be decoded
            this.startSynthMelody();
          }
        });
      }
    };

    tryPlayAudio(targetUrl);
  }

  pause() {
    this.isPlaying = false;
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
    if (this.audioElement) {
      this.audioElement.pause();
    }
  }

  toggle(customUrl = '') {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.play(customUrl);
      return true;
    }
  }

  setMute(isMuted) {
    this.isMuted = isMuted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.volume, this.ctx.currentTime);
    }
    if (this.audioElement) {
      this.audioElement.volume = this.isMuted ? 0 : this.volume;
    }
    return this.isMuted;
  }
}

export const musicPlayer = new RomanticMusicPlayer();
