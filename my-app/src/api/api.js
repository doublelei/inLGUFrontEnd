import URL from './url'
import axios from 'axios'
import { toast } from 'react-toastify'
//import Store from

// MOCKDATA ------------------------------------------------------------------------------
var MockAdapter = require('axios-mock-adapter');
var mock = new MockAdapter(axios);
mock.onGet('/current_user').reply(200, {
    "username": "Leo"
}
);

// CONFIG ----------------------------------------------------------------------
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// 响应拦截器
axios.interceptors.response.use(
    response => {
        if (response.status === 200) {
            toast.success("Operation Succeed")
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    error => {
        if (error.response.status) {
            switch (error.response.status) {
                // 401 Not Loginned                
                case 401:
                    toast.info("Need Login");
                    //browserHistory.push('/Login');
                    break;
                // 403 Token expired          
                case 403:
                    toast.warn("Session Expired");
                    // clear token
                    localStorage.removeItem('token');
                    //store.commit('loginSuccess', null);
                    // jump to login page
                    setTimeout(() => {
                        //browserHistory.push('/Login');              
                    }, 1000);
                    break;

                // 404 Not found
                case 404:
                    toast.error("Resource Not Found")
                    //browserHistory.push('/404')
                    break;
                // Others
                default:
                    toast.error(error.response.data.message);
            }
            return Promise.reject(error.response);
        }
    }
);


// MOCK TEST
export function get_current_user(url = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=8922ef9543099eda43742e0bfa5434f7') {
    return fetch(url, { credentials: 'same-origin' })
        .then(response => {
            return response.json()
        })
}

// STATUS ----------------------------------------------------------------------
export function get_status(url = URL.get_status, params = {}) {
    return axios.get(url, params)
        .then(response => {
            console.log("succeed")
            return response.data
        })
        .catch(error => {
            console.log("failed")
            console.log(error.response.data.message)
        })
}

export function get_comments(url = URL.get_status_context, params = {}) {
    return axios.get(url, params)
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.log(error.response.data.message)
        })
}

export function post_status(url = URL.post_status, params = {}) {
    return axios.post(url, params)
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.log(error.response.data.message)
        })
}

export function mget(url, params = {}) {
    return axios.get(url, params)
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.log(error.response.data.message)
        })
}

export function mpost(url, params = {}) {
    return axios.post(url, params)
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.log(error.response.data.message)
        })
}

export function get_weather() {
    return axios.get('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=8922ef9543099eda43742e0bfa5434f7')
        .then(response => {
            console.log(response)
            toast.success("Succeed")
            return response.data
        })
        .catch(error => {
            console.log(error.response.data.message)
            toast.warn("An Error Occured")
        })
}
