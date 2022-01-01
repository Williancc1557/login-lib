import axios from "axios";

export const checkTokenFunction = async (token: string) => {
    const request = await axios.get(`https://login-api-dev.herokuapp.com/verifyauth/${token}`);
    return request.data;
};