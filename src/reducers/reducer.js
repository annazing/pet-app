import { combineReducers } from 'redux';
import { ADD_ASANA, DELETE_ASANA, CLEAR_SEQUENCE } from '../static/constants';
import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE } from '../static/constants';

const initialState = {
    search: {
      loading: false,
      phrase: '',
      resultsPage: 0,
      results: [],
      error: {
        isError: false,
        message: ''
      }
    },
    sequence: []
  };


//utility

// function updateObject(oldObject, newValues) {
//   // Encapsulate the idea of passing a new object as the first parameter
//   // to Object.assign to ensure we correctly copy data instead of mutating
//   return Object.assign({}, oldObject, newValues)
// }

// function addItemInArray(stateArray, newItem) {
//   const newItems = stateArray.concat(newItem);

//   return updateObject(stateArray, { todos: newItems })
// }

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
    case CLEAR_SEQUENCE:
      return initialState.sequence;
    default:
      return state;
  }
};

const searchReducer = (state = initialState.search, action) => {
  switch (action.type) {
    case SEARCH_REQUEST :
      return {
        ...state,
        loading: action.payload.loading,
        phrase: action.payload.phrase,
        resultsPage: action.payload.resultsPage,
      };
    case SEARCH_SUCCESS :
      return {
        ...state,
        loading: action.payload.loading,
        error: {
          isError: false,
          message: ''
        },
        resultsPage: action.payload.resultsPage,
        results: action.payload.results
      };
    case SEARCH_FAILURE :
      return {
        ...state,
        loading: action.payload.loading,
        error: {
          isError: true,
          message: action.payload.error
        }
      }; 
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  sequence: yogaFlowReducer,
  search: searchReducer
})

export default rootReducer;