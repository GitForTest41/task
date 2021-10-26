export const isLengthValid = (phrase: string) => {
  return phrase.length >3

};

export const isEmailValid = (email: string): boolean => {
  return email.includes('@') && email.length >= 3;
};

export const IsPasswordsAreTheSame = (password1: string, password2: string) => {
  return password1 === password2;
};

export const isPasswordIsValid = (password: string) => {
  const passModel = new RegExp("^.*(?=.{5,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])[a-zA-Z0-9@#$%^&+=]*$");
  return passModel.test(password);
};

// Minimum 5 characters {>>8,20}
// Maximum 15 characters {8,>>20}
// At least one uppercase character (?=.*[A-Z])
// At least one lowercase character (?=.*[a-z])
// At least one digit (?=.*\d)
// At least one special character (?=.*[a-zA-Z >>!#$%&? "<<])[a-zA-Z0-9 >>!#$%&?<< ]