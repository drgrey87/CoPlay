/**
 * # reducers
 *
 * This class combines all the reducers into one
 *
 */
'use strict'
/**
 * ## Imports
 *
 * our 5 reducers
 */
import auth from './auth/authReducer'
import device from './device/deviceReducer'
import global from './global/globalReducer'
import profile from './profile/profileReducer'
import drawer from './drawer/drawerReducer'
import activities from './activities/activitiesReducer'
import create_events from './create_events/createEventsReducer'

import { combineReducers } from 'redux'

/**
 * ## CombineReducers
 *
 * the rootReducer will call each and every reducer with the state and action
 * EVERY TIME there is a basic action
 */
const rootReducer = combineReducers({
    auth,
    device,
    global,
    profile,
    drawer,
    activities,
    create_events
})

export default rootReducer