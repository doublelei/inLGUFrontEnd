import { observable, action } from 'mobx';

const GlobalStore = observable( {
    notification: [],
    avatars: [],
    user_name: "",
    user_id: "",
    login: false,
    login_token: ""
} );

export default GlobalStore;