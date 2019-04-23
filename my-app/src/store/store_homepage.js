import { observable, action } from 'mobx';
import {get_status} from '../api/api.js'

const HomepageStore = observable( {
    status_list: [],
    hot_tag: [],
    activity_feed: [],
    notification: [],
    
    async getStatusList() {
        this.status_list = await get_status(undefined, {id: "string"});
    },
    async getComments(statusId) {
        this.status_list[statusId['comments']] = await get_status(undefined, {id: statusId});
    }
} );

export default HomepageStore;