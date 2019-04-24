import { observable, action, decorate } from 'mobx';
import { get_following } from '../api/api.js'
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
        fetch('http://10.30.176.243:5000/api/v1/accounts/c431dc96-114b-4fcc-9765-2e2678334685/following')
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