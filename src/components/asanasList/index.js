import React from 'react';
import PropTypes from 'prop-types';
import AsanaPicture from '../asanaPicture/asanaPicture';
import Slider from "react-slick";
import '../../../node_modules/slick-carousel/slick/slick.scss';
import './style.scss';

const AsanasList = ({ asanas, onItemClick, btnText, showTitle }) => {
  const settings = {
    dots: true
  };

  return (
  asanas.length > 0 && 
  
  <div className="list">
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    <Slider {...settings}>
      {
        asanas.map((asana, index) => (
          <div key={asana.id ? asana.id : `item-index-${index}`} >
            <AsanaPicture 
              asana={asana}
              index={index}
              showTitle={showTitle}
              onClick = {() => onItemClick(asana) }
              btnText = {btnText}
            />
          </div>
        ))}
    </Slider>
  </div>
  );
};

AsanasList.propTypes = {
  asanas: PropTypes.array.isRequired
}

export default AsanasList;