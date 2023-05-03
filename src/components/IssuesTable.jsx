'use client';
import * as Accordion from '@radix-ui/react-accordion';
import Badge from './Badge';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const IssuesTable = () => {
  const issues = [
    {
      id: 4,
      host: 'c1r4p3',
      device: 'iMac',
      description:
        'A pop up on my mac says that CLI needs to be reinstalled when I try to install node.',
      student: 'amajer',
      status: 'open',
      created: '12 minutes ago',
      closed: null,
    },
    {
      id: 3,
      host: 'c2r6p3',
      device: 'Mouse',
      description: 'The mouse right button is not responding.',
      student: 'titus',
      status: 'resolved',
      created: '48 minutes ago',
      closed: 'closed 34 minutes ago',
    },
    {
      id: 2,
      host: 'c2r1p8',
      device: 'iMac',
      description: 'The computer is very slow.',
      student: 'emilia',
      status: 'open',
      created: '1 hour ago',
      closed: null,
    },
    {
      id: 1,
      host: 'c3r1p3',
      device: 'iMac',
      description: "My mac won't stop playing tu vo fa l'americano!!",
      student: 'giovanni',
      status: 'ongoing',
      created: '2 days ago',
      closed: '2 days ago',
    },
  ].map((issue) => {
    return (
      <Accordion.Item key={issue.id} value={issue.id} className=" text-hdark">
        <Accordion.Trigger className="flex w-full items-center justify-between border-b px-5 py-4">
          <div className="inline-flex w-2/5 items-center gap-8">
            <p>{issue.host}</p> <p>{issue.device}</p>
          </div>
          <div className="inline-flex items-center gap-6">
            <Badge variant={issue.status} />
            <ChevronDownIcon className="h-7 w-7" />
          </div>
        </Accordion.Trigger>
        <Accordion.Content className="border-b bg-slate-50 px-5 py-6">
          <div>
            <p className="text-sm">
              <span className="font-medium">{issue.student}:</span>{' '}
              {issue.description}
            </p>
          </div>
          <div className="inline-flex w-full items-center justify-between pt-4">
            <p className="text-xs">{issue.created}</p>
            <div className="space-x-6">
              <Badge variant={'open'} />
              <Badge variant={'ongoing'} />
              <Badge variant={'resolved'} />
            </div>
          </div>
        </Accordion.Content>
      </Accordion.Item>
    );
  });
  return (
    <div className="mt-11 w-full">
      <Accordion.Root className="m-0 w-full border">{issues}</Accordion.Root>
    </div>
  );
};

export default IssuesTable;
