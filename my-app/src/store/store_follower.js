import { observable, action, decorate } from 'mobx';

class FollowerStore{
    accounts = [{"username": "Min Tian", 
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
    "statuses_count": "30"}]
}

decorate(FollowerStore, {
    accounts: observable,
})

export default FollowerStore;