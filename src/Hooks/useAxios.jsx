import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000/',
    withCredentials:true;
    
  });

function useAxios() {
    return instance;
    
}

export default useAxios;
