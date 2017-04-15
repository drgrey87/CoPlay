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
  SET_ACTIVITY_IS_ACTIVE,
  SET_ACTIVITIES_REQUEST,
  SET_ACTIVITIES_SUCCESS,
  SET_ACTIVITIES_FAILURE,
} = require('../../lib/constants').default

import InitialState from './activitiesInitialState'

const initialState = new InitialState()

/**
 * wrap item to immutable Record
 * @function
 */
import {wrapToRecord} from '../../lib/helper'
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
        .set('data', state.get('data').concat(wrapToRecord(action.payload)))

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
      let index = action.payload.id || state.get('data').findIndex(listItem => {
        return listItem.type === action.payload.type;
      });
      return state.setIn(['data', index, 'is_active'], action.payload.is_active)

    /**
     * ### Request set activities
     */
    case SET_ACTIVITIES_REQUEST:
      return state.set('isFetching', true)
        .set('error', null)
  }

  return state
}
