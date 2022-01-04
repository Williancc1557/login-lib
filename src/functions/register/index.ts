import axios from "axios";

export const loginFunction = async (email: string, password: string, domain: string, domainkey: string) => {
    const request = await axios.post("https://login-api-dev.herokuapp.com/users", {
        "email": email,
        "password": password,
        "domain": domain,
        "domainkey": domainkey,
    });
    return request.data;
};


