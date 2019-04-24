import { observable, action, decorate } from 'mobx';
import { get_current_user} from '../api/api.js'

class GlobalStore {
    notification = [{ "username": "Min Tian", "avatar": "/img/author-page.jpg", "time": "4 hours ago", "action": "commented" }, { "username": "Min Tian", "avatar": "/img/author-page.jpg", "time": "4 hours ago", "action": "commented" }];
    accounts = {
        "username": "Min Tian",
        "avatar": "/img/author-page.jpg",
        "following_count": 87,
        "followers_count": 96
    };
    test = 0;
    
}

decorate(GlobalStore, {
    notification: observable,
    accounts: observable,
    test: observable
})

export default GlobalStore;