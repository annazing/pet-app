import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const AsanaPicture = ({ asana, index, showTitle, onClick, btnText }) => (
  <div className='asana-picture'>
    <p>{index}</p>
    { showTitle && <p>{asana.asanaName}</p> }

    <img src={asana.asanaSrc} className='asana-picture__pic'></img>
    <button className='asana-picture__btn' onClick={onClick}>{btnText}</button>
  </div>
);

AsanaPicture.propTypes = {
  asana: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  btnText:  PropTypes.string.isRequired
}

export default AsanaPicture;