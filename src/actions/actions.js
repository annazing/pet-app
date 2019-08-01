import SearchService from '../services/search';
import {ADD_ASANA, DELETE_ASANA, CLEAR_SEQUENCE, 
        SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE} from '../static/constants'

/*
 * action creators
 */

let asanaId = 0;

export const addAsana = asana => {
  return { 
      type: ADD_ASANA, 
      payload: {
          id: ++asanaId,
          asanaName: asana.asanaName,
          asanaSrc: asana.asanaSrc
      }
    }
}

export const deleteAsana = asana => {
  return {
      type: DELETE_ASANA,
      payload: {id: asana.id} 
    }
};

export const clearSequence = () => {
  return {
      type: CLEAR_SEQUENCE,
    }
};

export const requestSearch = (phrase, page) => {
  return {
    type: SEARCH_REQUEST,
    payload: {
      loading: true,
      phrase: phrase,
      resultsPage: page
    }
  }
};

export const searchSuccess = (results, page) => {
  return {
    type: SEARCH_SUCCESS,
    payload: {
      loading: false,
      resultsPage: page,
      results: results
    }
  }
};

export const searchFailure = (error) => {
  return {
    type: SEARCH_FAILURE,
    payload: {
      loading: false,
      error: error
    }
  }
};

export const fetchSearchResults = (phrase, page = 1) => {
  return dispatch => {
    dispatch(requestSearch(phrase, page));
    return SearchService.getImages(phrase, page)
      .then(results => dispatch(searchSuccess(results, page)))
      .catch(error => dispatch(searchFailure(error)));
  }
};