export const validateEmail = (email: string): boolean => {
  const validFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const containsDissallowedSymbols = /[!#$%&*\/=?'+`|{}~]/.test(email);

  const emailValid = validFormat && !containsDissallowedSymbols;

  return emailValid;
};
