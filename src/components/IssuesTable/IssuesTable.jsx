'use client';
import * as Accordion from '@radix-ui/react-accordion';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { useState, useEffect } from 'react';
import Issue from './Issue.jsx';

const RenderIssues = ({ user, checkedResolved }) => {
  const [issues, setIssues] = useState([]);
  const [triggerSorting, setTriggerSorting] = useState(false);

  useEffect(() => {
    const fetchInfo = async () => {
      const data = await fetch('/api/issues');
      const jsonData = await data.json();
      setIssues(jsonData);
    };
    fetchInfo();
  }, [triggerSorting]);

  if (issues.length > 0) {
    return issues.map((issue) => {
      return (
        <Issue
          issue={issue}
          user={user}
          checkedResolved={checkedResolved}
          setTriggerSorting={setTriggerSorting}
          key={issue.id}
        />
      );
    });
  } else {
    return;
  }
};

const IssuesTable = ({ user }) => {
  const [checkedResolved, setCheckedResolved] = useState(false);
  return (
    <div className="mt-11 w-full md:container">
      <div className="mb-5 flex w-full flex-row justify-end gap-5">
        <div className="flex items-center gap-2">
          <Checkbox.Root
            className="flex h-4 w-4 appearance-none items-center justify-center border border-slate-400 bg-white outline-none dark:bg-gray-900"
            onCheckedChange={(event) => setCheckedResolved(event)}
          >
            <Checkbox.Indicator>
              <CheckIcon className="h-5 w-5" />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <label className="leading-none text-slate-600 dark:text-slate-300">
            Show resolved
          </label>
        </div>
      </div>
      <Accordion.Root
        type="single"
        collapsible
        className="w-full border dark:border-gray-600 "
      >
        <RenderIssues user={user} checkedResolved={checkedResolved} />
      </Accordion.Root>
    </div>
  );
};

export default IssuesTable;
