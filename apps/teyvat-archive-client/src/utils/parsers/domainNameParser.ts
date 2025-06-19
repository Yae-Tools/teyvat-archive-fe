const domainNameParser = (domainName: string) => {
  // remove the prefix "Domain of" from the domain name
  const prefix = "Domain of ";
  if (domainName.startsWith(prefix)) {
    return domainName.slice(prefix.length);
  }
  return domainName;
};

export default domainNameParser;
