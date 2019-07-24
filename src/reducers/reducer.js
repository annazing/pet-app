import { combineReducers } from 'redux';
import { ADD_ASANA, DELETE_ASANA } from '../actions/actions';
import { SEARCH_REQUEST, SEARCH_SUCCESS } from '../actions/actions';

const initialState = {
    search: {
      loading: false,
      phrase: '',
      resultsPage: 0,
      results: []
    },
    sequence: []
  };


//utility

function updateObject(oldObject, newValues) {
  // Encapsulate the idea of passing a new object as the first parameter
  // to Object.assign to ensure we correctly copy data instead of mutating
  return Object.assign({}, oldObject, newValues)
}

function addItemInArray(stateArray, newItem) {
  const newItems = stateArray.concat(newItem);

  return updateObject(stateArray, { todos: newItems })
}

const yogaFlowReducer = (state = initialState.sequence, action) => {
  switch (action.type) {
    case ADD_ASANA :
      return state.concat({
        id: action.payload.id,
        asanaName: action.payload.asanaName,
        asanaSrc: action.payload.asanaSrc
      });
    case DELETE_ASANA:
      return state.filter(asana => asana.id !== action.payload.id);
    default:
      return state;
  }
};

const searchReducer = (state = initialState.search, action) => {
  switch (action.type) {
    case SEARCH_REQUEST :
      return Object.assign({}, state, {
        ...state,
        loading: action.payload.loading,
        phrase: action.payload.phrase,
        resultsPage: action.payload.page,
      });
    case SEARCH_SUCCESS :
      return Object.assign({}, state, {
        ...state,
        loading: action.payload.loading,
        phrase: action.payload.phrase,
        resultsPage: action.payload.page,
        results: action.payload.results
      });
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  sequence: yogaFlowReducer,
  search: searchReducer
})

export default rootReducer;