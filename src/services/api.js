import axios from 'axios'
import urls from './urls'

const apiConfigs = urls()

axios.interceptors.request.use((request) => {
  console.log('Starting Request:', {
    url: request.url,
    method: request.method,
    headers: request.headers
  });
  return request;
})

axios.interceptors.response.use((response) => {
  console.log('Response:', {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers
  });
  return response;
})


const api = axios.create({
  baseURL: apiConfigs.rootedu, //https://jsonplaceholder.typicode.com
  //baseURL: 'http://localhost:8088/api/front/v1/', // localhost
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'X-Requested-Store': 'default',
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'X-CHANNEL': 'sctv9',
    // 'X-LANG': 'vi',
    Authorization: 'Bearer 1|cwzrXOy1qfB4b7emEHHi2vxh7TwIJE1JdRBA7FIy', // production
    //Authorization: 'Bearer 3|gltbPu9asRosvYSfXZYMPEkmuxRv7VLIBOFKKcgg', // local
    
    //Authorization: 'oEonkeqyD6Z1T1BwK8XaKHKCwBvVXZmLa', // localhost
  },
})

export default api