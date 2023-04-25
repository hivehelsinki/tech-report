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
    <div className="text-primary-700 inline-flex h-8 items-center justify-center gap-2 rounded-full border-hlight text-center text-sm md:cursor-pointer md:border-2 md:pl-1 md:pr-4 md:transition md:duration-200 md:hover:scale-105 md:hover:shadow-md">
      <span className={badgeVariant({ variant })}></span>
      <span className="hidden md:block">{variant || 'open'}</span>
    </div>
  );
}
