import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Game } from '@/types/game';
import { useToast } from '@/hooks/use-toast';

interface CartTabProps {
  cart: Game[];
  onRemoveFromCart: (gameId: number) => void;
  getCartTotal: () => number;
}

export function CartTab({ cart, onRemoveFromCart, getCartTotal }: CartTabProps) {
  const { toast } = useToast();

  const handleCheckout = () => {
    if (cart.length === 0) return;

    toast({
      title: "Заказ оформлен!",
      description: `Заказ на сумму ${Math.round(getCartTotal())} ₽ успешно оформлен. Игры будут доступны в вашей библиотеке.`,
      duration: 5000,
    });

    cart.forEach(game => onRemoveFromCart(game.id));
  };
  return (
    <div>
      <h2 className="text-4xl font-bold mb-8 glow-purple">Корзина покупок</h2>
      {cart.length === 0 ? (
        <Card className="p-12 text-center bg-card border-primary/30">
          <Icon name="ShoppingCart" size={64} className="mx-auto mb-4 text-muted-foreground" />
          <p className="text-xl text-muted-foreground">Корзина пуста</p>
        </Card>
      ) : (
        <div className="space-y-4">
          {cart.map((game, index) => (
            <Card key={`${game.id}-${index}`} className="p-4 bg-card border-primary/30 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img src={game.image} alt={game.title} className="w-20 h-20 object-cover rounded-lg" />
                <div>
                  <h3 className="font-bold text-lg">{game.title}</h3>
                  <p className="text-muted-foreground">{game.genre}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  {game.discount ? (
                    <>
                      <p className="text-muted-foreground line-through">{game.price} ₽</p>
                      <p className="text-xl font-bold text-primary">{Math.round(game.price * (1 - game.discount / 100))} ₽</p>
                    </>
                  ) : (
                    <p className="text-xl font-bold">{game.price} ₽</p>
                  )}
                </div>
                <Button 
                  variant="destructive" 
                  size="icon"
                  onClick={() => onRemoveFromCart(game.id)}
                >
                  <Icon name="Trash2" size={20} />
                </Button>
              </div>
            </Card>
          ))}
          <Card className="p-6 bg-card border-primary/30">
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl font-bold">Итого:</span>
              <span className="text-3xl font-black text-primary glow-cyan">{Math.round(getCartTotal())} ₽</span>
            </div>
            <Button 
              className="w-full bg-primary hover:bg-primary/80 text-background font-bold text-lg box-glow-cyan"
              onClick={handleCheckout}
            >
              Оформить заказ
            </Button>
          </Card>
        </div>
      )}
    </div>
  );
}