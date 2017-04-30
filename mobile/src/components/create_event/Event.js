'use strict'

import React, {PureComponent, PropTypes} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  TouchableHighlight,
  TextInput,
  FlatList,
  ScrollView
} from 'react-native';

/**
 * ## Imports
 *
 * Redux
 */
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

/**
 * The actions we need
 */
import * as activitiesActions from '../../reducers/activities/activitiesActions'
let mapStateToProps = (state) => {
  return {
    activities: state.activities,
    currentUser: state.global.currentUser,
    create_events: state.create_Events
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...activitiesActions }, dispatch)
  }
}

/**
 *  The fantastic little form library
 */
import t from 'tcomb-form-native'
let Form = t.form.Form

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
import colors from '../../styles/colors'

/**
 * ## Styles
 */
let styles = StyleSheet.create({
  item: {
    flex: 1
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
import Translations from '../../lib/Translations'
I18n.translations = Translations

class Event extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isFetching: this.props.activities.isFetching,
      error: this.props.activities.error
    }
    this._event_name_changed = this._event_name_changed.bind(this)
  }

  componentDidMount () {
    if (!this.props.activities.data.size) {
      this.props.actions.getActivities(this.props.currentUser)
    }
  }

  _event_name_changed() {

  }

  get _activities_component() {
    return this.props.data.map((item, i) => {
      return <View key={i}><Text>{item.text}</Text></View>
    })
  }

  render() {
    return (
      <View style={styles.item}>
        {this.state.isFetching
          ?
          <View style={styles.spinnerWrap}>
            <ActivityIndicator style={styles.spinner} animating size='large'/>
          </View>
          :
          <View>
            <View>
              <Text>
                {I18n.t('Events.name_txt')}
              </Text>
              <TextInput
                autoFocus
                placeholder={I18n.t('Events.name_placeholder')}
                onChange={this._event_name_changed}
              />
            </View>
            <View>
              <Text>
                {I18n.t('Events.types')}
              </Text>
              <ScrollView>
                {this._activities_component}
              </ScrollView>
            </View>
          </View>
        }
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Event)