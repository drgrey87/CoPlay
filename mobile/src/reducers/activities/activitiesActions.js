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
  GET_ACTIVITIES_FAILURE,
  SET_ACTIVITY_IS_ACTIVE,
  SET_ACTIVITIES_REQUEST,
  SET_ACTIVITIES_SUCCESS,
  SET_ACTIVITIES_FAILURE
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
export function isActive (data) {
  return {
    type: SET_ACTIVITY_IS_ACTIVE,
    payload: data
  }
}

export function setActivitiesRequest () {
  return {
    type: SET_ACTIVITIES_REQUEST
  }
}

export function setActivitiesSuccess (new_activities) {
  return {
    type: SET_ACTIVITIES_SUCCESS,
    payload: new_activities
  }
}

export function setActivitiesFailure (error) {
  return {
    type: SET_ACTIVITIES_FAILURE,
    payload: error
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
      .then((json) => {
        dispatch(getActivitiesSuccess(json))
      })
      .catch((error) => dispatch(getActivitiesFailure(error)))
  }
}

export function setIsActive (data) {
  return dispatch => dispatch(isActive(data))
}

export function setActivities (sessionToken, activities) {
  return dispatch => {
    dispatch(setActivitiesRequest())
    return appAuthToken.getSessionToken(sessionToken)
      .then((token) => BackendFactory(token).setActivities(activities))
      .then((new_activities) => {
        dispatch(setActivitiesSuccess(new_activities))
      })
      .catch((error) => dispatch(setActivitiesFailure(error)))
  }
}
