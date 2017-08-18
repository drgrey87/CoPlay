import React, {PureComponent} from 'react'

import {
  StyleSheet,
  TouchableOpacity,
  Navigator,
  View,
  Text
} from 'react-native'

import { Navigation } from 'react-native-navigation';

/**
 * ### icons
 *
 * Add icon support for use in Tabbar and in navBar
 *
 */
import Icon from 'react-native-vector-icons/FontAwesome'
/*
 * ## Imports
 *
 * Imports from redux
 */
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

/**
 * ## App class
 */
import reactMixin from 'react-mixin'
import TimerMixin from 'react-timer-mixin'

/**
 * ### containers
 *
 * All the top level containers
 *
 */
import App from '../containers/App'
import Login from '../containers/Login'
import Logout from '../containers/Logout'
import Register from '../containers/Register'
import ForgotPassword from '../containers/ForgotPassword'
import Profile from '../containers/Profile'
import Main from '../containers/Main'
import Subview from '../containers/Subview'
// import NavigationDrawer from '../containers/NavigationDrawer'
import Home from '../containers/Home'
import Lindau from '../components/Lindau'
import Map from '../containers/Map'
import Activities from '../containers/Activities'
import Event from '../components/create_event/Event'
import TabIcon from '../components/TabIcon'
import Drawer from '../components/Drawer'
import Login_new from '../containers/Login_new'

/**
 * ### Translations
 */
var I18n = require('react-native-i18n')

// Support fallbacks so en-US & en-BR both use en
I18n.fallbacks = true

import Translations from '../lib/Translations'
I18n.translations = Translations

/**
 * The actions we need
 */
import * as drawerActions from '../reducers/drawer/drawerActions'

const styles = StyleSheet.create({
  tabBar: {
    height: 70
  },
  appBar: {
    height: 56,
    backgroundColor: '#2196F3',
    elevation: 4
  },
  title: {
    color: '#fff'
  },
  iconBack: {
    tintColor: '#fff'
  }
})

export const registerScreens = (store, Provider) => {
  // Navigation.registerComponent('mobile.App', () => App, store, Provider);
  Navigation.registerComponent('mobile.Register', () => Register, store, Provider);
  // Navigation.registerComponent('mobile.ForgotPassword', () => ForgotPassword, store, Provider);
  // Navigation.registerComponent('mobile.Activities', () => Activities, store, Provider);
  Navigation.registerComponent('mobile.Home', () => Home, store, Provider);
  // Navigation.registerComponent('mobile.Event', () => Event, store, Provider);
  Navigation.registerComponent('mobile.Logout', () => Logout, store, Provider);
  Navigation.registerComponent('mobile.Login', () => Login, store, Provider);
  // Navigation.registerComponent('mobile.Profile', () => Profile, store, Provider);
  // Navigation.registerComponent('mobile.Main', () => Main, store, Provider);
  // Navigation.registerComponent('mobile.Map', () => Map, store, Provider);
  // Navigation.registerComponent('mobile.Subview', () => Subview, store, Provider);
  Navigation.registerComponent('mobile.Drawer', () => Drawer);
}