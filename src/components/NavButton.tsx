import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NavButtonProps {
  active: boolean;
  onClick: () => void;
  icon: string;
  children?: React.ReactNode;
  compact?: boolean;
}

export function NavButton({ active, onClick, icon, children, compact }: NavButtonProps) {
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
