import { CheckCredentialsType, RegisterType } from "./types/types";
declare class SimpleLogin {
    register: ({ email, password, domain, domainkey }: RegisterType) => Promise<any>;
    getUser: ({ email, domain, domainkey }: CheckCredentialsType) => Promise<any>;
    createToken: (email: string) => Promise<any>;
    checkToken: (token: string) => Promise<any>;
    deleteUser: ({ email, domain, domainkey }: CheckCredentialsType) => Promise<any>;
}
export declare const simpleLogin: SimpleLogin;
export {};
//# sourceMappingURL=index.d.ts.map