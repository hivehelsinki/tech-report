const calculateIssueTime = (time, createdOrClosed) => {
  const now = new Date();
  const diff = now - time;
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);
  const weeks = Math.floor(diff / 604800000);
  const months = Math.floor(diff / 2629800000);
  const years = Math.floor(diff / 31557600000);
  if (minutes < 1) {
    return `${createdOrClosed} ${minutes} minutes ago`;
  } else if (minutes < 60) {
    return `${createdOrClosed} ${minutes} minutes ago`;
  } else if (hours < 24) {
    return `${createdOrClosed} ${hours} hour${hours > 1 ? 's' : null} ago`;
  } else if (days < 7) {
    return `${createdOrClosed} ${days} day${days > 1 ? 's' : null} ago`;
  } else if (weeks < 4) {
    return `${createdOrClosed} ${weeks} week${weeks > 1 ? 's' : null} ago`;
  } else if (months < 12) {
    return `${createdOrClosed} ${months} month${months > 1 ? 's' : null} ago`;
  } else {
    return `${createdOrClosed} ${years} year${years > 1 ? 's' : null} ago`;
  }
};

export default calculateIssueTime;
