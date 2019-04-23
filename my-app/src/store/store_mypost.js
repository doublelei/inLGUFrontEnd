import { observable, action } from 'mobx';

const MyPostStore = observable( {
    status_list: [],
} );

export default MyPostStore;