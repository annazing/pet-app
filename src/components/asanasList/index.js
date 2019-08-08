import React from "react";
import PropTypes from 'prop-types';
import AsanaPicture from '../asanaPicture/asanaPicture';
import './style.scss';

const AsanasList = ({ asanas, onItemClick, btnText, showTitle }) => (
  asanas.length > 0 &&
  <div className="grid-asanas">
    {asanas.map((asana, index) => (
        <AsanaPicture 
          asana={asana}
          index={index}
          showTitle={showTitle}
          onClick = {() => onItemClick(asana) }
          btnText = {btnText}
          key={asana.id ? asana.id : `item-index-${index}` }
        />
    ))}
  </div>
);

AsanasList.propTypes = {
  asanas: PropTypes.array.isRequired
}

export default AsanasList;