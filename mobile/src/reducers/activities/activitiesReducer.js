/**
 * # activitiesReducer.js
 *
 *
 */
'use strict'
/**
 * ## Imports
 * The InitialState for activities
 */
const {
  GET_ACTIVITIES_REQUEST,
  GET_ACTIVITIES_SUCCESS,
  GET_ACTIVITIES_FAILURE,
  SET_ACTIVITY_IS_ACTIVE
} = require('../../lib/constants').default

import InitialState from './activitiesInitialState'

const initialState = new InitialState()
/**
 * ## activitiesReducer function
 * @param {Object} state - initialState
 * @param {Object} action - type and payload
 */
export default function activitiesReducer (state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.merge(state)

  switch (action.type) {
    /**
     * ### Request starts
     * set the form to fetching
     */
    case GET_ACTIVITIES_REQUEST:
      return state.set('isFetching', true)
        .set('error', null)

    /**
     * ### Request ends successfully
     *
     * the fetching is done, set the UI fields and the originalActivities
     */
    case GET_ACTIVITIES_SUCCESS:
      return state.set('isFetching', false)
        .set('error', null)
        .merge('data', action.payload)

    /**
     * ### Request fails
     * we're done fetching and the error needs to be displayed to the user
     */
    case GET_ACTIVITIES_FAILURE:
      return state.set('isFetching', false)
        .set('error', action.payload)

    /**
     * ### Request set activity is_active
     */
    case SET_ACTIVITY_IS_ACTIVE:
      console.log('aaaa', action.payload);
      let index = action.payload.id || state.get('data').findIndex(listItem => {
        return listItem.type === action.payload.type;
    });
      console.log('index', index);
      return state.setIn(['data', index, 'is_active'], action.payload.is_active)
  }

  return state
}
