import React from "react";
import PropTypes from 'prop-types';
import AsanaPicture from './asanaPicture';

const AsanasList = ({ asanas, onItemClick, btnText, showTitle }) => (
  asanas.length > 0 &&
  <div className="asanas__list">
    {asanas.map((asana, index) => (
      <div className="asanas__item-container" key={asana.id}>
        <p>{index}</p>
        { showTitle && <p>{asana.asanaName}</p> }
        <AsanaPicture 
          imgSrc={asana.asanaSrc}
          onClick = {() => onItemClick(asana) }
          btnText = {btnText}
        />
      </div>
    ))}
  </div>
);

AsanasList.propTypes = {
  asanas: PropTypes.array.isRequired
}

export default AsanasList;