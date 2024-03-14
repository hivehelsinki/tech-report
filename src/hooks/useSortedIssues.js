import { useState, useEffect } from 'react';

export const useSortedIssues = (issues, sorting) => {
  const [sortedIssues, setSortedIssues] = useState([]);

  useEffect(() => {
    const sortIssues = (issues) => {
      return [...issues].sort((a, b) => {
        if (sorting.type === 'Created at') {
          return sorting.order === 'asc'
            ? new Date(a.created) - new Date(b.created)
            : new Date(b.created) - new Date(a.created);
        } else if (sorting.type === 'Host') {
          return sorting.order === 'asc'
            ? a.host.localeCompare(b.host)
            : b.host.localeCompare(a.host);
        } else if (sorting.type === 'Device') {
          return sorting.order === 'asc'
            ? a.device.localeCompare(b.device)
            : b.device.localeCompare(a.device);
        } else if (sorting.type === 'Status') {
          return sorting.order === 'asc'
            ? a.status.localeCompare(b.status)
            : b.status.localeCompare(a.status);
        } else if (sorting.type === 'User') {
          return sorting.order === 'asc'
            ? a.user.login.localeCompare(b.user.login)
            : b.user.login.localeCompare(a.user.login);
        }
      });
    };
    setSortedIssues(sortIssues(issues));
  }, [sorting, issues]);

  return sortedIssues;
};
