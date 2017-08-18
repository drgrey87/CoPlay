import React, {Component} from 'react';
const FBSDK = require('react-native-fbsdk');
const {
    LoginButton,
} = FBSDK;

var Login = React.createClass({
    render: function() {
        return (
            <View>
                <LoginButton
                    publishPermissions={["public_profile"]}
                    onLoginFinished={
                        (error, result) => {
                            if (error) {
                                alert("Login failed with error: " + result.error);
                            } else if (result.isCancelled) {
                                alert("Login was cancelled");
                            } else {
                                alert("Login was successful with permissions: " + result.grantedPermissions)
                            }
                        }
                    }
                    onLogoutFinished={() => alert("User logged out")}/>
            </View>
        );
    }
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