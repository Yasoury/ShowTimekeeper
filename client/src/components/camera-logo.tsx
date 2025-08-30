import { cn } from '@/lib/utils';

interface CameraLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function CameraLogo({ className, size = 'md' }: CameraLogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  return (
    <div
      className={cn(
        'rounded-full flex items-center justify-center relative overflow-hidden',
        sizeClasses[size],
        className
      )}
      style={{
        background: `conic-gradient(from 0deg, 
          hsl(180, 100%, 50%) 0deg 60deg,
          hsl(254, 72%, 8%) 60deg 120deg,
          hsl(180, 100%, 50%) 120deg 180deg,
          hsl(254, 72%, 8%) 180deg 240deg,
          hsl(180, 100%, 50%) 240deg 300deg,
          hsl(254, 72%, 8%) 300deg 360deg)`
      }}
    >
      <div className="absolute inset-2 bg-background rounded-full flex items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 text-foreground"
          fill="currentColor"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-8c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"/>
        </svg>
      </div>
      <div
        className="absolute inset-0 text-foreground font-bold flex items-center justify-center"
        style={{ fontSize: size === 'lg' ? '1.5rem' : size === 'md' ? '1rem' : '0.75rem' }}
      >
        J
      </div>
    </div>
  );
}
