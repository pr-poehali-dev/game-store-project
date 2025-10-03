import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Game {
  id: number;
  title: string;
  price: number;
  image: string;
  genre: string;
  discount?: number;
  isNew?: boolean;
}

const games: Game[] = [
  {
    id: 1,
    title: 'Cyber Strike 2077',
    price: 1499,
    image: '/img/1c710f79-93c6-4ff5-8379-615e9537fcd9.jpg',
    genre: 'Шутер',
    discount: 30,
    isNew: true
  },
  {
    id: 2,
    title: 'Neon Racer Infinity',
    price: 999,
    image: '/img/7d863ddd-40e2-4383-a167-c65e4c0bf0ad.jpg',
    genre: 'Гонки',
    discount: 20
  },
  {
    id: 3,
    title: 'Digital Shadows',
    price: 1799,
    image: '/img/a57c126e-d08f-4efc-9935-653e9c93952d.jpg',
    genre: 'RPG',
    isNew: true
  },
  {
    id: 4,
    title: 'Matrix Protocol',
    price: 1299,
    image: '/img/1c710f79-93c6-4ff5-8379-615e9537fcd9.jpg',
    genre: 'Экшен',
    discount: 15
  },
  {
    id: 5,
    title: 'Tech Wars Online',
    price: 899,
    image: '/img/7d863ddd-40e2-4383-a167-c65e4c0bf0ad.jpg',
    genre: 'Мультиплеер'
  },
  {
    id: 6,
    title: 'Future Combat Elite',
    price: 1599,
    image: '/img/a57c126e-d08f-4efc-9935-653e9c93952d.jpg',
    genre: 'Стратегия',
    isNew: true
  },
  {
    id: 7,
    title: 'Quantum Breach',
    price: 1899,
    image: '/img/1c710f79-93c6-4ff5-8379-615e9537fcd9.jpg',
    genre: 'Шутер',
    discount: 25,
    isNew: true
  },
  {
    id: 8,
    title: 'Neon City Chronicles',
    price: 2199,
    image: '/img/a57c126e-d08f-4efc-9935-653e9c93952d.jpg',
    genre: 'RPG',
    isNew: true
  },
  {
    id: 9,
    title: 'Velocity Zero',
    price: 1199,
    image: '/img/7d863ddd-40e2-4383-a167-c65e4c0bf0ad.jpg',
    genre: 'Гонки',
    discount: 35
  },
  {
    id: 10,
    title: 'Nexus Defense',
    price: 1399,
    image: '/img/1c710f79-93c6-4ff5-8379-615e9537fcd9.jpg',
    genre: 'Стратегия',
    discount: 10
  },
  {
    id: 11,
    title: 'Ghost Protocol VR',
    price: 2499,
    image: '/img/a57c126e-d08f-4efc-9935-653e9c93952d.jpg',
    genre: 'Экшен',
    isNew: true
  },
  {
    id: 12,
    title: 'Arena Masters',
    price: 799,
    image: '/img/7d863ddd-40e2-4383-a167-c65e4c0bf0ad.jpg',
    genre: 'Мультиплеер',
    discount: 40
  },
  {
    id: 13,
    title: 'Dark Void Station',
    price: 1699,
    image: '/img/1c710f79-93c6-4ff5-8379-615e9537fcd9.jpg',
    genre: 'Хоррор',
    discount: 20
  },
  {
    id: 14,
    title: 'Mech Commander',
    price: 1599,
    image: '/img/a57c126e-d08f-4efc-9935-653e9c93952d.jpg',
    genre: 'Симулятор'
  },
  {
    id: 15,
    title: 'Cyberpunk Legends',
    price: 2299,
    image: '/img/7d863ddd-40e2-4383-a167-c65e4c0bf0ad.jpg',
    genre: 'RPG',
    discount: 15,
    isNew: true
  },
  {
    id: 16,
    title: 'Terminal Velocity',
    price: 1099,
    image: '/img/1c710f79-93c6-4ff5-8379-615e9537fcd9.jpg',
    genre: 'Гонки'
  },
  {
    id: 17,
    title: 'Plasma Warfare',
    price: 1399,
    image: '/img/a57c126e-d08f-4efc-9935-653e9c93952d.jpg',
    genre: 'Шутер',
    discount: 30
  },
  {
    id: 18,
    title: 'Empire Builder 3000',
    price: 1799,
    image: '/img/7d863ddd-40e2-4383-a167-c65e4c0bf0ad.jpg',
    genre: 'Стратегия',
    discount: 5
  }
];

