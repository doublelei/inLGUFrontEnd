import { observable, action } from 'mobx';

const GlobalStore = observable( {
    notification: [{"username": "Min Tian", "avatar": "/img/author-page.jpg", "time": "4 hours ago", "action": "commented"}, {"username": "Min Tian", "avatar": "/img/author-page.jpg", "time": "4 hours ago", "action": "commented"}],
    accounts: {"username": "Min Tian", 
                "avatar": "/img/author-page.jpg",
                "following_count": 87,
                "followers_count": 96},
} );

export default GlobalStore;