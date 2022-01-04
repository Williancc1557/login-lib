interface RegisterPassword {
    password: string;
}

export interface CheckCredentialsType {
    domainkey: string;
    domain: string;
    email: string;
}

interface Update {
    newemail?: string;
    newpassword?: string;
}

export type UpdateUser = CheckCredentialsType & Update;

export type RegisterType = CheckCredentialsType & RegisterPassword;