import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import * as authActions from '../reducers/auth/authActions';
import LoginRender from '../components/LoginRender';
import Translations from '../lib/Translations.json';

const I18n = require('react-native-i18n');
const {
  LOGIN,
  REGISTER,
  FORGOT_PASSWORD,
} = require('../lib/constants').default;

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

I18n.translations = Translations;

class Register extends Component {
  constructor(props) {
    super(props);
    this.buttonPressHandler = this.buttonPressHandler.bind(this);
  }
  buttonPressHandler() {
    const signup = this.props.actions.signup;
    const username = this.props.auth.form.fields.username;
    const email = this.props.auth.form.fields.email;
    const password = this.props.auth.form.fields.password;
    signup(username, email, password);
  }
  render() {
    const loginButtonText = I18n.t('Register.register');

    return (
      <LoginRender
        formType={REGISTER}
        loginButtonText={loginButtonText}
        onButtonPress={this.buttonPressHandler}
        displayPasswordCheckbox
        leftMessageType={FORGOT_PASSWORD}
        rightMessageType={LOGIN}
        auth={this.props.auth}
        global={this.props.global}
      />

    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
