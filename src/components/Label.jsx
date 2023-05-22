import { tv } from 'tailwind-variants';

const labelVariants = tv({
  base: 'font-bold tracking-wide',
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
    <label className={labelVariants({ className, size })}>{children}</label>
  );
};

export default Label;
