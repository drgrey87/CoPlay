import React, {PureComponent} from 'react'
import {Scene, Router} from 'react-native-router-flux';
import {
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import {Actions} from 'react-native-router-flux';
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
import NavigationDrawer from '../containers/NavigationDrawer'
import Home from '../containers/Home'
import Lindau from '../components/Lindau'
import Map from '../containers/Map'
import Activities from '../containers/Activities'

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

/**
 *  Save that state
 */
function mapStateToProps (state) {
  return {
    drawer: state.drawer
  }
}

/**
 * Bind all the actions from authActions, deviceActions and globalActions
 */
function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({ ...drawerActions }, dispatch)
  }
}

class RouterWrap extends PureComponent {

  constructor(props) {
    super(props)
    this.toggleDrawer = this.toggleDrawer.bind(this)
    this.openMap = this.openMap.bind(this)
    this.navBarLeftButton = this.navBarLeftButton.bind(this)
    this.navBarRightButton = this.navBarRightButton.bind(this)
  }

  toggleDrawer () {
    this.props.actions.setDrawerState(new Date().valueOf());
  }

  openMap () {
    Actions.Map()
  }

  navBarLeftButton () {
    return (
      <TouchableOpacity onPress={this.toggleDrawer}>
        <Icon name='navicon' size={25} style={styles.title}/>
      </TouchableOpacity>
    )
  }

  navBarRightButton () {
    return (
      <TouchableOpacity onPress={this.openMap}>
        <Icon name='map-marker' size={25} style={styles.title}/>
      </TouchableOpacity>
    )
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <Router
      renderLeftButton={this.navBarLeftButton}
      renderRightButton={this.navBarRightButton}
      navigationBarStyle={styles.appBar}
      titleStyle={styles.title}
      leftButtonIconStyle={styles.iconBack}
    >
      <Scene key='root'>

        <Scene key='App'
               component={App}
               hideNavBar
               type='replace'
               initial/>

        <Scene key='InitialLoginForm'
               component={Register}
               hideNavBar
               type='replace'/>

        <Scene key='Login'
               component={Login}
               hideNavBar
               type='replace'/>

        <Scene key='Register'
               component={Register}
               hideNavBar
               type='replace'/>

        <Scene key='ForgotPassword'
               component={ForgotPassword}
               hideNavBar
               type='replace'/>

        <Scene key='Subview'
               component={Subview}
               hideNavBar/>

        <Scene key='Activities'
               component={Activities}
               hideNavBar/>

        <Scene key='Drawer'
               component={NavigationDrawer}
               open={false}
               type='replace'>

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
            <Scene
              key="Map"
              component={Map}
              title="Map"
            />

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

            <Scene key='Profile'
                   title={I18n.t('Snowflake.profile')}
              //icon={TabIcon}
              //iconName={'gear'}
              //hideNavBar
                   component={Profile}/>
          </Scene>
        </Scene>
      </Scene>
    </Router>
  }
}

// Since we're using ES6 classes, have to define the TimerMixin
// reactMixin(RouterWrap.prototype, TimerMixin)
/**
 * Connect the properties
 */
export default connect(mapStateToProps, mapDispatchToProps)(RouterWrap)