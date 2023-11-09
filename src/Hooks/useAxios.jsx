import axios from "axios";

const instance = axios.create({
    baseURL: 'https://b8a11-server-side-xi.vercel.app/',
    withCredentials:true;
    
  });

function useAxios() {
    return instance;
    
}

export default useAxios;
