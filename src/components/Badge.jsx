import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariant = cva(
  'w-3 h-3 rounded-full transition duration-200 md:cursor-pointer',
  {
    variants: {
      variant: {
        open: 'border border-slate-300',
        ongoing: 'bg-orange-400',
        resolved: 'bg-green-400',
      },
    },
    defaultVariants: {
      variant: 'open',
    },
  }
);

const Badge = ({ variant, className }) => {
  return (
    <div
      className={cn(
        'text-primary-700 justify- inline-flex h-8 items-center gap-2 rounded-full text-center text-sm transition duration-300 md:cursor-pointer  md:pl-1 md:pr-4',
        className
      )}
    >
      <span className={badgeVariant({ variant })}></span>
      <span className="hidden md:block">{variant || 'open'}</span>
    </div>
  );
};

export default Badge;
