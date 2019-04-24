import { observable, action, decorate } from 'mobx';
import GlobalStore from './store_global'

const globalstore = new GlobalStore()
class FollowStore {
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
    getfollowing() {
        fetch(globalstore.basicURL + "/accounts/" + globalstore.accounts.id + "/following")
        .then(res => res.json())
        .then(response => {
            console.log("following")
            console.log(response)
            this.accounts = response
        })
        .catch(error => {
            console.log("error.response.data.message")
        })
    }
}
decorate(FollowStore, {
    accounts: observable,
    getfollowing: action
})

export default FollowStore;