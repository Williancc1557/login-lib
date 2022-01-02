import axios from "axios";

export const deleteUserFunction = async (email: string, domain: string, domainkey: string) => {
    const request = await axios.post("https://login-api-dev.herokuapp.com/deleteuser", {
        "email": email,
        "domain": domain,
        "domainkey": domainkey,
    });
    return request.data;
};