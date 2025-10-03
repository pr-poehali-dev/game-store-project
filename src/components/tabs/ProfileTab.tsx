import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export function ProfileTab() {
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
}
