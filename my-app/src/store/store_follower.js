import { observable, action } from 'mobx';
import {get_status} from '../api/api';

const FollowerStore = observable( {
    accounts: [{"username": "Min Tian", 
    "avatar": "/img/author-page.jpg", "followers_count": "10",
    "following_count": "20",
    "statuses_count": "30"}, {"username": "Min Tian", 
    "avatar": "/img/author-page.jpg", "followers_count": "10",
    "following_count": "20",
    "statuses_count": "30"},{"username": "Min Tian", 
    "avatar": "/img/author-page.jpg", "followers_count": "10",
    "following_count": "20",
    "statuses_count": "30"}, {"username": "Min Tian", 
    "avatar": "/img/author-page.jpg", "followers_count": "10",
    "following_count": "20",
    "statuses_count": "30"}],
    async getList() {
        this.status_list = await get_status();
    }
} );

export default FollowerStore;