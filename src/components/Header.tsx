import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { NavButton } from '@/components/NavButton';

interface HeaderProps {
  activeTab: string;
  cartCount: number;
  onTabChange: (tab: string) => void;
}

export function Header({ activeTab, cartCount, onTabChange }: HeaderProps) {
  return (
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
            <NavButton active={activeTab === 'home'} onClick={() => onTabChange('home')} icon="Home">
              Главная
            </NavButton>
            <NavButton active={activeTab === 'catalog'} onClick={() => onTabChange('catalog')} icon="Grid3x3">
              Каталог
            </NavButton>
            <NavButton active={activeTab === 'new'} onClick={() => onTabChange('new')} icon="Sparkles">
              Новинки
            </NavButton>
            <NavButton active={activeTab === 'genres'} onClick={() => onTabChange('genres')} icon="Layers">
              Жанры
            </NavButton>
            <NavButton active={activeTab === 'sales'} onClick={() => onTabChange('sales')} icon="Tag">
              Акции
            </NavButton>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant={activeTab === 'cart' ? 'default' : 'outline'}
              className={activeTab === 'cart' ? 'bg-primary text-background box-glow-cyan' : 'border-primary/30'}
              onClick={() => onTabChange('cart')}
            >
              <Icon name="ShoppingCart" size={20} />
              {cartCount > 0 && (
                <Badge className="ml-2 bg-secondary text-background">{cartCount}</Badge>
              )}
            </Button>
            <Button
              variant={activeTab === 'profile' ? 'default' : 'outline'}
              className={activeTab === 'profile' ? 'bg-secondary text-background box-glow-magenta' : 'border-secondary/30'}
              onClick={() => onTabChange('profile')}
            >
              <Icon name="User" size={20} />
            </Button>
            <Button
              variant={activeTab === 'support' ? 'default' : 'outline'}
              className={activeTab === 'support' ? 'bg-accent text-background box-glow-purple' : 'border-accent/30'}
              onClick={() => onTabChange('support')}
            >
              <Icon name="Headphones" size={20} />
            </Button>
          </div>
        </div>

        <div className="lg:hidden flex gap-2 mt-4 overflow-x-auto pb-2">
          <NavButton active={activeTab === 'home'} onClick={() => onTabChange('home')} icon="Home" compact />
          <NavButton active={activeTab === 'catalog'} onClick={() => onTabChange('catalog')} icon="Grid3x3" compact />
          <NavButton active={activeTab === 'new'} onClick={() => onTabChange('new')} icon="Sparkles" compact />
          <NavButton active={activeTab === 'genres'} onClick={() => onTabChange('genres')} icon="Layers" compact />
          <NavButton active={activeTab === 'sales'} onClick={() => onTabChange('sales')} icon="Tag" compact />
        </div>
      </div>
    </nav>
  );
}
