import ky from "ky";
import {
  ChangePasswordRequest,
  ChangePasswordResponse,
  CheckSessionRequest,
  CheckSessionResponse,
  IAuthRepository,
  isChangePasswordResponse,
  isCheckSessionResponse,
  isSignInResponse,
  isSignOutResponse,
  isVerifyCodeResponse,
  SignInRequest,
  SignInResponse,
  SignOutResponse,
  VerifyCodeRequest,
  VerifyCodeResponse,
} from "repositories/auth/auth-repository.interface";

export class AuthRepository implements IAuthRepository {
  public signIn = async (req: SignInRequest): Promise<SignInResponse> => {
    const result = await ky.put("auth", { json: req }).json();

    if (isSignInResponse(result)) {
      return result;
    }

    throw new Error("API Error");
  };

  public signOut = async (): Promise<SignOutResponse> => {
    const result = await ky.put("auth/signout", { json: {} }).json();

    if (isSignOutResponse(result)) {
      return result;
    }

    throw new Error("API Error");
  };

  public checkSession = async (
    req: CheckSessionRequest
  ): Promise<CheckSessionResponse> => {
    const result = await ky
      .post("auth/check", {
        json: {},
        headers: { Authorization: `Bearer ${req.jwt}` },
      })
      .json();

    if (isCheckSessionResponse(result)) {
      return result;
    }

    throw new Error("API Error");
  };

  public changePassword = async (
    req: ChangePasswordRequest
  ): Promise<ChangePasswordResponse> => {
    const result = await ky.put("password/change", { json: req }).json();

    if (isChangePasswordResponse(result)) {
      return result;
    }

    throw new Error("API Error");
  };

  public verifyCode = async (
    req: VerifyCodeRequest
  ): Promise<VerifyCodeResponse> => {
    const result = await ky.put("code/verify", { json: req }).json();

    if (isVerifyCodeResponse(result)) {
      return result;
    }

    throw new Error("API Error");
  };
}
