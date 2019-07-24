/*
 * action types
 */

export const ADD_ASANA = 'ADD_ASANA';
export const DELETE_ASANA = 'DELETE_ASANA';

/*
 * other constants
 */

// export const VisibilityFilters = {
//   SHOW_ALL: 'SHOW_ALL',
//   SHOW_COMPLETED: 'SHOW_COMPLETED',
//   SHOW_ACTIVE: 'SHOW_ACTIVE'
// }

/*
 * action creators
 */

let nextAsanaId = 0;

export const addAsana = asana => {
  return { 
      type: ADD_ASANA, 
      payload: {
          id: ++nextAsanaId,
          asanaName: asana.asanaName,
          asanaSrc: asana.asanaSrc
      }
    }
}

export const deleteAsana = id => {
  return {
      type: DELETE_ASANA,
      payload: {id} 
    }
};

export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILURE = 'SEARCH_FAILURE';

export const requestSearch = (phrase, page = 1) => {
  return {
    type: SEARCH_REQUEST,
    payload: {
      loading: true,
      phrase: phrase,
      resultsPage: page,
      results: []
    }
  }
};

export const searchSuccess = (results, page = 1) => {
  return {
    type: SEARCH_SUCCESS,
    payload: {
      loading: false,
      phrase: phrase,
      resultsPage: page,
      results: results
    }
  }
};