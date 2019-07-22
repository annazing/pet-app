/*
 * action types
 */

export const ADD_ASANA = 'ADD_ASANA'
export const DELETE_ASANA = 'DELETE_ASANA'

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
}