/**
 * # activitiesReducer.js
 *
 *
 */
'use strict'
/**
 * ## Imports
 * The InitialState for create event
 */
const {
  GET_CREATE_EVENT_REQUEST,
  GET_CREATE_EVENT_SUCCESS,
  GET_CREATE_EVENT_FAILURE
} = require('../../lib/constants').default

import InitialState from './createEventsInitialState'

const initialState = new InitialState()

/**
 * ## createEventReducer function
 * @param {Object} state - initialState
 * @param {Object} action - type and payload
 */
export default function createEventReducer (state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.merge(state)

  switch (action.type) {
    /**
     * ### Request starts
     * set the form to fetching
     */
    case GET_CREATE_EVENT_REQUEST:
      return state.set('isFetching', true)
        .set('error', null)

    /**
     * ### Request ends successfully
     *
     * the fetching is done, set the UI fields and the originalActivities
     */
    case GET_CREATE_EVENT_SUCCESS:
      return state.set('isFetching', false)
        .set('error', null)
        .set('data', state.get('data').concat(wrapToRecord(action.payload)))

    /**
     * ### Request fails
     * we're done fetching and the error needs to be displayed to the user
     */
    case GET_CREATE_EVENT_FAILURE:
      return state.set('isFetching', false)
        .set('error', action.payload)

    // /**
    //  * ### Request set activity is_active
    //  */
    // case SET_ACTIVITY_IS_ACTIVE:
    //   let index = action.payload.id || state.get('data').findIndex(listItem => {
    //       return listItem.type === action.payload.type;
    //     });
    //   return state.setIn(['data', index, 'is_active'], action.payload.is_active)
    //
    // /**
    //  * ### Request set activities
    //  */
    // case SET_ACTIVITIES_REQUEST:
    //   return state.set('isFetching', true)
    //     .set('error', null)
    //
    // /**
    //  * ### Success set activities
    //  */
    // case SET_ACTIVITIES_SUCCESS:
    //   return state.set('isFetching', false)
    //     .set('error', null)
    //     .set('data', wrapToRecord(action.payload))
    //
    // /**
    //  * ### Failure set activities
    //  */
    // case SET_ACTIVITIES_FAILURE:
    //   return state.set('isFetching', false)
    //     .set('error', action.payload)
  }

  return state
}
