interface RegisterPassword {
    password: string;
}

export interface CheckCredentialsType {
    domainKey: string;
    domain: string;
    email: string;
}

interface Update {
    newEmail?: string;
    newPassword?: string;
}

export type UpdateUser = CheckCredentialsType & Update;

export type RegisterType = CheckCredentialsType & RegisterPassword;