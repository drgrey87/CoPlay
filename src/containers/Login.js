/**
 * # Login.js
 *
 *  The container to display the Login form
 *
 */


/**
 * ## Imports
 */
import I18n from 'react-native-i18n';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Translations from '../lib/Translations.json';

/**
 * The actions we need
 */
import * as authActions from '../reducers/auth/authActions';

/**
 *   LoginRender
 */
import LoginRender from '../components/LoginRender';

const {
  LOGIN,
  REGISTER,
  FORGOT_PASSWORD,
} = require('../lib/constants').default;

/**
 * ## Redux boilerplate
 */

function mapStateToProps(state) {
  return {
    auth: state.auth,
    global: state.global,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch),
  };
}

function buttonPressHandler(login, username, password) {console.log(2222222222);
  login(username, password);
}

/**
 * ### Translations
 */


I18n.translations = Translations;

class Login extends Component {
  constructor() {
    super();
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress() {
    buttonPressHandler(
      this.props.actions.login,
      this.props.auth.form.fields.username,
      this.props.auth.form.fields.password,
    );
  }
  render() {
    const loginButtonText = I18n.t('Login.login');
    // const onButtonPress = buttonPressHandler.bind(null,
    //   this.props.actions.login,
    //   this.props.auth.form.fields.username,
    //   this.props.auth.form.fields.password,
    // );

    return (
      <LoginRender
        formType={LOGIN}
        loginButtonText={loginButtonText}
        onButtonPress={this.onButtonPress}
        displayPasswordCheckbox
        leftMessageType={REGISTER}
        rightMessageType={FORGOT_PASSWORD}
        auth={this.props.auth}
        global={this.props.global}
        navigator={this.props.navigator}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
