import React from 'react';
import AsanaPicture from './asanaPicture';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { deleteAsana } from '../actions/actions';

const YogaSequence = ({sequence, deleteAsana}) => {
  const deleteFromSequence = (id) => {
    deleteAsana(id);
  };

  return (
    <div className="yoga-sequence">
      {
        sequence && sequence.length
          ? sequence.map((asana, index) => {
              return <div key={asana.id}>
                <p>{index}</p>
                <p>{asana.asanaName}</p>
                <AsanaPicture
                  imgSrc={asana.asanaSrc}
                  onClick = {() => deleteFromSequence(asana.id) }
                  btnText = 'Delete from sequence'
                />
              </div>;
            })
          : "No asanas, yay!"
      }
    </div>
  );
};

//mapStateToProps: called every time the store state changes. 
//It receives the entire store state, and should return an object of data this component needs.
const mapStateToProps = state => {
    return { sequence: state.sequence } ; 
}

YogaSequence.propTypes = {
  sequence:  PropTypes.array.isRequired,
  deleteAsana: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {deleteAsana} )(YogaSequence)