import { loginFunction } from "./lib/register";
import { getUserFunction } from "./lib/get-user";
import { createTokenFunction } from "./lib/create-token";
import { checkTokenFunction } from "./lib/check-token";
import { deleteUserFunction } from "./lib/delete-user";
import { CheckCredentialsType, RegisterType } from "./types/types";


class SimpleLogin {
    public register = async ({ email, password, domain, domainkey }: RegisterType): Promise<object> => {
        const postUserRequest = await loginFunction(email, password, domain, domainkey);
        return postUserRequest;
    };

    public getUser = async ({ email, domain, domainkey }: CheckCredentialsType): Promise<object> => {
        const getUserRequest = await getUserFunction(email, domain, domainkey);
        return getUserRequest;
    };

    public async createToken(email: string): Promise<object> {
        const createTokenRequest = await createTokenFunction(email);
        return createTokenRequest;
    }

    public async checkToken(token: string): Promise<object> {
        const checkTokenRequest = await checkTokenFunction(token);
        return checkTokenRequest;
    }

    public async deleteUser({ email, domain, domainkey }: CheckCredentialsType): Promise<object> {
        const deleteUserRequest = await deleteUserFunction(email, domain, domainkey);
        return deleteUserRequest;
    }
}

export const simpleLogin = new SimpleLogin();