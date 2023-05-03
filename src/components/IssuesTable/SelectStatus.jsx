'use client';

import { useState } from 'react';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@components/ui/popover';
import Badge from '../Badge';

const SelectStatus = ({ status, id, user }) => {
  const possibleStatus = ['open', 'ongoing', 'resolved'];
  const [open, setOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(status);

  const handleStatusChange = (event, id) => {
    if (possibleStatus.includes(event)) {
      setSelectedStatus(event);
    }
  };
  return (
    <div className="flex items-center space-x-4">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div>
            <Badge variant={selectedStatus} />
          </div>
        </PopoverTrigger>
        {user.admin && (
          <PopoverContent
            className=" flex w-[110px] flex-col gap-2 text-sm"
            side="bottom"
            align="start"
            onClick={(event) =>
              handleStatusChange(event.target.getAttribute('value'), id)
            }
          >
            <p
              value="open"
              className="cursor-pointer hover:font-semibold hover:text-slate-500"
            >
              Open
            </p>
            <p
              value="ongoing"
              className="cursor-pointer hover:font-semibold hover:text-horange"
            >
              Ongoing
            </p>
            <p
              value="resolved"
              className="cursor-pointer hover:font-semibold hover:text-hgreen"
            >
              Resolved
            </p>
          </PopoverContent>
        )}
      </Popover>
    </div>
  );
};
export default SelectStatus;
