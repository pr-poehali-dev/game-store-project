import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export function SupportTab() {
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
}
