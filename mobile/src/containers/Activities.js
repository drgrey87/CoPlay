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
import * as activitiesActions from '../reducers/activities/activitiesActions'

function mapStateToProps (state) {
  return {
    activities: state.activities,
    currentUser: state.global.currentUser
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({ ...activitiesActions }, dispatch)
  }
}

/**
 * ### Translations
 */
var I18n = require('react-native-i18n')
import Translations from '../lib/Translations'
I18n.translations = Translations

export default class Activities extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activities: {}
    }
  }

  is_filed() {
    Object.keys(this.props.activities.data).some((item)=> {
      return this.props.activities.data[item].isActive = true || this.props.activities.data[item].rate !== 5;
    })
  }

  /**
   * ### componentWillReceiveProps
   *
   * Since the Forms are looking at the state for the values of the
   * fields, when we we need to set them
   */
  componentWillReceiveProps (nextProps) {
    if (nextProps) {
      this.setState({
        activities: nextProps
      })
    }
  }

  /**
   * ### componentDidMount
   *
   * During Hot Loading, when the component mounts due the state
   * immediately being in a "logged in" state, we need to just set the
   * form fields.  Otherwise, we need to go fetch the fields
   */
  componentDidMount () {
    if (this.is_filed()) {
      this.setState({
        activities: this.props.activities
      })
    } else {
      this.props.actions.getActivities(this.props.currentUser)
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile)