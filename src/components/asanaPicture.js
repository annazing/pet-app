import React from "react";
import PropTypes from 'prop-types';

const AsanaPicture = ({ imgSrc, onClick, btnText }) => (
  <div>
    <img src={imgSrc} className="asanas__pic"></img>
    <div className="asanas__middle-on-pic">
      <button className="asanas__btn-on-pic" onClick={onClick}>{btnText}</button>
    </div>
  </div>
);

AsanaPicture.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  btnText:  PropTypes.string.isRequired
}

export default AsanaPicture;