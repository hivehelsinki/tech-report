const buildHostSuggestion = (ip, hosts) => {
  const ipSections = ip.split('.');
  const possibleHost = `c${ipSections[1][1]}r${ipSections[2]}p${ipSections[3]}}`;
  if (hosts.includes(possibleHost)) {
    return possibleHost;
  } else {
    return '';
  }
};
export default buildHostSuggestion;
