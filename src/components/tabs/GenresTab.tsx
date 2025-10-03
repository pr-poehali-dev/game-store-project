import { Card } from '@/components/ui/card';

export function GenresTab() {
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
}
