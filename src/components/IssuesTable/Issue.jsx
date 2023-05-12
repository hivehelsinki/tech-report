import Link from 'next/link';
import * as Accordion from '@radix-ui/react-accordion';
import SelectStatus from './SelectStatus';
import { ChevronDownIcon } from 'lucide-react';
import moment from 'moment';
import { useState } from 'react';
const Issue = ({ issue, user, checkedResolved, setTriggerSorting }) => {
  const [open, setOpen] = useState(false);
  const handleStatus = async (event) => {
    const possibleStatus = ['open', 'ongoing', 'resolved'];
    if (possibleStatus.includes(event)) {
      await fetch(`/api/issues/${issue.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
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

  if (checkedResolved === false && issue.status === 'resolved') return null;
  return (
    <Accordion.Item value={issue.id} className=" text-hdark">
      <Accordion.Header className="group relative flex w-full items-center justify-between border-b px-5 py-4">
        <Accordion.Trigger className="group flex w-full items-center justify-between">
          <div className="inline-flex w-2/5 items-center gap-8">
            <p className="min-w-[65px]">{issue.host}</p> <p>{issue.device}</p>
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
      <Accordion.Content className="border-b bg-slate-50 px-2 py-6">
        <div className="md:pl-20">
          <div className="text-md">
            {issue.description.split('\n').map((line, index) => {
              return (
                <p key={index} className="break-words md:pr-20">
                  {line}
                </p>
              );
            })}
          </div>

          <p className="mt-5 text-sm">
            created by{' '}
            <Link
              href={`https://profile.intra.42.fr/users/${issue.user.login}`}
              className="underline"
            >
              {issue.user.login}
            </Link>{' '}
            {moment(issue.created).fromNow()}
            {issue.closed && ` and closed ${moment(issue.closed).fromNow()}`}
          </p>
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
};

export default Issue;
