import axios from "axios";

const endpoints = {
    registraion: (data) => axios.post("/v1/auth/email/register", data),
    login: (data) => axios.post("/v1/auth/email/login", data)
}

export default endpoints;