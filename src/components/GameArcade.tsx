import { useState } from 'react';
import { Gamepad2, Brain } from 'lucide-react';
import HeroGame from './HeroGame';
import MemoryGame from './MemoryGame';

type GameId = 'runner' | 'memory';

const games: { id: GameId; label: string; icon: typeof Gamepad2 }[] = [
  { id: 'runner', label: 'Neon Runner', icon: Gamepad2 },
  { id: 'memory', label: 'Neon Memory', icon: Brain },
];

const GameArcade = () => {
  const [game, setGame] = useState<GameId>('runner');

  return (
    <div className="w-full">
      {/* Game switcher */}
      <div className="flex items-center gap-1.5 p-1.5 mb-4 rounded-2xl glass w-full max-w-xs mx-auto">
        {games.map((g) => {
          const isActive = game === g.id;
          return (
            <button
              key={g.id}
              onClick={() => setGame(g.id)}
              className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-sm font-display font-medium transition-all ${
                isActive
                  ? 'bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.4)]'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <g.icon className="w-4 h-4 flex-shrink-0" />
              <span>{g.label}</span>
            </button>
          );
        })}
      </div>

      {/* Mount only the active game so each starts fresh */}
      {game === 'runner' ? <HeroGame /> : <MemoryGame />}
    </div>
  );
};

export default GameArcade;
