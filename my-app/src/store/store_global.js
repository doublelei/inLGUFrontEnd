import { observable, action, decorate } from 'mobx';
import { get_current_user} from '../api/api.js'

class GlobalStore {
    basicURL = "http://10.30.176.243:5000/api/v1";
    notification = [{ "username": "Min Tian", "avatar": "/img/author-page.jpg", "time": "4 hours ago", "action": "commented" }, { "username": "Min Tian", "avatar": "/img/author-page.jpg", "time": "4 hours ago", "action": "commented" }];
    accounts = {
        "username": "Min Tian",
        "avatar": "/img/author-page.jpg",
        "following_count": 87,
        "followers_count": 96,
        "id" : "c431dc96-114b-4fcc-9765-2e2678334685"
    };
    getCurrentUser() {
        fetch(
            'http://10.30.176.243:5000/api/v1/accounts/c431dc96-114b-4fcc-9765-2e2678334685'
          )
            .then(res => res.json())
            .then(data => {
              console.log(data)
              this.accounts = data
            })
            .catch(e => console.log('错误:', e))
    }
}

decorate(GlobalStore, {
    notification: observable,
    accounts: observable,
    test: observable,
    getCurrentUser: action
})

export default GlobalStore;