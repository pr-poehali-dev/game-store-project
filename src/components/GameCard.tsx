import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Game } from '@/types/game';

interface GameCardProps {
  game: Game;
  onAddToCart: (game: Game) => void;
}

export function GameCard({ game, onAddToCart }: GameCardProps) {
  return (
    <Card className="overflow-hidden bg-card border-primary/30 hover:border-primary transition-all hover:box-glow-cyan group cursor-pointer">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 z-10 pointer-events-none" />
        <img 
          src={game.image} 
          alt={game.title}
          className="w-full h-full object-cover transition-all group-hover:scale-110 group-hover:rotate-2 rounded-t-lg border-b-4 border-primary/50"
        />
        {game.isNew && (
          <Badge className="absolute top-2 right-2 bg-accent text-background font-bold box-glow-purple">
            NEW
          </Badge>
        )}
        {game.discount && (
          <Badge className="absolute top-2 left-2 bg-secondary text-background font-bold text-lg box-glow-magenta">
            -{game.discount}%
          </Badge>
        )}
      </div>
      <div className="p-4">
        <Badge variant="outline" className="mb-2 border-primary/50 text-primary">
          {game.genre}
        </Badge>
        <h3 className="text-xl font-bold mb-3">{game.title}</h3>
        <div className="flex items-center justify-between">
          <div>
            {game.discount ? (
              <div>
                <p className="text-sm text-muted-foreground line-through">{game.price} ₽</p>
                <p className="text-2xl font-black text-primary glow-cyan">
                  {Math.round(game.price * (1 - game.discount / 100))} ₽
                </p>
              </div>
            ) : (
              <p className="text-2xl font-black">{game.price} ₽</p>
            )}
          </div>
          <Button 
            className="bg-primary hover:bg-primary/80 text-background font-bold box-glow-cyan"
            onClick={() => onAddToCart(game)}
          >
            <Icon name="ShoppingCart" size={20} />
          </Button>
        </div>
      </div>
    </Card>
  );
}