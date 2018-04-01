import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { setPlatform, setVersion } from './reducers/device/deviceActions';
import { setStore } from './reducers/global/globalActions';
import AuthInitialState from './reducers/auth/authInitialState';
import DeviceInitialState from './reducers/device/deviceInitialState';
import GlobalInitialState from './reducers/global/globalInitialState';
import ProfileInitialState from './reducers/profile/profileInitialState';
import DrawerInitialState from './reducers/drawer/drawerInitialState';
import ActivitiesInitialState from './reducers/activities/activitiesInitialState';
import CreateEventsInitialState from './reducers/create_events/createEventsInitialState';
import pack from '../package.json';
import registerScreens, { screens } from './navigation/index';
import { appAuthToken } from './lib/AppAuthToken';
import { get_tab_icons } from './icons/index';

const VERSION = pack.version;
/**
 *
 * ## Initial state
 * Create instances for the keys of each structure in snowflake
 * @returns {Object} object with 4 keys
 */
const getInitialState = () => ({
  auth: new AuthInitialState(),
  device: (new DeviceInitialState()).set('isMobile', true),
  global: (new GlobalInitialState()),
  profile: new ProfileInitialState(),
  drawer: new DrawerInitialState(),
  activities: new ActivitiesInitialState(),
  create_events: new CreateEventsInitialState(),
});

/**
 * ## Native
 *
 * ```configureStore``` with the ```initialState``` and set the
 * ```platform``` and ```version``` into the store by ```dispatch```.
 * *Note* the ```store``` itself is set into the ```store```.  This
 * will be used when doing hot loading
 */
export default class CoPlay {
  static init(options) {
    this._platform = options.platform;
    const store = this._init_store();
    this._register_screens(store);
    this._run_app();
  }
  static _init_store() {
    const store = configureStore(getInitialState());
    // configureStore will combine reducers from snowflake and main application
    // it will then create the store based on aggregate state from all reducers
    store.dispatch(setPlatform(this._platform));
    store.dispatch(setVersion(VERSION));
    store.dispatch(setStore(store));
    return store;
  }
  static _register_screens(store) {
    registerScreens(store, Provider);
  }
  static async _run_app() {
    const tab_icons = await get_tab_icons();
    const token = await appAuthToken.getSessionToken();
    if (token) {
      screens.home_screen(tab_icons);
    } else {
      screens.login_screen();
    }
  }
}
