/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import Map from './app/Map';

export default class mobile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Map/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
});

AppRegistry.registerComponent('mobile', () => mobile);
