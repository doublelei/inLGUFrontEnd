import { observable, action, decorate } from 'mobx';
import GlobalStore from './store_global'

const globalstore = new GlobalStore()
class FollowerStore {
    accounts = [{
        "username": "Min Tian",
        "avatar": "/img/author-page.jpg", "followers_count": "10",
        "following_count": "20",
        "statuses_count": "30"
    }, {
        "username": "Min Tian",
        "avatar": "/img/author-page.jpg", "followers_count": "10",
        "following_count": "20",
        "statuses_count": "30"
    }, {
        "username": "Min Tian",
        "avatar": "/img/author-page.jpg", "followers_count": "10",
        "following_count": "20",
        "statuses_count": "30"
    }, {
        "username": "Min Tian",
        "avatar": "/img/author-page.jpg", "followers_count": "10",
        "following_count": "20",
        "statuses_count": "30"
    }];
    getfollower() {
        fetch(globalstore.basicURL + "/accounts/" + globalstore.accounts.id + "/followers")
        .then(res => res.json())
        .then(response => {
            this.accounts = response
        })
        .catch(error => {
            console.log("error.response.data.message")
        })
    }
    follow() {
        return
    }
}

decorate(FollowerStore, {
    accounts: observable,
    getfollower: action
})

export default FollowerStore;