export interface RegisterValidationInput {
  username: string;
  email: string;
  password: string;
  dob: string;
}

export interface RegisterErrors {
  errors: {
    username?: string;
    email?: string;
    password?: string;
    dob?: string;
  };
}

export type RegisterValidationReturn = RegisterErrors | null;