import * as Accordion from '@radix-ui/react-accordion';
import SelectStatus from './SelectStatus';
import { ChevronDownIcon } from 'lucide-react';
import moment from 'moment';
import { useState } from 'react';
const Issue = ({ props }) => {
  const { issue, user, checkedResolved } = props;
  const [selectedStatus, setSelectedStatus] = useState(issue.status);
  const time =
    (issue.closed ? 'closed ' : 'created ') +
    moment(issue.closed ?? issue.created).fromNow();
  const handleStatus = (event) => {
    const possibleStatus = ['open', 'ongoing', 'resolved'];
    if (possibleStatus.includes(event)) {
      fetch(`/api/issues/${issue.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          status: event,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
    }
    setSelectedStatus(event);
  };

  if (checkedResolved === false && selectedStatus === 'resolved') return null;
  return (
    <Accordion.Item value={issue.id} className=" text-hdark">
      <Accordion.Trigger className="group flex w-full items-center justify-between border-b px-5 py-4">
        <div className="inline-flex w-2/5 items-center gap-8">
          <p>{issue.host}</p> <p>{issue.device}</p>
        </div>
        <div className="inline-flex items-center gap-6">
          <SelectStatus
            user={user}
            selectedStatus={selectedStatus}
            handleStatus={handleStatus}
          />
          <ChevronDownIcon className="h-5 w-5 transition-transform duration-300 group-data-[state=open]:rotate-180" />
        </div>
      </Accordion.Trigger>
      <Accordion.Content className="border-b bg-slate-50 px-2 py-6">
        <div className="md:pl-20">
          <p className="text-sm ">
            <span className="font-medium  ">{issue.user.login}:</span>{' '}
            {issue.description}
          </p>
          <p className="mt-5 text-xs">{time}</p>
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
};

export default Issue;
