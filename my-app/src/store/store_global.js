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
    getCurrentUser() {
        fetch(
            'https://www.easy-mock.com/mock/59801fd8a1d30433d84f198c/example/user/all'
          )
            .then(res => res.json())
            .then(data => {
              console.log(data[0].id)
              this.test = data[0].id
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