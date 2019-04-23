import { observable, action } from 'mobx';

const FollowStore = observable( {
<<<<<<< HEAD
    accounts: [],
=======
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
>>>>>>> aa0faade51280ef8eceafd346f0bde130db58cd0
} );

export default FollowStore;