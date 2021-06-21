import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://ecommerce-5aa23-default-rtdb.firebaseio.com/'
});

export default axiosInstance;