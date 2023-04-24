import { cn } from '../lib/utils';

const Button = ({ children, className }) => {
  return (
    <button className={cn('bg-hyellow px-8 py-3 text-hdark', className)}>
      {children}
    </button>
  );
};

export default Button;
