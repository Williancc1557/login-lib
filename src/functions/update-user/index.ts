import axios from "axios";
import { UpdateUser } from "../../types/types";

export const updateUserFunction = async ({ email, domain, domainKey, newEmail, newPassword }: UpdateUser) => {
    const request = await axios.post("https://login-api-dev.herokuapp.com/updateuser", {
        email: email,
        domain: domain,
        domainKey: domainKey,
        newEmail: newEmail,
        newPassword: newPassword,
    });
    return request.data;
};