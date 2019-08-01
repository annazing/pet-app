import "@babel/polyfill";
import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import AsanaSearch from './components/asanaSearch';
import YogaSequence from './components/yogaSequence';

const store = configureStore();

const Index = () => {
  return (
     <Provider store={store}>
      <AsanaSearch/>
      <YogaSequence/>
     </Provider>
  );  
};

ReactDOM.render(<Index />, document.getElementById("index"));