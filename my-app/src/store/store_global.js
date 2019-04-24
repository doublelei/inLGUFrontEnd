import { observable, action, decorate } from 'mobx';
import { get_current_user} from '../api/api.js'

class GlobalStore {
    basicURL = "http://127.0.0.1:5000/api/v1";
    notification = [{ "username": "Min Tian", "avatar": "/img/author-page.jpg", "time": "4 hours ago", "action": "commented" }, { "username": "Min Tian", "avatar": "/img/author-page.jpg", "time": "4 hours ago", "action": "commented" }];
    accounts = {
        "username": "Min Tian",
        "avatar": "/img/author-page.jpg",
        "following_count": 87,
        "followers_count": 96,
        "id" : "767d0650-671b-4983-8c22-c0eb75fa29b4"
    };
    getCurrentUser() {
        fetch(this.basicURL + "/accounts/" + this.accounts.id)
            .then(res => res.json())
            .then(data => {
              this.accounts = data
            })
            .catch(e => console.log('错误:', e))
    };
    
}   

decorate(GlobalStore, {
    notification: observable,
    accounts: observable,
    test: observable
})

export default GlobalStore;