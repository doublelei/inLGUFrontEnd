import { observable, action } from 'mobx';

const FollowerStore = observable( {
    accounts: [],
} );

export default FollowerStore;