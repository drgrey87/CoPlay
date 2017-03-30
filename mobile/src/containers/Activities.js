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

class Activities extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      isFetching: false,
      error: null
    }
  }

  is_filed() {
    return this.props.activities.data.some(item => {
      return item.is_active === true || item.rate !== 5;
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
        data: nextProps.activities.data,
        isFetching: nextProps.activities.isFetching,
        error: nextProps.activities.error
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
        data: this.props.activities.data,
        isFetching: this.props.activities.isFetching,
        error: this.props.activities.error
      })
    } else {
      this.props.actions.getActivities(this.props.currentUser)
    }
  }

  list_items() {
    return this.state.data.map((item, i) => {
      return <View key={i}>
        <Icon name="md-basketball" size={50} color="#fff"/>
        <Text>
          {item.type}
        </Text>
      </View>
    })
  }

  render() {
    return (
      <ScrollView>
        {this.list_items()}
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Activities)