import axios from "axios";

const axiosInstance = axios.create({
    // baseURL:'http://127.0.0.1:5001/clone-c27be/us-central1/api',
    baseURL:'https://amazon-api-backend-e41s.onrender.com',
});



export {axiosInstance};