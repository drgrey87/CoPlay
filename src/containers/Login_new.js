import React, { Component } from 'react';
import
{
  View,
  Text,
  Button,
  TouchableOpacity,
}
  from 'react-native';

const FBSDK = require('react-native-fbsdk');

const {
  LoginButton,
  AccessToken,
} = FBSDK;

const Login = React.createClass({

  render() {
    console.log('render');
    return (
      <View>
        <LoginButton
          // readPermissions={["public_profile","email"]}
          publishPermissions={['publish_actions']}
          onLoginFinished={
            (error, result) => {
              console.log('onLoginFinished');
              alert(1111111111);
              if (error) {
                console.log('error');
                // alert("Login failed with error: " + result.error);
              } else if (result.isCancelled) {
                // debugger;
                console.log('isCancelled');
                // alert("Login was cancelled");
              } else {
                console.log('other');
                // debugger;
                // alert("Login was successful with permissions: " + result.grantedPermissions)
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log('basdfasdfasdf');
                    // debugger;
                    // alert(data.accessToken.toString())
                  },
                );
              }
            }
          }
          onLogoutFinished={() => console.log('User logged out')}
        />
      </View>
    );
  },
});

export default class MyApplication extends Component {
  render() {
    return (
      <View>
        <Text>Welcome to the Facebook SDK for React Native!</Text>
        <Login />
      </View>
    );
  }
}
