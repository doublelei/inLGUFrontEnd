import { observable, action } from 'mobx';
import {get_status} from '../api/api.js'

const HomepageStore = observable( {
    status_list: [
        {"account": {"username": "Min Tian", "avatar": "/img/author-page.jpg"}, "content": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.", "likes_count": "18", "replies_count":"20", 
    "tags": ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag"], "created_at": "March 8 at 6:42pm", 
    "comments": [{"account": {"username": "Min Tian", "avatar": "/img/author-page.jpg"}, "content": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.", "likes_count": "18", "replies_count":"20", 
    "tags": ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag"], "created_at": "March 8 at 6:42pm"}, {"account": {"username": "Min Tian", "avatar": "/img/author-page.jpg"}, "content": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.", "likes_count": "18", "replies_count":"20", 
    "tags": ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag"], "created_at": "March 8 at 6:42pm"}]}],
    hot_tag: ["hot_tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag"],
    activity_feed: [{"avatar": "img/avatar49-sm.jpg", "name": "Marina Polson", "action":"commented", "targetname":"Jason Mark"}, {"avatar": "img/avatar49-sm.jpg", "name": "Marina Polson", "action":"commented", "targetname":"Jason Mark"}],
    notification: [],
    
    async getStatusList() {
        this.status_list = await get_status(undefined, {id: "string"});
    },
    async getComments(statusId) {
        this.status_list[statusId['comments']] = await get_status(undefined, {id: statusId});
    }
} );

export default HomepageStore;