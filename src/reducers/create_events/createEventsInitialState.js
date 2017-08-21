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


/**
 * ## Import
 */
import { Record, List } from 'immutable';

const InitialState = Record({
  types: List(),
  event_name: '',
  chosen_types: List(),
  isFetching: false,
  error: null,
});


export default InitialState;
