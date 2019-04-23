import { observable, action } from 'mobx';
import {get_status} from '../api/api';

const HomepageStore = observable( {
    status_list: [],
    hot_tag: [],
    activity_feed: [],
    notification: [],
    async getList() {
        this.status_list = await get_status();
    }
} );

export default HomepageStore;