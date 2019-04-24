import { observable, action, decorate } from 'mobx';
import GlobalStore from './store_global'
import { toast } from 'react-toastify';

const globalstore = new GlobalStore()
class HomepageStore {
    status_list = [
        {
            "account": { "username": "Min Tian", "avatar": "/img/author-page.jpg" }, "content": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.", "likes_count": "18", "replies_count": "20",
            "tags": ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag"], "created_at": "March 8 at 6:42pm",
            "comments": [{
                "account": { "username": "Min Tian", "avatar": "/img/author-page.jpg" }, "content": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.", "likes_count": "18", "replies_count": "20",
                "tags": ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag"], "created_at": "March 8 at 6:42pm", "replies_count": 10, "chidren": [{
                    "account": { "username": "Min Tian", "avatar": "/img/author-page.jpg" }, "content": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.", "likes_count": "18", "replies_count": "20",
                    "tags": ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag"], "created_at": "March 8 at 6:42pm", "replies_count": 0, "chidren": []
                }]
            }]
        }];

    hot_tag = ["hot_tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag"];
    activity_feed = [{ "avatar": "img/avatar49-sm.jpg", "name": "Marina Polson", "action": "commented", "targetname": "Jason Mark" }, { "avatar": "img/avatar49-sm.jpg", "name": "Marina Polson", "action": "commented", "targetname": "Jason Mark" }];
    notification = [];
    
    modal_id = ''

    weather_info = {};

    new_status = {
        content: '',
        language: 'zh-cn',
        account_id: globalstore.accounts.id,
        pinned: false,
        anonymous: false,
        reply_to_status_id: ''
    };

    like = {
        account_id: globalstore.accounts.id,
        status_id: ''
    };

    undo_like ={
        account_id: globalstore.accounts.id,
        status_id: ''
    };

    show_status_under_tag = '';

    add_tag = {
        status_id: '',
        tag_name: ''
    };

    timelinesPublic() {
        fetch(globalstore.basicURL + "/timelines/public", { mode: 'no-cors' })
            .then(res => res.json())
            .then(response => {
                this.status_list = response
            })
            .catch(error => {
                console.log("getTimeLinePublic failed")
            })
    };
    getHotTags() {
        fetch(globalstore.basicURL + "/tags/", { mode: 'no-cors' })
            .then(res => res.json())
            .then(response => {
                this.hot_tag = response
            })
            .catch(error => {
                console.log("getHotTags failed")
            })
    };

    
    showStatusUnderTag(){
        fetch(globalstore.basicURL + "/timelines/tag/" + this.show_status_under_tag)
        .then(res => res.json())
        .then(response => {
            this.status_list = response
        })
        .catch(error => {
            console.log("Show Statuses under Tag failed")
        })
      };    

    tagStatus(){
        fetch(globalstore.basicURL + "/statuses/" + this.add_tag + "/tag/new",
        {
            method: 'POST',
            body: JSON.stringify(this.add_tag),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res => res.json())
        .then(response => {console.log('Success:', response); toast.success("Add tag succeed")})
        .catch(error => {console.error('Error:', error); toast.error("Add tag failed")})
    };
    
    postStatus() {
        fetch(globalstore.basicURL + "/statuses",
        {
            method: 'POST',
            body: JSON.stringify(this.new_status),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res => res.json())
        .then(response => {console.log('Success:', response); toast.success("Posted")})
        .catch(error => {console.error('Error:', error); toast.error("Posted failed")})
    };

    likeStatus(){
        fetch(this.basicURL + "/status/" + this.like_status + "/like",
        {
            method: 'POST',
            body: JSON.stringify(this.like),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }
        ).then(res => res.json())
        .then(response => {console.log('Success:', response); toast.success("Liked")})
        .catch(error => {console.error('Error:', error); toast.error("Liked failed")})
      };

    undoLikeStatus(){
        fetch(this.basicURL + "/status/" + this.like_status + "/undo_like",
        {
            method: 'POST',
            body: JSON.stringify(this.undo_like),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }
        ).then(res => res.json())
        .then(response => {console.log('Success:', response); toast.success("Unliked")})
        .catch(error => {console.error('Error:', error); toast.error("Unliked failed")})
        
      };
}

decorate(HomepageStore, {
    status_list: observable,
    hot_tag: observable,
    activity_feed: observable,
    notification: observable,
    weather_info: observable,
    like: observable,
    undo_like: observable,
    new_status: observable,
    show_status_under_tag: observable,
    add_tag: observable,

    timelinesPublic: action,
    getHotTags: action,
    showStatusUnderTag: action,
    tagStatus: action,
    postStatus: action,
    likeStatus: action,
    undoLikeStatus: action
})

export default HomepageStore;