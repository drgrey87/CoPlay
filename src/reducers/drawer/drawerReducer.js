/**
 * # globalReducer.js
 *
 *
 */


/**
 * ## Imports
 * The InitialState for drawer
 */
const {
  DRAWER_TOGGLE_OPENING,
} = require('../../lib/constants').default;

import InitialState from './drawerInitialState';

const initialState = new InitialState();
/**
 * ## drawerReducer function
 * @param {Object} state - initialState
 * @param {Object} action - type and payload
 */
export default function drawerReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.merge(state);

  switch (action.type) {
    /**
     * ### Save the sessionToken
     */
    case DRAWER_TOGGLE_OPENING:
      return state.set('turn', action.payload);
  }

  return state;
}
