import { apiSlice } from "../apiSlice";
import { LoginCredentials, LoginResponse } from "./types";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginCredentials>({
      query: (data: LoginCredentials) => ({
        url: "/auth/login",
        method: "POST",
        body: { ...data },
      }),
    }),
    emailValidation: builder.mutation<any, any>({
      query: (data: any) => ({
        url: "/auth/emailValidation",
        method: "POST",
        body: { ...data },
      }),
    }),
  }),
});

export const { useLoginMutation, useEmailValidationMutation } = authApiSlice;
