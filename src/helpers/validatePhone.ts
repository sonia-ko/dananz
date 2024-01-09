export const validatePhone = (phone: string): boolean => {
  const regex = /^[\d()+\s]+$/;
  const trimmedNumber = phone.trim();

  if (!regex.test(trimmedNumber)) {
    return false;
  }

  const digitsOnly = trimmedNumber.replace(/\D/g, "");
  const number = parseInt(digitsOnly, 10);

  return number.toString().length >= 6;
};
