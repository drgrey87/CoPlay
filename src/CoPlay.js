'use strict'

/**
 * ## imports libs
 *
 */
import React, { Component } from 'react'
import {Provider} from 'react-redux'
import { Navigation } from 'react-native-navigation';

/**
 * ### configureStore
 *
 *  ```configureStore``` will connect the ```reducers```, the
 *
 */
import configureStore from './lib/configureStore'

/**
 * ## Actions
 *  The necessary actions for dispatching our bootstrap values
 */
import {setPlatform, setVersion} from './reducers/device/deviceActions'
import {setStore} from './reducers/global/globalActions'
import {getSessionToken} from './reducers/auth/authActions'

/**
 * ## States
 * Snowflake explicitly defines initial state
 *
 */
import AuthInitialState from './reducers/auth/authInitialState'
import DeviceInitialState from './reducers/device/deviceInitialState'
import GlobalInitialState from './reducers/global/globalInitialState'
import ProfileInitialState from './reducers/profile/profileInitialState'
import DrawerInitialState from './reducers/drawer/drawerInitialState'
import ActivitiesInitialState from './reducers/activities/activitiesInitialState'
import CreateEventsInitialState from './reducers/create_events/createEventsInitialState'

/**
 *  The version of the app but not  displayed yet
 */
import pack from '../package'
const VERSION = pack.version

/**
 *  import routes
 */
import { registerScreens } from './register_screens';

/**
 *
 * ## Initial state
 * Create instances for the keys of each structure in snowflake
 * @returns {Object} object with 4 keys
 */
function getInitialState () {
    const _initState = {
        auth: new AuthInitialState(),
        device: (new DeviceInitialState()).set('isMobile', true),
        global: (new GlobalInitialState()),
        profile: new ProfileInitialState(),
        drawer: new DrawerInitialState(),
        activities: new ActivitiesInitialState(),
        create_events: new CreateEventsInitialState()
    }
    return _initState
}

/**
 * ## Native
 *
 * ```configureStore``` with the ```initialState``` and set the
 * ```platform``` and ```version``` into the store by ```dispatch```.
 * *Note* the ```store``` itself is set into the ```store```.  This
 * will be used when doing hot loading
 */

export default (platform) => {
    const store = configureStore(getInitialState())
    const navigatorStyle = {
        statusBarColor: 'black',
        statusBarTextColorScheme: 'light',
        navigationBarColor: 'black',
        navBarBackgroundColor: '#2196F3',
        navBarTextColor: '#fff',
        navBarButtonColor: '#fff',
        tabBarButtonColor: 'red',
        tabBarSelectedButtonColor: 'red',
        tabBarBackgroundColor: '#fff',
        topBarElevationShadowEnabled: false,
        navBarHideOnScroll: true,
        tabBarHidden: true,
        drawUnderTabBar: true
    };
    // configureStore will combine reducers from snowflake and main application
    // it will then create the store based on aggregate state from all reducers
    store.dispatch(setPlatform(platform))
    store.dispatch(setVersion(VERSION))
    store.dispatch(setStore(store))

    registerScreens(store, Provider);

    store.subscribe(() => {
        if(store.getState().auth.form.fields.email) {
            Navigation.startSingleScreenApp({
                screen: {
                    screen: 'mobile.Home',
                    title: 'Home',
                    navigatorStyle,
                    leftButtons: [
                        {
                            id: 'sideMenu'
                        }
                    ]
                },
                drawer: {
                    left: {
                        screen: 'mobile.Drawer'
                    }
                }
            });
        } else {
            Navigation.startSingleScreenApp({
                screen: {
                    screen: 'mobile.Login',
                    title: 'Login',
                    navigatorStyle,
                    // leftButtons: [
                    //     {
                    //         id: 'sideMenu'
                    //     }
                    // ]
                }
            });
        }

    });

    store.dispatch(getSessionToken());
}
