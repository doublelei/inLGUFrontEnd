import { observable, action } from 'mobx';

const FollowStore = observable( {
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
    
} );

export default FollowStore;