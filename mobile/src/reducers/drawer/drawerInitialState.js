/**
 * # globalInitialState.js
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
import {Record} from 'immutable'
/**
 * ## InitialState
 *
 * * isOpen - toggle for Drawer to open/close
 *
 */
var InitialState = Record({
  isOpen: false
})
export default InitialState
