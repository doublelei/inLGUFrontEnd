import axios from 'axios'
import { toast } from 'react-toastify'

export function get_weather(){
    return axios.get('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=8922ef9543099eda43742e0bfa5434f7')
    .then(response => {
        toast.success("Succeed")
        return response.data})
    .catch(error => {
        toast.warn("An Error Occured")
        console.log(error.response.data.message)
    })
}
