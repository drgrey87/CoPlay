import React from 'react'
import {Scene, Router} from 'react-native-router-flux';
import {
  StyleSheet,
  TouchableOpacity
} from 'react-native'

/**
 * ### icons
 *
 * Add icon support for use in Tabbar and in navBar
 *
 */
import Icon from 'react-native-vector-icons/FontAwesome'

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
import NavigationDrawer from '../containers/NavigationDrawer'
import Home from '../containers/Home'
import Lindau from '../components/Lindau'

/**
 * ### Translations
 */
var I18n = require('react-native-i18n')

// Support fallbacks so en-US & en-BR both use en
I18n.fallbacks = true

import Translations from '../lib/Translations'
I18n.translations = Translations

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
  }
})

let toggleDrawer = () => {

}

let navBarLeftButton = () => {
  return (
    <TouchableOpacity onPress={toggleDrawer}>
      <Icon name='navicon' size={25} style={styles.title}/>
    </TouchableOpacity>
  )
}

module.exports = <Router
  renderLeftButton={navBarLeftButton}
  navigationBarStyle={styles.appBar}
  titleStyle={styles.title}
>
  <Scene key='root'>

    <Scene key='App'
           component={App}
           hideNavBar
           type='replace'
           initial />

    <Scene key='InitialLoginForm'
           component={Register}
           hideNavBar
           type='replace' />

    <Scene key='Login'
           component={Login}
           hideNavBar
           type='replace' />

    <Scene key='Register'
           component={Register}
           hideNavBar
           type='replace' />

    <Scene key='ForgotPassword'
           component={ForgotPassword}
           hideNavBar
           type='replace' />

    <Scene key='Subview'
           component={Subview}
           hideNavBar />

    <Scene key='Drawer'
           component={NavigationDrawer}
           open={false}
           type='replace' >

      <Scene key="Client" tabs={false}>

        <Scene
          key="Home"
          component={Home}
          title="Home"
          initial
        />
        <Scene
          key="Lindau"
          component={Lindau}
          title="Lindau22"
        />
        {/*<Scene*/}
        {/*key="Fanad"*/}
        {/*component={Fanad}*/}
        {/*title="Fanad"*/}
        {/*/>*/}
        {/*<Scene*/}
        {/*key="Augustine"*/}
        {/*component={Augustine}*/}
        {/*title="Augustine"*/}
        {/*/>*/}
        {/*<Scene*/}
        {/*key="Peggys"*/}
        {/*component={Peggys}*/}
        {/*title="Peggys"*/}
        {/*/>*/}
        {/*<Scene*/}
        {/*key="Hercules"*/}
        {/*component={Hercules}*/}
        {/*title="Hercules"*/}
        {/*/>*/}
        {/*<Scene*/}
        {/*key="Bass"*/}
        {/*component={Bass}*/}
        {/*title="Bass"*/}
        {/*/>*/}
        {/*<Scene*/}
        {/*key="About"*/}
        {/*component={About}*/}
        {/*title="About"*/}
        {/*/>*/}
        {/*<Scene*/}
        {/*key="Credits"*/}
        {/*component={Credits}*/}
        {/*title="Credits"*/}
        {/*/>*/}
        {/*<Scene*/}
        {/*key="Map"*/}
        {/*component={Map}*/}
        {/*title="Map"*/}
        {/*/>*/}

        {/*old functional, will be deleted in future*/}

        {/*<Scene key='Tabbar'*/}
        {/*tabs*/}
        {/*hideNavBar*/}
        {/*tabBarStyle={styles.tabBar}*/}
        {/*default='Main'>*/}

        {/*<Scene key='Logout'*/}
        {/*title={I18n.t('Snowflake.logout')}*/}
        {/*icon={TabIcon}*/}
        {/*iconName={'sign-out'}*/}
        {/*hideNavBar*/}
        {/*component={Logout} />*/}

        {/*<Scene key='Main'*/}
        {/*title={I18n.t('Snowflake.main')}*/}
        {/*iconName={'home'}*/}
        {/*icon={TabIcon}*/}
        {/*hideNavBar*/}
        {/*component={Main}*/}
        {/*initial />*/}

        {/*<Scene key='Profile'*/}
        {/*title={I18n.t('Snowflake.profile')}*/}
        {/*icon={TabIcon}*/}
        {/*iconName={'gear'}*/}
        {/*hideNavBar*/}
        {/*component={Profile} />*/}
      </Scene>
    </Scene>
  </Scene>
</Router>