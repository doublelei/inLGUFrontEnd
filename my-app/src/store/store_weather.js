import { observable, action } from 'mobx';
import {get_weather} from '../api/api_others.js'

const WeatherStore = observable( {
    status_list: [],
    hot_tag: [],
    activity_feed: [],
    notification: [],
    
    async getWeather() {
        this.status_list = await get_status(undefined, {id: "string"});
    }
} );

export default HomepageStore;