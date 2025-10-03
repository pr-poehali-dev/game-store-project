import { Card } from '@/components/ui/card';
import { GameCard } from '@/components/GameCard';
import { Game } from '@/types/game';

interface GenresTabProps {
  games: Game[];
  onAddToCart: (game: Game) => void;
  selectedGenre: string | null;
  onSelectGenre: (genre: string | null) => void;
}

export function GenresTab({ games, onAddToCart, selectedGenre, onSelectGenre }: GenresTabProps) {
  const genres = ['Шутер', 'RPG', 'Гонки', 'Стратегия', 'Экшен', 'Мультиплеер', 'Симулятор', 'Хоррор'];

  const filteredGames = selectedGenre 
    ? games.filter(game => game.genre === selectedGenre)
    : [];

  return (
    <div>
      <h2 className="text-4xl font-bold mb-8 glow-magenta">Жанры игр</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {genres.map((genre) => (
          <Card 
            key={genre} 
            className={`p-6 bg-card border-primary/30 hover:border-primary transition-all cursor-pointer hover:box-glow-cyan ${
              selectedGenre === genre ? 'border-primary box-glow-cyan' : ''
            }`}
            onClick={() => onSelectGenre(selectedGenre === genre ? null : genre)}
          >
            <h3 className="text-xl font-bold text-center text-primary">{genre}</h3>
          </Card>
        ))}
      </div>

      {selectedGenre && (
        <div className="mt-8">
          <h3 className="text-3xl font-bold mb-6 text-primary">Игры жанра: {selectedGenre}</h3>
          {filteredGames.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGames.map((game) => (
                <GameCard key={game.id} game={game} onAddToCart={onAddToCart} />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-center">Игр в этом жанре пока нет</p>
          )}
        </div>
      )}
    </div>
  );
}
