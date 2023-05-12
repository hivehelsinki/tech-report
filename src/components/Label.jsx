import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const labelVariants = cva('font-bold tracking-wide', {
  variants: {
    size: {
      sm: 'text-sm',
      default: 'text-lg',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

const Label = ({ children, className, size }) => {
  return (
    <label className={cn(labelVariants({ className, size }))}>{children}</label>
  );
};

export default Label;
