import { observable, action } from 'mobx';
import {get_status} from '../api/api';

const FollowerStore = observable( {
    accounts: [],
    async getList() {
        this.status_list = await get_status();
    }
} );

export default FollowerStore;