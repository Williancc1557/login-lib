import { loginFunction } from "./functions/register";
import { getUserFunction } from "./functions/get-user";
import { createTokenFunction } from "./functions/create-token";
import { checkTokenFunction } from "./functions/check-token";
import { deleteUserFunction } from "./functions/delete-user";
import { CheckCredentialsType, RegisterType, UpdateUser } from "./types/types";
import { updateUserFunction } from "./functions/update-user";

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

    public updateUser = async ({ email, domain, domainkey, newemail, newpassword }: UpdateUser) => {
        const updateUserRequest = await updateUserFunction({
            email: email,
            domain: domain,
            domainkey: domainkey,
            newemail: newemail,
            newpassword: newpassword,
        });

        return updateUserRequest;
    };

    public deleteUser = async ({ email, domain, domainkey }: CheckCredentialsType) => {
        const deleteUserRequest = await deleteUserFunction(email, domain, domainkey);
        return deleteUserRequest;
    };
}

export const simpleLogin = new SimpleLogin();