function Index() {
  const [activeTab, setActiveTab] = useState('home');
  const [cart, setCart] = useState<Game[]>([]);

  const addToCart = (game: Game) => {
    setCart([...cart, game]);
  };

  const removeFromCart = (gameId: number) => {
    setCart(cart.filter(item => item.id !== gameId));
  };

  const getCartTotal = () => {
    return cart.reduce((total, game) => {
      const discount = game.discount || 0;
      return total + (game.price * (1 - discount / 100));
    }, 0);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
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
                  onClick={() => setActiveTab('catalog')}
                >
                  Перейти в каталог
                </Button>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-bold mb-6 glow-magenta">Популярные игры</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {games.slice(0, 3).map((game) => (
                  <GameCard key={game.id} game={game} onAddToCart={addToCart} />
                ))}
              </div>
            </section>
          </div>
        );

      case 'catalog':
        return (
          <div>
            <h2 className="text-4xl font-bold mb-8 glow-cyan">Каталог игр</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {games.map((game) => (
                <GameCard key={game.id} game={game} onAddToCart={addToCart} />
              ))}
            </div>
          </div>
        );

      case 'new':
        return (
          <div>
            <h2 className="text-4xl font-bold mb-8 glow-purple">Новинки</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {games.filter(g => g.isNew).map((game) => (
                <GameCard key={game.id} game={game} onAddToCart={addToCart} />
              ))}
            </div>
          </div>
        );

      case 'genres':
        return (
          <div>
            <h2 className="text-4xl font-bold mb-8 glow-magenta">Жанры игр</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {['Шутер', 'RPG', 'Гонки', 'Стратегия', 'Экшен', 'Мультиплеер', 'Симулятор', 'Хоррор'].map((genre) => (
                <Card key={genre} className="p-6 bg-card border-primary/30 hover:border-primary transition-all cursor-pointer hover:box-glow-cyan">
                  <h3 className="text-xl font-bold text-center text-primary">{genre}</h3>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'sales':
        return (
          <div>
            <h2 className="text-4xl font-bold mb-8 glow-cyan">Акции и скидки</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {games.filter(g => g.discount).map((game) => (
                <GameCard key={game.id} game={game} onAddToCart={addToCart} />
              ))}
            </div>
          </div>
        );

      case 'cart':
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
                        onClick={() => removeFromCart(game.id)}
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
                  <Button className="w-full bg-primary hover:bg-primary/80 text-background font-bold text-lg box-glow-cyan">
                    Оформить заказ
                  </Button>
                </Card>
              </div>
            )}
          </div>
        );

      case 'profile':
        return (
          <div>
            <h2 className="text-4xl font-bold mb-8 glow-magenta">Личный кабинет</h2>
            <Card className="p-8 bg-card border-primary/30">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-24 h-24 rounded-full bg-gradient-cyber flex items-center justify-center">
                  <Icon name="User" size={48} className="text-background" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Cyber Gamer</h3>
                  <p className="text-muted-foreground">gamer@cyberstore.ru</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between p-4 bg-background rounded-lg">
                  <span className="font-semibold">Куплено игр:</span>
                  <span className="text-primary font-bold">23</span>
                </div>
                <div className="flex justify-between p-4 bg-background rounded-lg">
                  <span className="font-semibold">Потрачено:</span>
                  <span className="text-primary font-bold">34,567 ₽</span>
                </div>
                <div className="flex justify-between p-4 bg-background rounded-lg">
                  <span className="font-semibold">Уровень:</span>
                  <Badge className="bg-gradient-cyber text-background font-bold">Pro Gamer</Badge>
                </div>
              </div>
            </Card>
          </div>
        );

      case 'support':
        return (
          <div>
            <h2 className="text-4xl font-bold mb-8 glow-purple">Служба поддержки</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-card border-primary/30">
                <Icon name="MessageCircle" size={48} className="text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Онлайн-чат</h3>
                <p className="text-muted-foreground mb-4">Напишите нам в чат для быстрой помощи</p>
                <Button className="w-full bg-primary hover:bg-primary/80 text-background font-bold">
                  Начать чат
                </Button>
              </Card>
              <Card className="p-6 bg-card border-primary/30">
                <Icon name="Mail" size={48} className="text-secondary mb-4" />
                <h3 className="text-xl font-bold mb-2">Email поддержка</h3>
                <p className="text-muted-foreground mb-4">support@cyberstore.ru</p>
                <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary/10 font-bold">
                  Написать письмо
                </Button>
              </Card>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-primary/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-cyber rounded-lg flex items-center justify-center animate-pulse-glow">
                <Icon name="Gamepad2" size={24} className="text-background" />
              </div>
              <h1 className="text-2xl font-black glow-cyan">CYBER STORE</h1>
            </div>
            
            <div className="hidden lg:flex items-center gap-1">
              <NavButton active={activeTab === 'home'} onClick={() => setActiveTab('home')} icon="Home">
                Главная
              </NavButton>
              <NavButton active={activeTab === 'catalog'} onClick={() => setActiveTab('catalog')} icon="Grid3x3">
                Каталог
              </NavButton>
              <NavButton active={activeTab === 'new'} onClick={() => setActiveTab('new')} icon="Sparkles">
                Новинки
              </NavButton>
              <NavButton active={activeTab === 'genres'} onClick={() => setActiveTab('genres')} icon="Layers">
                Жанры
              </NavButton>
              <NavButton active={activeTab === 'sales'} onClick={() => setActiveTab('sales')} icon="Tag">
                Акции
              </NavButton>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant={activeTab === 'cart' ? 'default' : 'outline'}
                className={activeTab === 'cart' ? 'bg-primary text-background box-glow-cyan' : 'border-primary/30'}
                onClick={() => setActiveTab('cart')}
              >
                <Icon name="ShoppingCart" size={20} />
                {cart.length > 0 && (
                  <Badge className="ml-2 bg-secondary text-background">{cart.length}</Badge>
                )}
              </Button>
              <Button
                variant={activeTab === 'profile' ? 'default' : 'outline'}
                className={activeTab === 'profile' ? 'bg-secondary text-background box-glow-magenta' : 'border-secondary/30'}
                onClick={() => setActiveTab('profile')}
              >
                <Icon name="User" size={20} />
              </Button>
              <Button
                variant={activeTab === 'support' ? 'default' : 'outline'}
                className={activeTab === 'support' ? 'bg-accent text-background box-glow-purple' : 'border-accent/30'}
                onClick={() => setActiveTab('support')}
              >
                <Icon name="Headphones" size={20} />
              </Button>
            </div>
          </div>

          <div className="lg:hidden flex gap-2 mt-4 overflow-x-auto pb-2">
            <NavButton active={activeTab === 'home'} onClick={() => setActiveTab('home')} icon="Home" compact />
            <NavButton active={activeTab === 'catalog'} onClick={() => setActiveTab('catalog')} icon="Grid3x3" compact />
            <NavButton active={activeTab === 'new'} onClick={() => setActiveTab('new')} icon="Sparkles" compact />
            <NavButton active={activeTab === 'genres'} onClick={() => setActiveTab('genres')} icon="Layers" compact />
            <NavButton active={activeTab === 'sales'} onClick={() => setActiveTab('sales')} icon="Tag" compact />
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {renderContent()}
      </main>

      <footer className="mt-16 border-t border-primary/30 bg-card/50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2 glow-cyan">CYBER STORE</h2>
            <p className="text-muted-foreground">Магазин игр будущего © 2025</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

interface NavButtonProps {
  active: boolean;
  onClick: () => void;
  icon: string;
  children?: React.ReactNode;
  compact?: boolean;
}

function NavButton({ active, onClick, icon, children, compact }: NavButtonProps) {
  return (
    <Button
      variant={active ? 'default' : 'ghost'}
      className={`
        ${active ? 'bg-primary/20 text-primary border border-primary box-glow-cyan' : 'text-foreground hover:text-primary'}
        ${compact ? 'px-3' : 'px-4'}
        font-semibold
      `}
      onClick={onClick}
    >
      <Icon name={icon} size={20} />
      {!compact && children && <span className="ml-2">{children}</span>}
    </Button>
  );
}

interface GameCardProps {
  game: Game;
  onAddToCart: (game: Game) => void;
}

function GameCard({ game, onAddToCart }: GameCardProps) {
  return (
    <Card className="overflow-hidden bg-card border-primary/30 hover:border-primary transition-all hover:box-glow-cyan group cursor-pointer">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={game.image} 
          alt={game.title}
          className="w-full h-full object-cover transition-transform group-hover:scale-110"
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

export default Index;