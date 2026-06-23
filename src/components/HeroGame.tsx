import { useEffect, useRef, useState, useCallback } from 'react';
import { Play, RotateCcw, Trophy, Gamepad2 } from 'lucide-react';

type GameState = 'idle' | 'playing' | 'over';

interface Entity {
  x: number;
  y: number;
  size: number;
  speed: number;
  type: 'orb' | 'shard';
  hue: number;
  spin: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  hue: number;
}

const HIGH_SCORE_KEY = 'ketha24_neon_runner_high';

const HeroGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  const [state, setState] = useState<GameState>('idle');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // Mutable game data kept in refs so the rAF loop never goes stale.
  const stateRef = useRef<GameState>('idle');
  const scoreRef = useRef(0);
  const entitiesRef = useRef<Entity[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const playerRef = useRef({ x: 0, targetX: 0 });
  const dimsRef = useRef({ w: 0, h: 0, dpr: 1 });
  const spawnTimerRef = useRef(0);
  const elapsedRef = useRef(0);
  const rafRef = useRef<number>(0);
  const lastTsRef = useRef<number>(0);

  useEffect(() => {
    const saved = Number(localStorage.getItem(HIGH_SCORE_KEY) || 0);
    if (!Number.isNaN(saved)) setHighScore(saved);
  }, []);

  const resetGame = useCallback(() => {
    entitiesRef.current = [];
    particlesRef.current = [];
    spawnTimerRef.current = 0;
    elapsedRef.current = 0;
    scoreRef.current = 0;
    setScore(0);
    const { w } = dimsRef.current;
    playerRef.current = { x: w / 2, targetX: w / 2 };
  }, []);

  const startGame = useCallback(() => {
    resetGame();
    stateRef.current = 'playing';
    setState('playing');
  }, [resetGame]);

  const endGame = useCallback(() => {
    stateRef.current = 'over';
    setState('over');
    setHighScore((prev) => {
      const next = Math.max(prev, scoreRef.current);
      localStorage.setItem(HIGH_SCORE_KEY, String(next));
      return next;
    });
  }, []);

  // Pointer / keyboard controls
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const movePointer = (clientX: number) => {
      const rect = canvas.getBoundingClientRect();
      playerRef.current.targetX = Math.max(0, Math.min(rect.width, clientX - rect.left));
    };

    const onMouse = (e: MouseEvent) => movePointer(e.clientX);
    const onTouch = (e: TouchEvent) => {
      if (e.touches[0]) {
        movePointer(e.touches[0].clientX);
        if (stateRef.current === 'playing') e.preventDefault();
      }
    };
    const onKey = (e: KeyboardEvent) => {
      const step = 40;
      if (e.key === 'ArrowLeft') playerRef.current.targetX -= step;
      if (e.key === 'ArrowRight') playerRef.current.targetX += step;
      const { w } = dimsRef.current;
      playerRef.current.targetX = Math.max(0, Math.min(w, playerRef.current.targetX));
    };

    canvas.addEventListener('mousemove', onMouse);
    canvas.addEventListener('touchmove', onTouch, { passive: false });
    canvas.addEventListener('touchstart', onTouch, { passive: false });
    window.addEventListener('keydown', onKey);
    return () => {
      canvas.removeEventListener('mousemove', onMouse);
      canvas.removeEventListener('touchmove', onTouch);
      canvas.removeEventListener('touchstart', onTouch);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  // Main render + game loop
  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = wrap.clientWidth;
      const h = wrap.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dimsRef.current = { w, h, dpr };
      if (playerRef.current.x === 0) {
        playerRef.current.x = w / 2;
        playerRef.current.targetX = w / 2;
      }
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    const spawn = () => {
      const { w } = dimsRef.current;
      const isOrb = Math.random() > 0.42;
      const level = Math.min(elapsedRef.current / 30, 1);
      entitiesRef.current.push({
        x: 24 + Math.random() * (w - 48),
        y: -20,
        size: isOrb ? 9 : 12,
        speed: (110 + Math.random() * 60 + level * 160) / 1000,
        type: isOrb ? 'orb' : 'shard',
        hue: isOrb ? 188 : 320,
        spin: Math.random() * Math.PI,
      });
    };

    const burst = (x: number, y: number, hue: number, count: number) => {
      for (let i = 0; i < count; i++) {
        const a = Math.random() * Math.PI * 2;
        const sp = 0.04 + Math.random() * 0.18;
        particlesRef.current.push({
          x, y,
          vx: Math.cos(a) * sp,
          vy: Math.sin(a) * sp,
          life: 1,
          hue,
        });
      }
    };

    const loop = (ts: number) => {
      const dt = Math.min(ts - (lastTsRef.current || ts), 50);
      lastTsRef.current = ts;
      const { w, h } = dimsRef.current;
      const playing = stateRef.current === 'playing';

      ctx.clearRect(0, 0, w, h);

      // Backdrop grid drift
      ctx.save();
      ctx.strokeStyle = 'rgba(80, 140, 255, 0.06)';
      ctx.lineWidth = 1;
      const gs = 32;
      const off = (ts / 40) % gs;
      for (let x = 0; x <= w; x += gs) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = -gs + off; y <= h; y += gs) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
      ctx.restore();

      const player = playerRef.current;
      const playerY = h - 38;

      if (playing) {
        elapsedRef.current += dt / 1000;

        // Difficulty-scaled spawning
        spawnTimerRef.current -= dt;
        const level = Math.min(elapsedRef.current / 30, 1);
        const interval = 720 - level * 420;
        if (spawnTimerRef.current <= 0) {
          spawn();
          spawnTimerRef.current = interval;
        }

        // Passive score from survival
        scoreRef.current += dt * 0.004;
      }

      // Smooth player follow
      player.x += (player.targetX - player.x) * Math.min(1, dt * 0.018);

      // Entities
      const survivors: Entity[] = [];
      for (const e of entitiesRef.current) {
        if (playing) e.y += e.speed * dt;
        e.spin += dt * 0.004;

        // Collision with player
        const dx = e.x - player.x;
        const dy = e.y - playerY;
        const hit = Math.hypot(dx, dy) < e.size + 16;

        if (playing && hit) {
          if (e.type === 'orb') {
            scoreRef.current += 5;
            burst(e.x, e.y, 188, 14);
            continue; // consumed
          } else {
            burst(player.x, playerY, 320, 30);
            endGame();
          }
        }

        if (e.y < h + 30) survivors.push(e);
      }
      entitiesRef.current = survivors;

      // Draw entities
      for (const e of entitiesRef.current) {
        ctx.save();
        ctx.translate(e.x, e.y);
        ctx.rotate(e.spin);
        ctx.shadowBlur = 18;
        ctx.shadowColor = `hsl(${e.hue} 100% 60%)`;
        ctx.fillStyle = `hsl(${e.hue} 100% 62%)`;
        if (e.type === 'orb') {
          ctx.beginPath();
          ctx.arc(0, 0, e.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = 'rgba(255,255,255,0.85)';
          ctx.beginPath();
          ctx.arc(0, 0, e.size * 0.4, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.moveTo(0, -e.size);
          ctx.lineTo(e.size, 0);
          ctx.lineTo(0, e.size);
          ctx.lineTo(-e.size, 0);
          ctx.closePath();
          ctx.fill();
        }
        ctx.restore();
      }

      // Particles
      const liveParticles: Particle[] = [];
      for (const p of particlesRef.current) {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.life -= dt * 0.0022;
        if (p.life > 0) {
          ctx.save();
          ctx.globalAlpha = Math.max(0, p.life);
          ctx.fillStyle = `hsl(${p.hue} 100% 65%)`;
          ctx.shadowBlur = 10;
          ctx.shadowColor = `hsl(${p.hue} 100% 65%)`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 2.4, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
          liveParticles.push(p);
        }
      }
      particlesRef.current = liveParticles;

      // Draw player ship
      ctx.save();
      ctx.translate(player.x, playerY);
      ctx.shadowBlur = 22;
      ctx.shadowColor = 'hsl(217 100% 60%)';
      const grad = ctx.createLinearGradient(0, -16, 0, 16);
      grad.addColorStop(0, 'hsl(190 100% 65%)');
      grad.addColorStop(1, 'hsl(265 92% 66%)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.moveTo(0, -18);
      ctx.lineTo(14, 14);
      ctx.lineTo(0, 7);
      ctx.lineTo(-14, 14);
      ctx.closePath();
      ctx.fill();
      // Thruster glow
      if (playing) {
        ctx.globalAlpha = 0.6 + Math.sin(ts / 80) * 0.3;
        ctx.fillStyle = 'hsl(190 100% 70%)';
        ctx.beginPath();
        ctx.moveTo(-5, 9);
        ctx.lineTo(5, 9);
        ctx.lineTo(0, 20 + Math.sin(ts / 60) * 4);
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();

      setScore(Math.floor(scoreRef.current));
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, [endGame]);

  return (
    <div className="relative w-full">
      {/* HUD */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <Gamepad2 className="w-4 h-4 text-neon-cyan" />
          <span className="font-display">Neon Runner</span>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <span className="font-display tabular-nums">
            <span className="text-muted-foreground">Score </span>
            <span className="text-neon-cyan font-semibold">{score}</span>
          </span>
          <span className="flex items-center gap-1 font-display tabular-nums">
            <Trophy className="w-3.5 h-3.5 text-neon-violet" />
            <span className="text-foreground/80 font-semibold">{highScore}</span>
          </span>
        </div>
      </div>

      {/* Game viewport */}
      <div
        ref={wrapRef}
        className="neon-border relative aspect-[4/5] sm:aspect-square w-full rounded-2xl overflow-hidden bg-card/40 backdrop-blur-xl select-none"
      >
        <canvas ref={canvasRef} className="absolute inset-0 touch-none" />

        {/* Idle overlay */}
        {state === 'idle' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-background/55 backdrop-blur-[2px] text-center px-6">
            <div className="space-y-1.5">
              <h3 className="text-2xl font-bold font-display gradient-text">Neon Runner</h3>
              <p className="text-sm text-muted-foreground max-w-xs">
                Pilot the ship — catch the <span className="text-neon-cyan">cyan data orbs</span>,
                dodge the <span className="text-neon-pink">pink shards</span>.
              </p>
            </div>
            <button
              onClick={startGame}
              className="group flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover-glow transition-all"
            >
              <Play className="w-5 h-5 fill-current" />
              Play
            </button>
            <p className="text-xs text-muted-foreground/70">
              Move with mouse, touch, or ← → keys
            </p>
          </div>
        )}

        {/* Game over overlay */}
        {state === 'over' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-background/65 backdrop-blur-[2px] text-center px-6">
            <h3 className="text-xl font-bold font-display text-neon-pink">Game Over</h3>
            <div className="flex items-center gap-6">
              <div>
                <div className="text-3xl font-bold font-display gradient-text tabular-nums">{score}</div>
                <div className="text-xs text-muted-foreground">Score</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-display text-neon-violet tabular-nums">{highScore}</div>
                <div className="text-xs text-muted-foreground">Best</div>
              </div>
            </div>
            {score > 0 && score >= highScore && (
              <span className="text-xs px-3 py-1 rounded-full bg-neon-violet/15 text-neon-violet font-medium">
                ✨ New high score!
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

export default HeroGame;
