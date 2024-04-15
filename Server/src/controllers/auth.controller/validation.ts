import {
  RegisterValidationInput,
  RegisterErrors,
  RegisterValidationReturn,
} from "./types";
import { Context, MockContext } from "../../config/context.config";

export const emailValidator = (val: string): boolean => {
  return /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val);
};

export const registerValidation = async (
  data: RegisterValidationInput,
  ctx: Context | MockContext
): Promise<RegisterValidationReturn> => {
  const { username, email, password, dob } = data;
  const errors: RegisterErrors = { errors: {} };

  if (!username) {
    errors.errors.username = "Username is required";
  } else if (username.length < 3) {
    errors.errors.username = "Username must be 3 chars";
  }

  if (!email) {
    errors.errors.email = "Email is required";
  } else if (!emailValidator(email)) {
    errors.errors.email = "Invalid Email";
  } else {
    const emailUsed = await ctx.prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (emailUsed) {
      errors.errors.email = "Email in use";
    }
  }

  if (!password) {
    errors.errors.password = "Password is required";
  } else if (password.length < 8) {
    errors.errors.password = "Password must be 8 chars";
  }

  if (!dob) {
    errors.errors.dob = "DOB is required";
  }

  if (Object.keys(errors.errors).length > 0) return errors;

  return null;
};
