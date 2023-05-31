import { tv } from 'tailwind-variants';

const statusVariant = tv({
  base: 'cursor-pointer hover:font-semibold',
  variants: {
    status: {
      open: 'hover:text-slate-500',
      ongoing: 'hover:text-horange',
      resolved: 'hover:text-hgreen',
    },
  },
});

const StatusItem = ({ status }) => {
  const capitalized = (word) => word.charAt(0).toUpperCase() + word.slice(1);

  return (
    <p value={status} className={statusVariant({ status })}>
      {capitalized(status)}
    </p>
  );
};

export default StatusItem;
