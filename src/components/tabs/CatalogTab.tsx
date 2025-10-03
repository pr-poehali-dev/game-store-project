import { GameCard } from '@/components/GameCard';
import { Game } from '@/types/game';

interface CatalogTabProps {
  games: Game[];
  onAddToCart: (game: Game) => void;
}

export function CatalogTab({ games, onAddToCart }: CatalogTabProps) {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-8 glow-cyan">Каталог игр</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <GameCard key={game.id} game={game} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
}
