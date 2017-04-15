/**
 * # activitiesInitialState.js
 *
 * This class is a Immutable object
 * Working *successfully* with Redux, requires
 * state that is immutable.
 * In my opinion, that can not be by convention
 * By using Immutable, it's enforced.  Just saying....
 *
 */
'use strict'
/**
 * ## Import
 */
import {Record, List, fromJS} from 'immutable'
/**
 * ## InitialState
 *
 * * isOpen - toggle for Drawer to open/close
 *
 */

let getDefaultData = (type) => {
  return {
    is_active: false,
    rate: 5,
    type: type,
    _id: null,
    user_id: null
  }
};

const InitialState = Record({
  data: List(),
  isFetching: false,
  error: null
})


export default InitialState
