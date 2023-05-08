import * as Accordion from '@radix-ui/react-accordion';
import SelectStatus from './SelectStatus';
import { ChevronDownIcon } from 'lucide-react';
import moment from 'moment';
import { useState } from 'react';
const Issue = ({ props }) => {
  const { user, checkedResolved } = props;
  const [issue, setIssue] = useState(props.issue);
  const [selectedStatus, setSelectedStatus] = useState(issue.status);
  const time =
    (issue.closed ? 'closed ' : 'created ') +
    moment(issue.closed ?? issue.created).fromNow();
  const handleStatus = async (event) => {
    const possibleStatus = ['open', 'ongoing', 'resolved'];
    if (possibleStatus.includes(event)) {
      const data = await fetch(`/api/issues/${issue.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          status: event,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const issueUpdate = await data.json();
      setIssue(issueUpdate);
      setSelectedStatus(event);
    }
  };

  if (checkedResolved === false && selectedStatus === 'resolved') return null;
  return (
    <Accordion.Item value={issue.id} className=" text-hdark">
      <Accordion.Header className="group relative flex w-full items-center justify-between border-b px-5 py-4">
        <Accordion.Trigger className="group flex w-full items-center justify-between">
          <div className="inline-flex w-2/5 items-center gap-8">
            <p>{issue.host}</p> <p>{issue.device}</p>
          </div>
          <ChevronDownIcon className="h-5 w-5 transition-transform duration-300 group-data-[state=open]:rotate-180" />
        </Accordion.Trigger>
        <div className="absolute right-16 inline-flex items-center gap-6 md:right-9">
          <SelectStatus
            user={user}
            selectedStatus={selectedStatus}
            handleStatus={handleStatus}
          />
        </div>
      </Accordion.Header>
      <Accordion.Content className="border-b bg-slate-50 px-2 py-6">
        <div className="md:pl-20">
          <p className="text-sm ">
            <span className="font-medium  ">{user.login}:</span>{' '}
            {issue.description}
          </p>
          <p className="mt-5 text-xs">{time}</p>
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
};

export default Issue;
