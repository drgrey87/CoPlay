///<reference path="../node_modules/@types/react-native/index.d.ts"/>
import { Provider } from 'react-redux';
// import { Navigation } from 'react-native-navigation';
import { registerScreens } from './register_screens';
import configureStore from './lib/configureStore';
import { setPlatform, setVersion } from './reducers/device/deviceActions';
import { setStore } from './reducers/global/globalActions';
import { getSessionToken } from './reducers/auth/authActions';

import AuthInitialState from './reducers/auth/authInitialState';
import DeviceInitialState from './reducers/device/deviceInitialState';
import GlobalInitialState from './reducers/global/globalInitialState';
import ProfileInitialState from './reducers/profile/profileInitialState';
import DrawerInitialState from './reducers/drawer/drawerInitialState';
import ActivitiesInitialState from './reducers/activities/activitiesInitialState';
import CreateEventsInitialState from './reducers/create_events/createEventsInitialState';

const {Navigation} = require('react-native-navigation');

const pack = require('../package.json');
const VERSION = pack.version;
/**
 *
 * ## Initial state
 * Create instances for the keys of each structure in snowflake
 * @returns {Object} object with 4 keys
 */
function getInitialState() {
  const initState = {
    auth: new AuthInitialState(),
    device: (new DeviceInitialState()).set('isMobile', true),
    global: (new GlobalInitialState()),
    profile: new ProfileInitialState(),
    drawer: new DrawerInitialState(),
    activities: new ActivitiesInitialState(),
    create_events: new CreateEventsInitialState(),
  };
  return initState;
}

/**
 * ## Native
 *
 * ```configureStore``` with the ```initialState``` and set the
 * ```platform``` and ```version``` into the store by ```dispatch```.
 * *Note* the ```store``` itself is set into the ```store```.  This
 * will be used when doing hot loading
 */

export default (platform: string) => {
  const store = configureStore(getInitialState());
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
    drawUnderTabBar: true,
  };
  let is_inited_app = false;
  // configureStore will combine reducers from snowflake and main application
  // it will then create the store based on aggregate state from all reducers
  store.dispatch(setPlatform(platform));
  store.dispatch(setVersion(VERSION));
  store.dispatch(setStore(store));

  registerScreens(store, Provider);

  store.subscribe(() => {
    if (is_inited_app) return;

    if (store.getState().auth.form.fields.email) {
      Navigation.startSingleScreenApp({
        screen: {
          screen: 'mobile.Home',
          title: 'Home',
          navigatorStyle,
          leftButtons: [
            {
              id: 'sideMenu',
            },
          ],
        },
        drawer: {
          left: {
            screen: 'mobile.Drawer',
          },
        },
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
        },
      });
    }
    is_inited_app = true;
  });

  store.dispatch(getSessionToken());
};
