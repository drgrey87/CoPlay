import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Form,
  TouchableHighlight
} from 'react-native';


export default class Login extends Component {

  constructor(props) {
    super(props);
  }

  render() {
      return (
        <View >
          <View >
            <Text >Signup/Login below for Chuck Norris Quotes!</Text>
          </View>
          <View >
            <TouchableHighlight underlayColor='#99d9f4'>
              <Text >Signup</Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor='#99d9f4'>
              <Text >Login</Text>
            </TouchableHighlight>
          </View>
          <View >
            <TouchableHighlight>
              <Text >Get a Chuck Norris Quote!</Text>
            </TouchableHighlight>
          </View>
        </View>
      );
  }
};