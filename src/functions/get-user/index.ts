import axios from "axios";

export const getUserFunction = async (email: string, domain: string, domainkey: string) => {
    const request = await axios.post("https://login-api-dev.herokuapp.com/users/get", {
        "email": email,
        "domain": domain,
        "domainkey": domainkey,
    });
    return request.data;
};