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
  GET_ACTIVITIES_FAILURE
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
      return state.setIn(['activities', 'isFetching'], true)
        .setIn(['activities', 'error'], null)

    /**
     * ### Request ends successfully
     *
     * the fetching is done, set the UI fields and the originalActivities
     */
    case GET_ACTIVITIES_SUCCESS:
      return state.setIn(['activities', 'isFetching'], false)
        .setIn(['activities', 'error'], null)
        .mergeIn(['activities', 'data'], action.payload)

    /**
     * ### Request fails
     * we're done fetching and the error needs to be displayed to the user
     */
    case GET_ACTIVITIES_FAILURE:
      return state.setIn(['activities', 'isFetching'], false)
        .setIn(['activities', 'error'], action.payload)
  }

  return state
}
