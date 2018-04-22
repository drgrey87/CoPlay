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
import Activity from '../containers/Activity';
import Translations from '../lib/Translations.json';
import { colors } from '../styles';

const navigatorStyle = {
  statusBarColor: colors.black,
  statusBarTextColorScheme: colors.light_blue,
  navigationBarColor: colors.black,
  navBarBackgroundColor: colors.blue,
  navBarTextColor: colors.white,
  navBarButtonColor: colors.white,
  tabBarButtonColor: colors.red,
  tabBarSelectedButtonColor: colors.red,
  tabBarBackgroundColor: colors.white,
  topBarElevationShadowEnabled: false,
  navBarHideOnScroll: true,
  tabBarHidden: true,
  drawUnderTabBar: true
};
const login_screen = () => Navigation.startSingleScreenApp({
  screen: {
    screen: 'mobile.Login',
    title: 'Login',
    navigatorStyle
  }
});
const home_screen = icons_map => Navigation.startTabBasedApp({
  tabs: [
    {
      screen: 'mobile.Home', // this is a registered name for a screen
      icon: icons_map.home
    },
    {
      screen: 'mobile.Map',
      icon: icons_map.map
    },
    {
      screen: 'mobile.Profile',
      icon: icons_map.profile
    },
    {
      screen: 'mobile.Settings',
      icon: icons_map.settings
    }
  ]
});

export const screens = {
  login_screen,
  home_screen
};

export default (store, Provider) => {
  // Navigation.registerComponent('mobile.App', () => App, store, Provider);
  Navigation.registerComponent('mobile.Register', () => Register, store, Provider);
  Navigation.registerComponent('mobile.ForgotPassword', () => ForgotPassword, store, Provider);
  // Navigation.registerComponent('mobile.Activities', () => Activities, store, Provider);
  Navigation.registerComponent('mobile.Home', () => Home, store, Provider);
  // Navigation.registerComponent('mobile.Event', () => Event, store, Provider);
  Navigation.registerComponent('mobile.Settings', () => Logout, store, Provider);
  Navigation.registerComponent('mobile.Login', () => Login, store, Provider);
  Navigation.registerComponent('mobile.Profile', () => Profile, store, Provider);
  // Navigation.registerComponent('mobile.Main', () => Main, store, Provider);
  Navigation.registerComponent('mobile.Map', () => Map, store, Provider);
  // Navigation.registerComponent('mobile.Subview', () => Subview, store, Provider);
  Navigation.registerComponent('mobile.Drawer', () => Drawer, store, Provider);
  Navigation.registerComponent('mobile.Activity', () => Activity, store, Provider);
};
