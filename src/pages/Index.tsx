import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HomeTab } from '@/components/tabs/HomeTab';
import { CatalogTab } from '@/components/tabs/CatalogTab';
import { NewTab } from '@/components/tabs/NewTab';
import { GenresTab } from '@/components/tabs/GenresTab';
import { SalesTab } from '@/components/tabs/SalesTab';
import { CartTab } from '@/components/tabs/CartTab';
import { ProfileTab } from '@/components/tabs/ProfileTab';
import { SupportTab } from '@/components/tabs/SupportTab';
import { games } from '@/data/games';
import { Game } from '@/types/game';

function Index() {
  useEffect(() => {
    console.log('Index component mounted');
  }, []);
  const [activeTab, setActiveTab] = useState('home');
  const [cart, setCart] = useState<Game[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

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
        return <HomeTab games={games} onAddToCart={addToCart} onNavigate={setActiveTab} />;
      case 'catalog':
        return <CatalogTab games={games} onAddToCart={addToCart} />;
      case 'new':
        return <NewTab games={games} onAddToCart={addToCart} />;
      case 'genres':
        return <GenresTab games={games} onAddToCart={addToCart} selectedGenre={selectedGenre} onSelectGenre={setSelectedGenre} />;
      case 'sales':
        return <SalesTab games={games} onAddToCart={addToCart} />;
      case 'cart':
        return <CartTab cart={cart} onRemoveFromCart={removeFromCart} getCartTotal={getCartTotal} />;
      case 'profile':
        return <ProfileTab />;
      case 'support':
        return <SupportTab />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 pointer-events-none"
        style={{ backgroundImage: 'url(/img/128982d7-d159-402d-8ed2-8474d6140310.jpg)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="relative z-10">
        <Header activeTab={activeTab} cartCount={cart.length} onTabChange={setActiveTab} />
        <main className="container mx-auto px-4 py-8">
          {renderContent()}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Index;