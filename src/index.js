import "@babel/polyfill";
import React from 'react';
import ReactDOM from "react-dom";
import AsanaSearch from './components/asanaSearch';

const Index = () => {
  return (
    <AsanaSearch/>
  );  
};

ReactDOM.render(<Index />, document.getElementById("index"));