'use client';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import SelectStatus from './SelectStatus';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { useState, useEffect } from 'react';

const RenderIssue = ({ issue, handleIssuesState }) => {
  return (
    <Accordion.Item key={issue.id} value={issue.id} className=" text-hdark">
      <Accordion.Trigger className="group flex w-full items-center justify-between border-b px-5 py-4">
        <div className="inline-flex w-2/5 items-center gap-8">
          <p>{issue.host}</p> <p>{issue.device}</p>
        </div>
        <div className="inline-flex items-center gap-6">
          <SelectStatus
            status={issue.status}
            handleIssuesState={handleIssuesState}
            id={issue.id}
          />
          <ChevronDownIcon className="h-5 w-5 transition-transform duration-300 group-data-[state=open]:rotate-180" />
        </div>
      </Accordion.Trigger>
      <Accordion.Content className="border-b bg-slate-50 px-5 py-6">
        <div className=" md:pl-20">
          <p className="text-sm ">
            <span className="font-medium  ">{issue.student}:</span>{' '}
            {issue.description}
          </p>
          <p className="mt-5 text-xs">{issue.created}</p>
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
};

const RenderIssues = ({ issues, handleIssuesState }) => {
  console.log('rwender', issues);
  if (issues.length > 0)
    return issues.map((issue, i) => (
      <RenderIssue
        handleIssuesState={handleIssuesState}
        issue={issue}
        key={i}
      />
    ));
};

const IssuesTable = () => {
  const [checkedOpen, setCheckedOpen] = useState(true);
  const [checkedResolved, setCheckedResolved] = useState(false);
  const [issues, setIssues] = useState([]);

  const handleIssuesState = (id, status) => {
    const temp = issues.map((issue) => {
      if (issue.id == id) issue.status = status;
    });

    setIssues(temp);
    console.log(issues);
  };

  useEffect(() => {
    const fetchInfo = async () => {
      const data = await fetch('/api/issues');
      const jsonData = await data.json();

      setIssues(jsonData);
    };
    fetchInfo();
  }, []);

  if (issues.length > 0) {
    return (
      <div className="mt-11 w-full md:container">
        <div className="mb-5 flex w-full flex-row justify-end gap-5">
          <div className="flex items-center gap-2">
            <Checkbox.Root
              className="flex h-4 w-4 appearance-none items-center justify-center border border-slate-400 bg-white outline-none"
              defaultChecked
              id="c1"
              onCheckedChange={(event) => setCheckedOpen(event)}
            >
              <Checkbox.Indicator>
                <CheckIcon className="h-5 w-5" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            <label className="leading-none text-slate-600" htmlFor="c1">
              Open/Ongoing
            </label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox.Root
              className="flex h-4 w-4 appearance-none items-center justify-center border border-slate-400 bg-white outline-none"
              id="c2"
              onCheckedChange={(event) => setCheckedResolved(event)}
            >
              <Checkbox.Indicator>
                <CheckIcon className="h-5 w-5" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            <label className="leading-none text-slate-600" htmlFor="c2">
              Resolved
            </label>
          </div>
        </div>
        <Accordion.Root className="w-full border">
          <RenderIssues handleIssuesState={handleIssuesState} issues={issues} />
        </Accordion.Root>
      </div>
    );
  }
};

export default IssuesTable;
