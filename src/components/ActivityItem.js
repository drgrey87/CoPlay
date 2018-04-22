'use strict'

import React, {PureComponent, PropTypes} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  TouchableHighlight
} from 'react-native';

/**
 * ### icons
 *
 * Add icon support for use in Tabbar and in navBar
 *
 */
import Icon from 'react-native-vector-icons/Ionicons'

/**
 * ## Colors variables
 * */
import { colors } from '../styles/index';

/**
 * ## Styles
 */
var styles = StyleSheet.create({
  item: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 10,
    width: 100,
    height: 100
  },
  icon: {
    fontSize: 50
  },
  touchHighlight: {
    color: colors.white
  }
})

/**
 * ### Translations
 */
var I18n = require('react-native-i18n')
import Translations from '../lib/Translations'
I18n.translations = Translations

export default class ActivityItem extends PureComponent {
  constructor(props) {
    super(props)
  }

  static propTypes = {
      text: PropTypes.string,
      item: PropTypes.object,
      icon_name: PropTypes.string,
      onPressButton: PropTypes.func
  }

  render() {
    return (
      <TouchableHighlight
        accessible={true}
        accessibilityLabel={'Tap me!'}
        underlayColor={colors.white}
        activeOpacity={0.8}
        onPress={()=>this.props.onPressButton(this.props.item)}
      >
        <View style={styles.item}>
          <Icon
            name={this.props.icon_name}
            style={styles.icon}
            color={this.props.item.is_active ? colors.blue : colors.light_blue}
          />
          <Text
            ellipsizeMode='tail'
            numberOfLines={1}
            style={{ color: this.props.item.is_active ? colors.blue : colors.light_blue }}
          >
              {this.props.text}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}