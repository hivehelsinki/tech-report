import { ArrowUpIcon } from '@radix-ui/react-icons';

const Header = ({ sorting, setSorting }) => {
  const order = (type) => {
    if (sorting.type === type) {
      return sorting.order === 'asc' ? 'desc' : 'asc';
    } else {
      return 'asc';
    }
  };

  const handleClick = (event, type) => {
    setSorting({
      type,
      order: order(type),
    });
  };
  const handleKeyUp = (event, type) => {
    if (event.key === 'Enter') {
      setSorting({
        type,
        order: order(type),
      });
    }
  };

  const sortingOptions = ['Host', 'Device', 'Status', 'User', 'Created at'].map(
    (type) => {
      return (
        <div
          className={`flex items-center ${
            sorting.type !== type && ' text-gray-500 '
          }`}
          key={type}
          onClick={(event) => handleClick(event, type)}
          onKeyUp={(event) => handleKeyUp(event, type)}
          tabIndex={0}
          role="button"
        >
          <ArrowUpIcon
            className={`${
              sorting.order === 'desc' && type === sorting.type && 'rotate-180'
            } h-4 transition-all ease-in-out`}
          />
          <p className="cursor-pointer text-sm">{type}</p>
        </div>
      );
    }
  );

  return (
    <div className="flex items-center justify-between py-4 pl-9 pr-12">
      {sortingOptions}
    </div>
  );
};

export default Header;
