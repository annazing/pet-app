import {createStore} from 'redux';
import rootReducer from '../reducers/reducer';
import { devToolsEnhancer  } from 'redux-devtools-extension';

const configureStore = () => {
    const store = createStore (rootReducer, devToolsEnhancer());

    return store;
}

export default configureStore;