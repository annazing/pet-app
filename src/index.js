import "@babel/polyfill";
import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import AsanaSearch from './components/asanaSearch/index';
import YogaSequence from './components/yogaSequence/index';
import Header from './components/header/index';
import 'normalize.css';
import './scss/app.scss';

const store = configureStore();

const Index = () => {
  return (
     <Provider store={store}>
      <div className="parallax-wrapper">
        <Header/>
        <AsanaSearch/>
        <YogaSequence/>
      </div>
     </Provider>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));