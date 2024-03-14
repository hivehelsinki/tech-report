import { ArrowUpIcon } from '@radix-ui/react-icons';

const Header = ({ sorting, setSorting }) => {
  const handleClick = (event, type) => {
    let order;
    if (sorting.type === type) {
      order = sorting.order === 'asc' ? 'desc' : 'asc';
    } else {
      order = 'asc';
    }
    setSorting({
      type,
      order,
    });
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
