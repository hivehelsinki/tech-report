import { cva } from 'class-variance-authority';

const badgeVariant = cva('w-5 h-5 rounded-full', {
  variants: {
    variant: {
      open: 'border border-hdark',
      ongoing: 'bg-orange-400',
      resolved: 'bg-green-400',
    },
  },
  defaultVariants: {
    variant: 'open',
  },
});

export default function Badge({ variant }) {
  return (
    <div class="inline-flex gap-2 items-center justify-center md:pl-1 md:pr-4 h-8 text-sm rounded-full md:border-2 border-hlight text-center text-primary-700">
      <span className={badgeVariant({ variant })}></span>
      <span className="hidden md:block">{variant || 'open'}</span>
    </div>
  );
}
