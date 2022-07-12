import Axios from "axios";
import {authUrl} from "../env.json";
import { Login } from "./IAuth";

const api = Axios.create({
    baseURL: authUrl
})

export const fakeLogin = (user: Login) => {
    return {message: 'thats a fake login', status: true}
}

export const loginUser = async (user: Login) => {
    console.log(authUrl)
    console.log(user);
    await api.post("/login", user)
     .then(el => console.log(el))
     .catch(err => console.error(err));
}