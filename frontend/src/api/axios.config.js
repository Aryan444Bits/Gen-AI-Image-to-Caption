// import axios from "axios"

// const instance = axios.create({
//         baseURL: "http://localhost:3000/"
//     });

// export default instance;



import axios from "axios";

// // For common config
// axios.defaults.headers.post["Content-Type"] = "application/json";

const mainAxios = axios.create({
    baseURL: 'http://localhost:3000/'
});

const authAxios = axios.create({
    baseURL: 'http://localhost:3000/api/auth'
});

export {
  mainAxios,
  authAxios
};