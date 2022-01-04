import { loginFunction } from "./functions/register";
import { getUserFunction } from "./functions/get-user";
import { createTokenFunction } from "./functions/create-token";
import { checkTokenFunction } from "./functions/check-token";
import { deleteUserFunction } from "./functions/delete-user";
import { CheckCredentialsType, RegisterType, UpdateUser } from "./types/types";
import { updateUserFunction } from "./functions/update-user";

class SimpleLogin {
    public register = async ({ email, password, domain, domainKey }: RegisterType) => {
        const postUserRequest = await loginFunction(email, password, domain, domainKey);
        return postUserRequest;
    };

    public getUser = async ({ email, domain, domainKey }: CheckCredentialsType) => {
        const getUserRequest = await getUserFunction(email, domain, domainKey);
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

    public updateUser = async ({ email, domain, domainKey, newEmail, newPassword }: UpdateUser) => {
        const updateUserRequest = await updateUserFunction({
            email: email,
            domain: domain,
            domainKey: domainKey,
            newEmail: newEmail,
            newPassword: newPassword,
        });

        return updateUserRequest;
    };

    public deleteUser = async ({ email, domain, domainKey }: CheckCredentialsType) => {
        const deleteUserRequest = await deleteUserFunction(email, domain, domainKey);
        return deleteUserRequest;
    };
}

export const simpleLogin = new SimpleLogin();