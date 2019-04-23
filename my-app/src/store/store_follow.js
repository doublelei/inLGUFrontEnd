import { observable, action } from 'mobx';

const FollowStore = observable( {
    accounts: [],
} );

export default FollowStore;