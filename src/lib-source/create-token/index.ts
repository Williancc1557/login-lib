import axios from "axios";

export const createTokenFunction = async (email: string) => {
    const request = await axios.post("https://login-api-dev.herokuapp.com/createtoken", {
        "email": email,
    });
    return request.data;
};