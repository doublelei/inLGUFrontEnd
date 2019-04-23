import { observable, action } from 'mobx';
import {get_status} from '../api/api';

const MyPostStore = observable( {
    status_list: [],
    async getList() {
        this.status_list = await get_status();
    }
} );

export default MyPostStore;