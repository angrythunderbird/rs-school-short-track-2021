function getEmailDomain(email) {
  const domainArr = email.split('@');
  return domainArr[domainArr.length - 1];
}

module.exports = getEmailDomain;
