/**
 * # activitiesActions.js
 *
 */
'use strict'

import {appAuthToken} from '../../lib/AppAuthToken'

/** *
 * The actions for activities subscribing
 */
const {
  GET_ACTIVITIES_REQUEST,
  GET_ACTIVITIES_SUCCESS,
  GET_ACTIVITIES_FAILURE
} = require('../../lib/constants').default

/**
 * Project requirements
 */
const BackendFactory = require('../../lib/BackendFactory').default

/**
 * ## retreiving activities actions
 */
export function getActivitiesRequest () {
  return {
    type: GET_ACTIVITIES_REQUEST
  }
}
export function getActivitiesSuccess (json) {
  return {
    type: GET_ACTIVITIES_SUCCESS,
    payload: json
  }
}
export function getActivitiesFailure (json) {
  return {
    type: GET_ACTIVITIES_FAILURE,
    payload: json
  }
}
/**
 * ## State actions
 *
 *### getActivities
 * @param sessionToken
 *
 * {email:"", objectId:"", sessionToken: "", username: ""}
 */
export function getActivities (sessionToken) {
  return dispatch => {
    dispatch(getActivitiesRequest())
    // store or get a sessionToken
    return appAuthToken.getSessionToken(sessionToken)
      .then((token) => BackendFactory(token).getActivities())
      .then((json) => dispatch(getActivitiesSuccess(json)))
      .catch((error) => dispatch(getActivitiesFailure(error)))
  }
}
