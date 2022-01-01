import { loginFunction } from "./lib/register";
import { getUserFunction } from "./lib/get-user";
import { createTokenFunction } from "./lib/create-token";
import { checkTokenFunction } from "./lib/check-token";
import { deleteUserFunction } from "./lib/delete-user";

class SimpleLogin {
    public async register(email: string, password: string, domain: string, domainkey: string): Promise<object> {
        const postUserRequest = await loginFunction(email, password, domain, domainkey);
        return postUserRequest;
    }

    public async getUser(email: string, domain: string, domainkey: string) {
        const getUserRequest = getUserFunction(email, domain, domainkey);
        return getUserRequest;
    }

    public async createToken(email: string) {
        const createTokenRequest = await createTokenFunction(email);
        return createTokenRequest;
    }

    public async checkToken(token: string) {
        const checkTokenRequest = await checkTokenFunction(token);
        return checkTokenRequest;
    }

    public async deleteUser(email: string, domain: string, domainkey: string) {
        const deleteUserRequest = deleteUserFunction(email, domain, domainkey);
        return deleteUserRequest;
    }
}

export const simpleLogin = new SimpleLogin();
