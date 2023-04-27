import { cn } from '../lib/utils';

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={cn('bg-hyellow px-8 py-3 text-hdark', className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
