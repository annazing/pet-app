import {createStore} from 'redux';
import yogaFlowReducer from '../reducers/reducer'

const configureStore = () => {
    const store = createStore (yogaFlowReducer);

    return store;
}

export default configureStore;