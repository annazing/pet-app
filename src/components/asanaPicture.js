import React from "react";
import PropTypes from 'prop-types';

const AsanaPicture = ({ imgSrc, onClick, btnText }) => (
  <div className="search__item-container">
    <img src={imgSrc} className="search__pic"></img>
    <div className="search__middle-on-pic">
      <button className="search__btn-on-pic" onClick={onClick}>{btnText}</button>
    </div>
  </div>
);

AsanaPicture.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  btnText:  PropTypes.string.isRequired
}

export default AsanaPicture;