'use client';
import * as Accordion from '@radix-ui/react-accordion';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { useState, useEffect } from 'react';
import Issue from './Issue.jsx';
import Header from './Header.jsx';
import { useSortedIssues } from '@hooks/useSortedIssues.js';

const RenderIssues = ({ user, checkedResolved, checkedOnlyMine, sorting }) => {
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

  const sortedIssues = useSortedIssues(issues, sorting);

  if (sortedIssues.length > 0) {
    return (
      <Accordion.Root
        type="single"
        collapsible
        className="w-full border border-gray-600 dark:border-neutral-700/80"
      >
        {sortedIssues.map((issue) => {
          return (
            <Issue
              issue={issue}
              user={user}
              checkedResolved={checkedResolved}
              checkedOnlyMine={checkedOnlyMine}
              setTriggerSorting={setTriggerSorting}
              key={issue.id}
            />
          );
        })}
      </Accordion.Root>
    );
  }

  return (
    <div className="w-full pt-7 text-center">
      <p className="text-lg text-slate-300">No issues to display</p>
    </div>
  );
};

const IssuesTable = ({ user }) => {
  const [checkedResolved, setCheckedResolved] = useState(false);
  const [checkedOnlyMine, setCheckedOnlyMine] = useState(false);
  const [sorting, setSorting] = useState({ type: 'Created at', order: 'desc' });

  return (
    <div className="mt-11 w-full md:container">
      <div className="mb-5 flex w-full flex-row justify-end gap-5">
        <div className="flex items-center gap-2">
          <Checkbox.Root
            className="flex h-4 w-4 appearance-none items-center justify-center border border-slate-400 bg-white outline-none dark:bg-gray-900"
            onCheckedChange={(event) => setCheckedResolved(event)}
            id="resolved"
          >
            <Checkbox.Indicator>
              <CheckIcon className="h-5 w-5" />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <label
            className="leading-none text-slate-600 dark:text-slate-300"
            htmlFor="resolved"
          >
            Show resolved
          </label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox.Root
            className="flex h-4 w-4 appearance-none items-center justify-center border border-slate-400 bg-white outline-none dark:bg-gray-900"
            onCheckedChange={(event) => setCheckedOnlyMine(event)}
            id="mine"
          >
            <Checkbox.Indicator>
              <CheckIcon className="h-5 w-5" />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <label
            className="leading-none text-slate-600 dark:text-slate-300"
            htmlFor="mine"
          >
            Show only mine
          </label>
        </div>
      </div>
      <Header sorting={sorting} setSorting={setSorting} />
      <RenderIssues
        user={user}
        checkedResolved={checkedResolved}
        checkedOnlyMine={checkedOnlyMine}
        sorting={sorting}
      />
    </div>
  );
};

export default IssuesTable;
