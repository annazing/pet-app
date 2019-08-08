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
      <div className="parallax">
        <div className="parallax__group">
          <div className="parallax__layer parallax__layer--base">
            <Header/>
            <AsanaSearch/>
            <YogaSequence/>
          </div>
          <div className="parallax__layer parallax__layer--back parallax__pattern">
          </div>
        </div>
        {/* <div className="parallax__group">
          <div className="parallax__layer parallax__layer--base ">
           
          </div>
          <div className="parallax__layer parallax__layer--back parallax__pattern">
          </div>
        </div> */}
      </div>
     </Provider>
  );  
};

ReactDOM.render(<Index />, document.getElementById("index"));