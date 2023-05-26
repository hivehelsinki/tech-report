'use client';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@components/ui/popover';
import Status from './Status';
import Badge from '../Badge';

const SelectStatus = ({ user, status, handleStatus, open, setOpen }) => {
  const adminStatus = ['open', 'ongoing', 'resolved'];
  const userStatus = ['open', 'resolved'];

  return (
    <div className="flex items-center space-x-4">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div>
            <Badge variant={status} />
          </div>
        </PopoverTrigger>
        <PopoverContent
          className=" flex w-[110px] flex-col gap-2 divide-y text-sm"
          side="bottom"
          align="start"
          onClick={(event) => handleStatus(event.target.getAttribute('value'))}
        >
          {user.admin ? (
            <div className="flex flex-col gap-2">
              {adminStatus.map((status, id) => (
                <Status key={id} status={status} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              {userStatus.map((status, id) => (
                <Status key={id} status={status} />
              ))}
            </div>
          )}
          {user.admin && (
            <div className="cursor-pointer pt-2 text-red-600 hover:font-semibold">
              <p value="delete">Delete</p>
            </div>
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
};
export default SelectStatus;
