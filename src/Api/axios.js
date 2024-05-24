import axios from "axios";

const axiosInstance = axios.create({
    // local instance of fiber base functions
    // baseURL:"http://127.0.0.1:5001/clone-c27be/us-central1/api",
    // deployed version of amazon server on render.com
    baseURL:"https://amazon-api-deploy-tnm2.onrender.com/",
})

export {axiosInstance}