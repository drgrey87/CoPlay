/**
 * # globalActions.js
 *
 * Actions for drawer, so i can manage drawer in some components
 */


/**
 * ## Imports
 *
 * The actions supported
 */
const {
  DRAWER_TOGGLE_OPENING,
} = require('../../lib/constants').default;

/**
 * ## set the sessionToken
 *
 */
export function setDrawerState(state) {
  return {
    type: DRAWER_TOGGLE_OPENING,
    payload: state,
  };
}
