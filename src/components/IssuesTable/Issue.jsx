import Link from 'next/link';
import * as Accordion from '@radix-ui/react-accordion';
import SelectStatus from './SelectStatus';
import { ChevronDownIcon } from 'lucide-react';
import moment from 'moment';
import { useState } from 'react';
import Image from 'next/image';

const Issue = ({
  issue,
  user,
  checkedResolved,
  setTriggerSorting,
  checkedOnlyMine,
}) => {
  const [open, setOpen] = useState(false);

  const handleStatus = async (event) => {
    if (event === null) return;
    if (event === 'delete') {
      const res = window.confirm('Are you sure?');
      if (res === false) return;
      await fetch(`/api/issues/${issue.id}`, { method: 'DELETE' });
      setTriggerSorting((prev) => !prev);
      setOpen(!open);
    }

    const possibleStatus = ['open', 'ongoing', 'resolved'];
    if (possibleStatus.includes(event)) {
      await fetch(`/api/issues/${issue.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          ...issue,
          status: event,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      setTriggerSorting((prev) => !prev);
      setOpen(!open);
    }
  };

  if (
    (checkedResolved === false && issue.status === 'resolved') ||
    (checkedOnlyMine === true && issue.userId !== user.user_id)
  )
    return null;

  return (
    <Accordion.Item value={issue.id} className=" text-hdark">
      <Accordion.Header className="group relative flex w-full items-center justify-between border-b px-5 py-4 dark:border-gray-600">
        <Accordion.Trigger className="group flex w-full items-center justify-between dark:text-gray-300">
          <div className="inline-flex w-4/5 items-center gap-8">
            <p className="min-w-[65px] font-semibold">{issue.host}</p>
            <p>
              {issue.device}
              <span className="ml-5 hidden italic opacity-60 md:inline">
                {issue.description.substring(0, 30)}...
              </span>
            </p>
          </div>
          <ChevronDownIcon className="h-5 w-5 transition-transform duration-300 group-data-[state=open]:rotate-180" />
        </Accordion.Trigger>
        <div className="absolute right-16 inline-flex items-center gap-6 md:right-9">
          <SelectStatus
            user={user}
            status={issue.status}
            handleStatus={handleStatus}
            open={open}
            setOpen={setOpen}
          />
        </div>
      </Accordion.Header>
      <Accordion.Content className="border-b bg-slate-50 px-2 py-6 dark:border-gray-600 dark:bg-gray-800 dark:text-white">
        <div className="px-5 md:pl-20">
          <div className="mb-5 flex items-center justify-between">
            <Link
              href={`https://profile.intra.42.fr/users/${issue.user.login}`}
              className="inline-flex cursor-pointer gap-2 text-lg hover:underline"
            >
              {issue.user.image_url ? (
                <Image
                  src={issue.user.image_url}
                  alt="user image"
                  width={30}
                  height={30}
                  className="inline rounded-full"
                />
              ) : (
                <div className="h-[30px] w-[30px] rounded-full bg-teal-300 dark:bg-teal-700" />
              )}
              <span>{issue.user.login}</span>
            </Link>

            <p className="text-sm">
              {moment(issue.created).fromNow()}
              {issue.closed && ` and closed ${moment(issue.closed).fromNow()}`}
            </p>
          </div>

          <div className="text-md">
            {issue.description.split('\n').map((line, index) => {
              return (
                <p key={index} className="break-words md:pr-20">
                  {line}
                </p>
              );
            })}
          </div>
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
};

export default Issue;
