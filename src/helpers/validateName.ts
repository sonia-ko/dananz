export const validateName = (name: string): boolean => {
  const validFormat = /^[a-zA-Z]+$/.test(name);
  const containsDissallowedSymbols = /[!#$%&*\/=?'+`|{}~]/.test(name);

  const nameValid = validFormat && !containsDissallowedSymbols;

  return nameValid;
};
