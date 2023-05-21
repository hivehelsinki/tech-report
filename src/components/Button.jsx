import { tv } from 'tailwind-variants';

const button = tv({
  base: 'inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
  variants: {
    variant: {
      default: 'bg-hyellow hover:bg-hyellow/90',
    },
    size: {
      default: 'h-11 px-8',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

const Button = ({ children, className, size, variant, ...props }) => {
  return (
    <button className={button({ className, size, variant })} {...props}>
      {children}
    </button>
  );
};

export default Button;
