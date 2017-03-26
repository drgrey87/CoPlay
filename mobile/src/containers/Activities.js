'use strict'

import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet
} from 'react-native';
/**
 * ### icons
 *
 * Add icon support for use in Tabbar and in navBar
 *
 */
import Icon from 'react-native-vector-icons/Ionicons'

export default class Activities extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ScrollView>
        <View>
          <Icon name="basketball" size={50} color="#fff" />
          <Text>
            {'basketball'}
          </Text>
        </View>
      </ScrollView>
    );
  }
}