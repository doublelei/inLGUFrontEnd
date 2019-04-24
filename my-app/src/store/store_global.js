import { observable, action } from 'mobx';
import API from '../api/api.js'

const GlobalStore = observable( {
    notification: [{"username": "Min Tian", "avatar": "/img/author-page.jpg", "time": "4 hours ago", "action": "commented"}, {"username": "Min Tian", "avatar": "/img/author-page.jpg", "time": "4 hours ago", "action": "commented"}],
    accounts: {"username": "Min Tian", 
                "avatar": "/img/author-page.jpg",
                "following_count": 87,
                "followers_count": 96},
    test: {},
    list: [],
    async getCurrentUser(){
        this.test = await API.get_current_user();
    },
    async getList(){
        this.list = await API.getList();
    }
} );

export default GlobalStore;