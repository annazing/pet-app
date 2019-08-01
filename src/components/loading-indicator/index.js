import * as React from 'react';
import loadingSrc from '../../static/om.png';
import './style.scss';

//componentDidMount() {
//   window.scrollTo(0, 0)
// }

const LoadingIndicator = () => (
  <div className='loading animation-bounce-out'>
    <img src={loadingSrc}/>
  </div>
);

export default LoadingIndicator;
