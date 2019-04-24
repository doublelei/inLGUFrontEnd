import { observable, action } from 'mobx';
import API from '../api/api';

const HomeStore = observable( {
    title: 'this is home page',
    list: [],

    // 获取首页数据
    async getList() {
        this.list = await API.getList();
    }
} );

export default HomeStore;