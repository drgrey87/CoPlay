import { Navigation } from 'react-native-navigation';
import App from '../containers/App';
import Login from '../containers/Login';
import Logout from '../containers/Logout';
import Register from '../containers/Register';
import ForgotPassword from '../containers/ForgotPassword';
import Profile from '../containers/Profile';
import Main from '../containers/Main';
import Subview from '../containers/Subview';
import Home from '../containers/Home';
import Lindau from '../components/Lindau';
import Map from '../containers/Map';
import Activities from '../containers/Activities';
import Event from '../components/create_event/Event';
import TabIcon from '../components/TabIcon';
import Drawer from '../components/Drawer';
import Login_new from '../containers/Login_new';
import Translations from '../lib/Translations.json';

export const navigatorStyle = {
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

export const registerScreens = (store, Provider) => {
  // Navigation.registerComponent('mobile.App', () => App, store, Provider);
  Navigation.registerComponent('mobile.Register', () => Register, store, Provider);
  Navigation.registerComponent('mobile.ForgotPassword', () => ForgotPassword, store, Provider);
  // Navigation.registerComponent('mobile.Activities', () => Activities, store, Provider);
  Navigation.registerComponent('mobile.Home', () => Home, store, Provider);
  // Navigation.registerComponent('mobile.Event', () => Event, store, Provider);
  Navigation.registerComponent('mobile.Logout', () => Logout, store, Provider);
  Navigation.registerComponent('mobile.Login', () => Login, store, Provider);
  Navigation.registerComponent('mobile.Profile', () => Profile, store, Provider);
  // Navigation.registerComponent('mobile.Main', () => Main, store, Provider);
  // Navigation.registerComponent('mobile.Map', () => Map, store, Provider);
  // Navigation.registerComponent('mobile.Subview', () => Subview, store, Provider);
  Navigation.registerComponent('mobile.Drawer', () => Drawer, store, Provider);
};
