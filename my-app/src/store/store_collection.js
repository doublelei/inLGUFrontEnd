import { observable, action } from 'mobx';
const CollectionStore = observable( {
    status_list: [],
} );

export default CollectionStore;