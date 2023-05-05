'use client';
import * as Accordion from '@radix-ui/react-accordion';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { useState, useEffect } from 'react';
import Issue from './Issue.jsx';

const RenderIssues = ({ props }) => {
  const { issues, user, checkedResolved } = props;
  if (issues.length > 0)
    return props.issues.map((issue, i) => {
      if (issue.userId === user.id || user.admin === true)
        return <Issue props={{ issue, user, checkedResolved }} key={i} />;
    });
};

const IssuesTable = ({ user }) => {
  const [checkedResolved, setCheckedResolved] = useState(false);
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchInfo = async () => {
      const data = await fetch('/api/issues');
      const jsonData = await data.json();
      console.log(jsonData);

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
              onCheckedChange={(event) => setCheckedResolved(event)}
            >
              <Checkbox.Indicator>
                <CheckIcon className="h-5 w-5" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            <label className="leading-none text-slate-600">Resolved</label>
          </div>
        </div>
        <Accordion.Root type="single" collapsible className="w-full border">
          <RenderIssues props={{ issues, user, checkedResolved }} />
        </Accordion.Root>
      </div>
    );
  }
};

export default IssuesTable;
