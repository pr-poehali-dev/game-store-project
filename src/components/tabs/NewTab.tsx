import { GameCard } from '@/components/GameCard';
import { Game } from '@/types/game';

interface NewTabProps {
  games: Game[];
  onAddToCart: (game: Game) => void;
}

export function NewTab({ games, onAddToCart }: NewTabProps) {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-8 glow-purple">Новинки</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.filter(g => g.isNew).map((game) => (
          <GameCard key={game.id} game={game} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
}
