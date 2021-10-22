export const isLengthValid = (text: string): boolean => {
  return text.length < 3;
};

export const validLength = (text: string) => {
  if (!isLengthValid(text)) {
    throw new Error('is to short');
  }
};

export const isEmailValid = (email: string): boolean => {
  return email.includes('@') && email.length >= 3;
};
