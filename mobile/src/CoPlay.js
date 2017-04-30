'use strict'

/**
 * ## imports
 *
 */
import React from 'react'
import {
    AppRegistry,
    StyleSheet,
    View,
    TouchableOpacity,
    Text } from 'react-native'

import {
    Provider} from 'react-redux'

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
var VERSION = pack.version

/**
 *  import routes
 */
import ROUTER from './router'

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
        create_Events: new CreateEventsInitialState()
    }
    return _initState
}

const styles = StyleSheet.create({
    tabBar: {
        height: 70
    }
})

/**
 * ## TabIcon
 *
 * Displays the icon for the tab w/ color dependent upon selection
 */
class TabIcon extends React.Component {
    render () {
        var color = this.props.selected ? '#FF3366' : '#FFB3B3'
        return (
            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', alignSelf: 'center'}}>
                <Icon style={{color: color}} name={this.props.iconName} size={30} />
                <Text style={{color: color}}>{this.props.title}</Text>
            </View>
        )
    }
}

/**
 * ## Native
 *
 * ```configureStore``` with the ```initialState``` and set the
 * ```platform``` and ```version``` into the store by ```dispatch```.
 * *Note* the ```store``` itself is set into the ```store```.  This
 * will be used when doing hot loading
 */

export default function native (platform) {
    let CoPlay = React.createClass({

        render () {
            const store = configureStore(getInitialState())

            // configureStore will combine reducers from snowflake and main application
            // it will then create the store based on aggregate state from all reducers
            store.dispatch(setPlatform(platform))
            store.dispatch(setVersion(VERSION))
            store.dispatch(setStore(store))

            // setup the router table with App selected as the initial component
            // note: See https://github.com/aksonov/react-native-router-flux/issues/948
            return (

                <Provider store={store}>
                    <ROUTER/>
                </Provider>
            )
        }
    })
    /**
     * registerComponent to the AppRegistery and off we go....
     */

    AppRegistry.registerComponent('mobile', () => CoPlay)//change to coplay
}
