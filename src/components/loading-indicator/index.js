import * as React from 'react';
import loadingSrc from '../../static/om.png';
import './style.scss';

//componentDidMount() {
//   window.scrollTo(0, 0)
// }

const LoadingIndicator = () => (
  <div className='loading'>
    <div className='loading__indicator animation-bounce-out'>
      <img  src={loadingSrc}/>
    </div>
  </div>
);

export default LoadingIndicator;
