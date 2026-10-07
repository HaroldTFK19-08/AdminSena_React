import axios from "axios";
import { env } from "../config/env";

const api = axios.create({
    baseURL: `${env.apiUrl}/v1`,
    timeout: env.apiTimeout,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});
export default api;