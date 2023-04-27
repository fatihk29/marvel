import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import md5 from 'md5';

const baseUrl = 'https://gateway.marvel.com/v1/public/';

const axiosClient = axios.create({
  baseURL: baseUrl,
});
const REACT_APP_PUBLIC_KEY = '7ca161b56b500073639cc0426e9bd9b4';
const REACT_APP_PRIVATE_KEY = '01e2ac3ce04576de2a62b80708bd25928376e9c5';

const dter = Date.now();

const HASH = md5(dter + REACT_APP_PRIVATE_KEY + REACT_APP_PUBLIC_KEY);

export const QUERY = `ts=${dter}&apikey=${REACT_APP_PUBLIC_KEY}&hash=${HASH}`;

axiosClient.interceptors.request.use(
  async configs => {
    const token = await AsyncStorage.getItem('token');
    configs.headers.authorization = `Bearer ${token}`;
    return configs;
  },
  error => {
    console.log('request Error:', error);
  },
);

axiosClient.interceptors.response.use(
  configs => {
    if (configs.status !== 200 && configs.status !== 201) {
      console.log('Server Api:', configs.status);
    }
    return configs;
  },
  error => {
    if (error.status !== 200 && error.status !== 201) {
      console.log('Server Api:', error);
    }
    return error;
  },
);

export default axiosClient;
