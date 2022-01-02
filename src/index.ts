import { loginFunction } from "./lib-source/register";
import { getUserFunction } from "./lib-source/get-user";
import { createTokenFunction } from "./lib-source/create-token";
import { checkTokenFunction } from "./lib-source/check-token";
import { deleteUserFunction } from "./lib-source/delete-user";
import { CheckCredentialsType, RegisterType } from "./types/types";

class SimpleLogin {
    public register = async ({ email, password, domain, domainkey }: RegisterType) => {
        const postUserRequest = await loginFunction(email, password, domain, domainkey);
        return postUserRequest;
    };

    public getUser = async ({ email, domain, domainkey }: CheckCredentialsType) => {
        const getUserRequest = await getUserFunction(email, domain, domainkey);
        return getUserRequest;
    };

    public createToken = async (email: string) => {
        const createTokenRequest = await createTokenFunction(email);
        return createTokenRequest;
    };

    public checkToken = async (token: string) => {
        const checkTokenRequest = await checkTokenFunction(token);
        return checkTokenRequest;
    };

    public deleteUser = async ({ email, domain, domainkey }: CheckCredentialsType) => {
        const deleteUserRequest = await deleteUserFunction(email, domain, domainkey);
        return deleteUserRequest;
    };
}

export const simpleLogin = new SimpleLogin();