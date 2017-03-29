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
import {Record} from 'immutable'
/**
 * ## InitialState
 *
 * * isOpen - toggle for Drawer to open/close
 *
 */

let defaultData = {
  is_active: false,
  rate: 5
};

const InitialState = Record({
  data: new (Record({
    basketball: new (Record(defaultData))(),
    football: new (Record(defaultData))(),
    tennis: new (Record(defaultData))(),
    badminton: new (Record(defaultData))(),
    ice_hockey: new (Record(defaultData))(),
    table_tennis: new (Record(defaultData))(),
    valleyball: new (Record(defaultData))(),
    american_football: new (Record(defaultData))(),
    handball: new (Record(defaultData))(),
    frisbee: new (Record(defaultData))(),
    other: new (Record(defaultData))()
  }))(),
  isFetching: false,
  error: null
})

export default InitialState
