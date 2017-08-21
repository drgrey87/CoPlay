/**
 * # app.js
 *  Display startup screen and
 *  getSessionTokenAtStartup which will navigate upon completion
 *
 */


/*
 * ## Imports
 *
 * Imports from redux
 */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/**
 * Project actions
 */
import * as authActions from '../reducers/auth/authActions';
import * as deviceActions from '../reducers/device/deviceActions';
import * as globalActions from '../reducers/global/globalActions';

/**
 * The components we need from ReactNative
 */
import React, { Component } from 'react';
import
{
  StyleSheet,
  View,
  Text,
}
  from 'react-native';

/**
 * The Header will display a Image and support Hot Loading
 */
import Header from '../components/Header';

/**
 *  The version of the app but not  displayed yet
 */
import pack from '../../package';

/**
 *  Save that state
 */
function mapStateToProps(state) {
  return {
    deviceVersion: state.device.version,
    auth: {
      form: {
        isFetching: state.auth.form.isFetching,
      },
    },
    global: {
      currentState: state.global.currentState,
      showState: state.global.showState,
    },
  };
}

/**
 * Bind all the actions from authActions, deviceActions and globalActions
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...authActions, ...deviceActions, ...globalActions }, dispatch),
  };
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    marginTop: 80,
    padding: 10,
  },
  summary: {
    fontFamily: 'BodoniSvtyTwoITCTT-Book',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

/**
 * ## App class
 */
const reactMixin = require('react-mixin');

import TimerMixin from 'react-timer-mixin';
/**
 * ### Translations
 */
const I18n = require('react-native-i18n');

import Translations from '../lib/Translations';

I18n.translations = Translations;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      // isRefreshing: false
    };

    this._viewMovie = this._viewMovie.bind(this);
    this._onRefresh = this._onRefresh.bind(this);
  }

  componentWillMount() {
    this.props.actions.getSessionToken();
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.auth.form.isFetching) {
      this.props.navigator.showModal({
        title,
        screen: 'movieapp.MoviesList',
        passProps: {
          type,
        },
        navigatorButtons: {
          rightButtons,
        },
      });
    }
  }
  /**
     * See if there's a sessionToken from a previous login
     *
     */
  // componentDidMount () {
  //       // Use a timer so App screen is displayed
  //   this.setTimeout(
  //           () => {
  //             this.props.actions.getSessionToken()
  //           },
  //           2500
  //       )
  // }

  // render () {
  //   return (
  //     <View style={styles.container}>
  //       <Header isFetching={this.props.auth.form.isFetching}
  //         showState={this.props.global.showState}
  //         currentState={this.props.global.currentState}
  //         onGetState={this.props.actions.getState}
  //         onSetState={this.props.actions.setState} />
  //
  //       <Text style={styles.summary}>{pack.name} {I18n.t('App.version')}:{this.props.deviceVersion}</Text>
  //
  //     </View>
  //   )
  // }
}
// Since we're using ES6 classes, have to define the TimerMixin
reactMixin(App.prototype, TimerMixin);
/**
 * Connect the properties
 */
export default connect(mapStateToProps, mapDispatchToProps)(App);
