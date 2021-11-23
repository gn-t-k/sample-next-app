export type SignInRequest = {
  id: string;
  password: string;
};

export type SignInResponse = {
  status: string;
  token: string;
};

export type SignOutResponse = {
  status: string;
};

export type CheckSessionRequest = {
  jwt: string;
};

export type CheckSessionResponse = {
  status: string;
  token: string;
};

export type ChangePasswordRequest = {
  password: string;
};

export type ChangePasswordResponse = {
  status: string;
};

export type VerifyCodeRequest = {
  code: string;
};

export type VerifyCodeResponse = {
  status: string;
};

export interface IAuthRepository {
  signIn: (req: SignInRequest) => Promise<SignInResponse>;
  signOut: () => Promise<SignOutResponse>;
  checkSession: (req: CheckSessionRequest) => Promise<CheckSessionResponse>;
  changePassword: (
    req: ChangePasswordRequest
  ) => Promise<ChangePasswordResponse>;
  verifyCode: (req: VerifyCodeRequest) => Promise<VerifyCodeResponse>;
}

const isString = (value: unknown): value is string => typeof value === "string";
const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

export const isSignInResponse = (arg_0: unknown): arg_0 is SignInResponse =>
  isObject(arg_0) &&
  "status" in arg_0 &&
  isString(arg_0["status"]) &&
  "token" in arg_0 &&
  isString(arg_0["token"]);

export const isSignOutResponse = (arg_0: unknown): arg_0 is SignOutResponse =>
  isObject(arg_0) && "status" in arg_0 && isString(arg_0["status"]);

export const isCheckSessionResponse = (
  arg_0: unknown
): arg_0 is CheckSessionResponse =>
  isObject(arg_0) &&
  "status" in arg_0 &&
  isString(arg_0["status"]) &&
  "token" in arg_0 &&
  isString(arg_0["token"]);

export const isChangePasswordResponse = (
  arg_0: unknown
): arg_0 is ChangePasswordResponse =>
  isObject(arg_0) && "status" in arg_0 && isString(arg_0["status"]);

export const isVerifyCodeResponse = (
  arg_0: unknown
): arg_0 is VerifyCodeResponse =>
  isObject(arg_0) && "status" in arg_0 && isString(arg_0["status"]);
