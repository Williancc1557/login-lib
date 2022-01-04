import axios from "axios";
import { UpdateUser } from "../../types/types";

export const updateUserFunction = async ({ email, domain, domainkey, newemail, newpassword }: UpdateUser) => {
    const request = await axios.post("https://login-api-dev.herokuapp.com/updateuser", {
        email: email,
        domain: domain,
        domainkey: domainkey,
        newemail: newemail,
        newpassword: newpassword,
    });
    return request.data;
};