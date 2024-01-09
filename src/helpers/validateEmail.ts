export const validateEmail = (email: string): boolean => {
  const validFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
  const containsDissallowedSymbols = /[!#$%&*\/=?',+`|{}~]/.test(email);

  const emailValid = validFormat && !containsDissallowedSymbols;

  return emailValid;
};
