/**
 * # activitiesActions.js
 *
 */


import { appAuthToken } from '../../lib/AppAuthToken';

/** *
 * The actions for activities subscribing
 */
const {
  GET_CREATE_EVENT_REQUEST,
  GET_CREATE_EVENT_SUCCESS,
  GET_CREATE_EVENT_FAILURE,
} = require('../../lib/constants').default;

/**
 * Project requirements
 */
const BackendFactory = require('../../lib/BackendFactory').default;

/**
 * ## retreiving activities actions
 */
export function getCreateEventRequest() {
  return {
    type: GET_CREATE_EVENT_REQUEST,
  };
}
export function getCreateEventSuccess(json) {
  return {
    type: GET_CREATE_EVENT_SUCCESS,
    payload: json,
  };
}
export function getCreateEventFailure(json) {
  return {
    type: GET_CREATE_EVENT_FAILURE,
    payload: json,
  };
}

export function getCreateEvents(sessionToken) {
  return (dispatch) => {
    dispatch(getCreateEventRequest());
    // store or get a sessionToken
    return appAuthToken.getSessionToken(sessionToken)
      .then(token => BackendFactory(token).getActivities())
      .then((json) => {
        dispatch(getCreateEventSuccess(json));
      })
      .catch(error => dispatch(getCreateEventFailure(error)));
  };
}
