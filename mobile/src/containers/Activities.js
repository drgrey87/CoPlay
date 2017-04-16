'use strict'

import React, {PureComponent} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  Button
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
 * ## Colors variables
 * */
import colors from '../styles/colors'

/**
 * ## Import components
 * */
import ActivityItem from '../components/ActivityItem'

/**
 * ## Styles
 */
var styles = StyleSheet.create({
  main_container: {
    justifyContent: 'space-between'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  spinnerWrap: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get("window").height
  },
  spinner: {
    padding: 8,
  },
  button: {
    color: colors.blue,
    margin: 10,
    width: 50
  }
})

/**
 * ### Translations
 */
var I18n = require('react-native-i18n')
import Translations from '../lib/Translations'
I18n.translations = Translations

class Activities extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.activities.data,
      isFetching: this.props.activities.isFetching,
      error: this.props.activities.error,
      is_active_button: false,
      changed_data: {}
    }
    this.onPressButton = this.onPressButton.bind(this)
    this.sendActivities = this.sendActivities.bind(this)
  }

  is_filed() {
    return this.state.data.size;
  }

  onPressButton(item) {
    let changed_data = this.state.changed_data;
    let index = this.state.data.findIndex(listItem => {
        return listItem.type === item.type;
      })
    this.setState({
      data: this.state.data.setIn([index, 'is_active'], !item.is_active),
      is_active_button: true
    })
  }

  sendActivities() {
    this.props.actions.setActivities(this.props.currentUser, this.state.data.toJSON())
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
    if (!this.is_filed()) {
      this.props.actions.getActivities(this.props.currentUser)
    }
  }

  get_itemData(item) {
      let data = {};
      switch (item.type) {
          case 'basketball':
          case 'football':
              data.icon_name=`md-${item.type}`;
              data.text=item.type;
              break;
          case 'tennis':
              data.icon_name=`md-${item.type}ball`;
              data.text=item.type;
              break;
          case 'badminton':
              data.icon_name=`md-tennisball`;
              data.text=item.type;
              break;
          case 'ice_hockey':
              data.icon_name=`md-tennisball`;
              data.text='hockey';
              break;
          case 'table_tennis':
              data.icon_name=`md-tennisball`;
              data.text='table tennis';
              break;
          case 'valleyball':
              data.icon_name=`md-tennisball`;
              data.text=item.type;
              break;
          case 'american_football':
              data.icon_name=`md-american-football`;
              data.text='american football';
              break;
          case 'handball':
              data.icon_name=`md-tennisball`;
              data.text=item.type;
              break;
          case 'frisbee':
              data.icon_name=`md-tennisball`;
              data.text=item.type;
              break;
          case 'other':
              data.icon_name=`ios-more`;
              data.text=item.type;
              break;
          default:
              data.icon_name=`md-tennisball`;
              data.text=item.type;
      }
      return data;
  }

  list_items() {
    return this.state.data.map((item, i) => {
      let item_data = this.get_itemData(item);
      return <ActivityItem key={i} text={item_data.text} icon_name={item_data.icon_name} item={item} onPressButton={this.onPressButton}/>
    })
  }

  render() {
    return (
      <View
        style={styles.main_container}
      >
      {this.state.isFetching
        ? <View style={styles.spinnerWrap}>
            <ActivityIndicator style={styles.spinner} animating size='large'/>
          </View>
        :
        <ScrollView contentContainerStyle={styles.container}>{this.list_items()}</ScrollView>
      }
        <Button
          onPress={this.sendActivities}
          title={I18n.t('Buttons.ok')}
          style={styles.button}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Activities)