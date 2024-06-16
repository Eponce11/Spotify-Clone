export const containsAnyLetters = (str: string): boolean =>
  /[a-zA-z]/.test(str);

export const containsAnyNumbers = (str: string): boolean => /[0-9]/.test(str);
