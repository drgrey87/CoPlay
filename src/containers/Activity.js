/**
 * # Activity.js
 *
 * This component provides an interface for a logged in user to change
 * their username and email.
 * It too is a container so there is boilerplate from Redux similar to
 * ```App``` and ```Login```
 */

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';
import PropTypes from 'prop-types';
import MapView from 'react-native-maps';
import Config from 'react-native-config';
import t from 'tcomb-form-native';
import I18n from 'react-native-i18n';
import * as activity_actions from '../reducers/activities/activitiesActions';
import ErrorAlert from '../components/ErrorAlert';
import Selector from '../components/Selector';
import DatePicker from '../components/DatePicker';
import TimePicker from '../components/TimePicker';
import { icons } from '../icons/index';
import { colors } from '../styles/index';
// import FormButton from '../components/FormButton';
// import Header from '../components/Header';
// import ItemCheckbox from '../components/ItemCheckbox';
import Translations from '../lib/Translations.json';

I18n.translations = Translations;
// const Form = t.form.Form;
const ACTIVITIES = [
  I18n.t('Activities.basketball'),
  I18n.t('Activities.football'),
  I18n.t('Activities.tennis'),
  I18n.t('Activities.badminton'),
  I18n.t('Activities.ice_hockey'),
  I18n.t('Activities.table_tennis'),
  I18n.t('Activities.valleyball'),
  I18n.t('Activities.american_football'),
  I18n.t('Activities.handball'),
  I18n.t('Activities.frisbee'),
  I18n.t('Activities.other')
];
const SELECTOR_MODE = 'dialog';
const PICKER_MODE = {
  DATEPICKER_ANDROID: 'calendar',
  TIMEPICKER_ANDROID: 'default'
};
const MAP_WIDTH = 300;
const MAP_HEIGHT = 300;
const ASPECT_RATIO = MAP_WIDTH / MAP_HEIGHT;

const LATITUDE = +Config.LATITUDE;
const LONGITUDE = +Config.LONGITUDE;

const LATITUDE_DELTA = +Config.LATITUDE_DELTA;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'space-between'
  },
  block: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  description: {
    flex: 1
  },
  action_block: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  icon: {
    // marginRight: 10
    // width: 25
  },
  select_style: {
    height: 50,
    width: 100
  },
  place_input_wrap: {
    borderBottomColor: colors.black,
    borderBottomWidth: 1,
    width: 150
  },
  inputs: {

  },
  map: {
    flex: 1,
    height: MAP_HEIGHT
  }
});

function mapStateToProps(state) {
  return {
    activities: state.activities
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...activity_actions }, dispatch)
  };
}

class Activity extends PureComponent {
  constructor(props) {
    super(props);
    const date = new Date();
    this.error_alert = new ErrorAlert();
    this.state = {
      activity: ACTIVITIES[0],
      date: {
        year: (props.date && props.date.year) || date.getFullYear(),
        month: (props.date && props.date.month) || date.getMonth(),
        day: (props.date && props.date.day) || date.getDate()
      },
      min_date: new Date(),
      time: {
        hour: (props.time && props.time.hour) || date.getHours(),
        minute: (props.time && props.time.minute) || date.getMinutes()
      },
      place: '',
      description: '',
      initial_region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }
    };
    this._activity_changed = this._activity_changed.bind(this);
    this._date_changed = this._date_changed.bind(this);
    this._time_changed = this._time_changed.bind(this);
  }
  _activity_changed(activity) {
    this.setState({
      activity
    });
  }
  _date_changed(year, month, day) {
    this.setState({
      date: {
        year,
        month,
        day
      }
    });
  }
  _time_changed(hour, minute) {
    this.setState({
      time: {
        hour,
        minute
      }
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.block}>
          <View style={styles.description}>
            <Text>{I18n.t('Activity.activity')}</Text>
          </View>
          <View style={styles.action_block}>
            <View style={styles.icon}>
              {icons.heartbeat}
            </View>
            <Selector
              items={ACTIVITIES}
              selected_value={this.state.activity}
              selector_changed={this._activity_changed}
              mode={SELECTOR_MODE}
            />
          </View>
        </View>
        <View style={styles.block}>
          <View style={styles.description}>
            <Text>{I18n.t('Activity.date')}</Text>
          </View>
          <View>
            <View style={styles.action_block}>
              <View style={styles.icon}>
                {icons.calendar}
              </View>
              <DatePicker
                min_date={new Date()}
                mode={PICKER_MODE.DATEPICKER_ANDROID}
                date={this.state.date}
                date_changed={this._date_changed}
              />
            </View>
          </View>
        </View>
        <View style={styles.block}>
          <View style={styles.description}>
            <Text>{I18n.t('Activity.time')}</Text>
          </View>
          <View>
            <View style={styles.action_block}>
              <View style={styles.icon}>
                {icons.time}
              </View>
              <TimePicker
                mode={PICKER_MODE.TIMEPICKER_ANDROID}
                time={this.state.time}
                time_changed={this._time_changed}
              />
            </View>
          </View>
        </View>
        <View style={styles.block}>
          <View style={styles.description}>
            <Text>{I18n.t('Activity.place')}</Text>
          </View>
          <View style={styles.action_block}>
            <View style={styles.icon}>
              {icons.address}
            </View>
            <View style={styles.place_input_wrap}>
              <TextInput
                multiline={false}
                style={styles.inputs}
                // onChangeText={(text) => this.setState({text})}
                placeholder={I18n.t('Activity.input_placeholder')}
              />
            </View>
          </View>
        </View>
        <MapView
          style={styles.map}
          region={this.state.initial_region}
          showsUserLocation
          followUserLocation
          loadingEnabled
          showsMyLocationButton
        />
        {/*<FormButton*/}
          {/*isDisabled={!this.props.profile.form.isValid || this.props.profile.form.isFetching}*/}
          {/*onPress={onButtonPress.bind(self)}*/}
          {/*buttonText={profileButtonText}*/}
        {/*/>*/}

      </View>
    );
  }
}

Activity.propTypes = {
  date: PropTypes.PropTypes.shape({
    year: PropTypes.number,
    month: PropTypes.number,
    day: PropTypes.number
  }),
  time: PropTypes.PropTypes.shape({
    hour: PropTypes.number,
    minute: PropTypes.number
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Activity);
