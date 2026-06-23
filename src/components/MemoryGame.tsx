import { useEffect, useRef, useState, useCallback } from 'react';
import { Play, RotateCcw, Trophy, Brain, Volume2, VolumeX } from 'lucide-react';

type Phase = 'idle' | 'watch' | 'input' | 'over';

const HIGH_SCORE_KEY = 'ketha24_neon_memory_high';

// pad config: [hue, audio frequency]
const PADS = [
  { hue: 190, freq: 329.63 }, // cyan  - E4
  { hue: 265, freq: 261.63 }, // violet- C4
  { hue: 217, freq: 392.0 },  // blue  - G4
  { hue: 320, freq: 220.0 },  // pink  - A3
];

const MemoryGame = () => {
  const [phase, setPhase] = useState<Phase>('idle');
  const [active, setActive] = useState<number | null>(null);
  const [round, setRound] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [muted, setMuted] = useState(false);

  const seqRef = useRef<number[]>([]);
  const inputRef = useRef(0);
  const phaseRef = useRef<Phase>('idle');
  const timersRef = useRef<number[]>([]);
  const audioRef = useRef<AudioContext | null>(null);
  const mutedRef = useRef(false);

  useEffect(() => {
    const saved = Number(localStorage.getItem(HIGH_SCORE_KEY) || 0);
    if (!Number.isNaN(saved)) setHighScore(saved);
  }, []);

  useEffect(() => { mutedRef.current = muted; }, [muted]);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach((t) => window.clearTimeout(t));
    timersRef.current = [];
  }, []);

  useEffect(() => () => clearTimers(), [clearTimers]);

  const setPhaseBoth = (p: Phase) => {
    phaseRef.current = p;
    setPhase(p);
  };

  const tone = useCallback((freq: number, duration = 0.22) => {
    if (mutedRef.current) return;
    try {
      if (!audioRef.current) {
        const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioRef.current = new Ctx();
      }
      const ctx = audioRef.current;
      if (ctx.state === 'suspended') ctx.resume();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.0001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      /* audio not available — ignore */
    }
  }, []);

  const flash = useCallback((pad: number, duration: number) => {
    setActive(pad);
    tone(PADS[pad].freq, duration / 1000);
    const t = window.setTimeout(() => setActive(null), duration);
    timersRef.current.push(t);
  }, [tone]);

  const playSequence = useCallback((seq: number[]) => {
    setPhaseBoth('watch');
    inputRef.current = 0;
    // Speed ramps up as the sequence grows.
    const lit = Math.max(280, 600 - seq.length * 24);
    const gap = Math.max(140, 280 - seq.length * 10);
    const step = lit + gap;

    seq.forEach((pad, i) => {
      const t = window.setTimeout(() => flash(pad, lit), 600 + i * step);
      timersRef.current.push(t);
    });
    const done = window.setTimeout(() => setPhaseBoth('input'), 600 + seq.length * step);
    timersRef.current.push(done);
  }, [flash]);

  const nextRound = useCallback(() => {
    const pad = Math.floor(Math.random() * 4);
    seqRef.current = [...seqRef.current, pad];
    setRound(seqRef.current.length);
    playSequence(seqRef.current);
  }, [playSequence]);

  const startGame = useCallback(() => {
    clearTimers();
    seqRef.current = [];
    inputRef.current = 0;
    setRound(0);
    nextRound();
  }, [clearTimers, nextRound]);

  const endGame = useCallback(() => {
    setPhaseBoth('over');
    // Error buzz
    tone(110, 0.4);
    setHighScore((prev) => {
      const reached = seqRef.current.length - 1; // last completed round
      const next = Math.max(prev, reached);
      localStorage.setItem(HIGH_SCORE_KEY, String(next));
      return next;
    });
  }, [tone]);

  const handlePad = useCallback((pad: number) => {
    if (phaseRef.current !== 'input') return;
    flash(pad, 220);

    if (seqRef.current[inputRef.current] === pad) {
      inputRef.current += 1;
      if (inputRef.current === seqRef.current.length) {
        // Completed this round — advance after a short beat.
        setPhaseBoth('watch');
        const t = window.setTimeout(() => nextRound(), 700);
        timersRef.current.push(t);
      }
    } else {
      endGame();
    }
  }, [flash, nextRound, endGame]);

  const completedScore = Math.max(0, round - (phase === 'over' ? 1 : 0));

  return (
    <div className="relative w-full">
      {/* HUD */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <Brain className="w-4 h-4 text-neon-violet" />
          <span className="font-display">Neon Memory</span>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <span className="font-display tabular-nums">
            <span className="text-muted-foreground">Round </span>
            <span className="text-neon-cyan font-semibold">{phase === 'idle' ? 0 : round}</span>
          </span>
          <span className="flex items-center gap-1 font-display tabular-nums">
            <Trophy className="w-3.5 h-3.5 text-neon-violet" />
            <span className="text-foreground/80 font-semibold">{highScore}</span>
          </span>
          <button
            onClick={() => setMuted((m) => !m)}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label={muted ? 'Unmute' : 'Mute'}
          >
            {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Board */}
      <div className="neon-border relative aspect-[4/5] sm:aspect-square w-full rounded-2xl overflow-hidden bg-card/40 backdrop-blur-xl select-none p-3 sm:p-4">
        <div className="grid grid-cols-2 grid-rows-2 gap-3 sm:gap-4 w-full h-full">
          {PADS.map((pad, i) => {
            const isActive = active === i;
            return (
              <button
                key={i}
                onClick={() => handlePad(i)}
                disabled={phase !== 'input'}
                aria-label={`Pad ${i + 1}`}
                className="rounded-xl transition-all duration-150 disabled:cursor-default"
                style={{
                  background: isActive
                    ? `hsl(${pad.hue} 100% 60%)`
                    : `hsl(${pad.hue} 70% 50% / 0.18)`,
                  boxShadow: isActive
                    ? `0 0 36px hsl(${pad.hue} 100% 60% / 0.9), inset 0 0 24px hsl(${pad.hue} 100% 75% / 0.6)`
                    : `inset 0 0 0 1px hsl(${pad.hue} 100% 60% / 0.35)`,
                  transform: isActive ? 'scale(0.97)' : 'scale(1)',
                }}
              />
            );
          })}
        </div>

        {/* Center status pill while playing */}
        {(phase === 'watch' || phase === 'input') && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="px-4 py-1.5 rounded-full glass-strong text-xs sm:text-sm font-display font-medium">
              {phase === 'watch' ? 'Watch…' : 'Your turn'}
            </span>
          </div>
        )}

        {/* Idle overlay */}
        {phase === 'idle' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-background/60 backdrop-blur-[2px] text-center px-6">
            <div className="space-y-1.5">
              <h3 className="text-2xl font-bold font-display gradient-text">Neon Memory</h3>
              <p className="text-sm text-muted-foreground max-w-xs">
                Watch the sequence light up, then repeat it. Each round adds one more.
              </p>
            </div>
            <button
              onClick={startGame}
              className="group flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover-glow transition-all"
            >
              <Play className="w-5 h-5 fill-current" />
              Play
            </button>
          </div>
        )}

        {/* Game over overlay */}
        {phase === 'over' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-background/70 backdrop-blur-[2px] text-center px-6">
            <h3 className="text-xl font-bold font-display text-neon-pink">Sequence Broken</h3>
            <div className="flex items-center gap-6">
              <div>
                <div className="text-3xl font-bold font-display gradient-text tabular-nums">{completedScore}</div>
                <div className="text-xs text-muted-foreground">Rounds</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-display text-neon-violet tabular-nums">{highScore}</div>
                <div className="text-xs text-muted-foreground">Best</div>
              </div>
            </div>
            {completedScore > 0 && completedScore >= highScore && (
              <span className="text-xs px-3 py-1 rounded-full bg-neon-violet/15 text-neon-violet font-medium">
                ✨ New best!
              </span>
            )}
            <button
              onClick={startGame}
              className="group flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover-glow transition-all"
            >
              <RotateCcw className="w-4 h-4 group-hover:-rotate-180 transition-transform duration-500" />
              Play Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MemoryGame;
