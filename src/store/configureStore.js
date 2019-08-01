import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/reducer';
import { devToolsEnhancer  } from 'redux-devtools-extension';

const configureStore = () => {
  const store = createStore (
    rootReducer,
    compose(
      applyMiddleware(thunkMiddleware), // lets us dispatch() functions
      devToolsEnhancer()
    )
  );

  return store;
}

export default configureStore;