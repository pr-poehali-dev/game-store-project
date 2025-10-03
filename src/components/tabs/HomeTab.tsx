import { Button } from '@/components/ui/button';
import { GameCard } from '@/components/GameCard';
import { Game } from '@/types/game';

interface HomeTabProps {
  games: Game[];
  onAddToCart: (game: Game) => void;
  onNavigate: (tab: string) => void;
}

export function HomeTab({ games, onAddToCart, onNavigate }: HomeTabProps) {
  return (
    <div className="space-y-12">
      <section className="relative h-[500px] rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <img 
          src="/img/1c710f79-93c6-4ff5-8379-615e9537fcd9.jpg" 
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex flex-col justify-center px-12">
          <h1 className="text-7xl font-black mb-4 glow-cyan">CYBER GAMES</h1>
          <p className="text-2xl mb-8 text-primary font-semibold">Магазин игр будущего</p>
          <Button 
            size="lg" 
            className="w-fit bg-primary hover:bg-primary/80 text-background font-bold text-lg px-8 box-glow-cyan"
            onClick={() => onNavigate('catalog')}
          >
            Перейти в каталог
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-4xl font-bold mb-6 glow-magenta">Популярные игры</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.slice(0, 3).map((game) => (
            <GameCard key={game.id} game={game} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>
    </div>
  );
}
