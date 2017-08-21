/**
 * # ForgotPassword.js
 *
 */


/**
 * ## Imports
 *
 * Redux
 */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/**
 * The actions we need
 */
import * as authActions from '../reducers/auth/authActions';

/**
 *   LoginRender
 */
import LoginRender from '../components/LoginRender';

/**
 * Need React
 */
import React from 'react';

const {
  REGISTER,
  LOGIN,
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

function buttonPressHandler(resetPassword, email) {
  resetPassword(email);
}
/**
 * ### Translations
 */
const I18n = require('react-native-i18n');

import Translations from '../lib/Translations';

I18n.translations = Translations;

const ForgotPassword = React.createClass({

  render() {
    const loginButtonText = I18n.t('ForgotPassword.reset_password');
    const onButtonPress = buttonPressHandler.bind(null,
      this.props.actions.resetPassword,
      this.props.auth.form.fields.email);

    return (
      <LoginRender
        formType={FORGOT_PASSWORD}
        loginButtonText={loginButtonText}
        onButtonPress={onButtonPress}
        displayPasswordCheckbox={false}
        leftMessageType={REGISTER}
        rightMessageType={LOGIN}
        auth={this.props.auth}
        global={this.props.global}
      />
    );
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
