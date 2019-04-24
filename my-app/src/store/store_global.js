import { observable, action } from 'mobx';
import { get_current_user} from '../api/api.js'

const GlobalStore = observable( {
    notification: [{"username": "Min Tian", "avatar": "/img/author-page.jpg", "time": "4 hours ago", "action": "commented"}, {"username": "Min Tian", "avatar": "/img/author-page.jpg", "time": "4 hours ago", "action": "commented"}],
    accounts: {"username": "Min Tian", 
                "avatar": "/img/author-page.jpg",
                "following_count": 87,
                "followers_count": 96},
    async getCurrentUser() {
        this.accounts = await get_current_user();
    }
} );

export default GlobalStore;