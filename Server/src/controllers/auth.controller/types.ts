export interface RegisterValidatorInput {
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

export type RegisterValidatorReturn = RegisterErrors | null;

export interface LoginValidatorInput {
  email: string;
  password: string;
}

export type LoginValidatorReturn = { id: number; username: string } | null;
