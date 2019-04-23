import axios from 'axios'


function get_weather(){
    return axios.get('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=8922ef9543099eda43742e0bfa5434f7')
}
