import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { deleteAsana,clearSequence } from '../../actions/actions';
import AsanasList from '../asanasList';
import './style.scss';

const YogaSequence = ({sequence, deleteAsana,clearSequence}) => {
  return (
    <div className="yoga-sequence">
      <h2>My sequence</h2>
      {
        sequence && sequence.length
          ? <div>
              <AsanasList 
                asanas={sequence}
                onItemClick={deleteAsana}
                btnText = 'Delete from sequence'
                showTitle={true}
              />
              <button onClick={clearSequence}>Clear sequence</button>
            </div>
          : "No asanas, yay!"
      }
    </div>
  );
};

const mapStateToProps = state => {
    return { sequence: state.sequence } ; 
};

const mapDispatchToProps = dispatch => {
  return {
    deleteAsana: asana => {
      dispatch(deleteAsana(asana))
    },
    clearSequence: () => {
       dispatch(clearSequence());
    }
  }
};

YogaSequence.propTypes = {
  sequence:  PropTypes.array.isRequired,
  deleteAsana: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(YogaSequence);