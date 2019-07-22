import { ADD_ASANA, DELETE_ASANA } from '../actions/actions'

const initialState = {
    sequence: []
  }

const yogaFlowReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_ASANA :
        return Object.assign({}, state, {
          sequence : [
            ...state.sequence,
            {
              id: action.payload.id,
              asanaName: action.payload.asanaName,
              asanaSrc: action.payload.asanaSrc
            }
          ]
        });
      case DELETE_ASANA:
        return { sequence: state.sequence.filter(asana => asana.id !== action.payload.id) };
      default:
        return state;
    }
}

export default yogaFlowReducer;