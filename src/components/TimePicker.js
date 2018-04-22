import React, { PureComponent } from 'react';
import {
  TimePickerAndroid,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    width: 100
  }
});

export default class DatePicker extends PureComponent {
  constructor(props) {
    super(props);
    this._open = this._open.bind(this);
  }
  _set_time(chosen_hour, chosen_minute) {
    this.props.time_changed(chosen_hour, chosen_minute);
  }
  async _open() {
    const {
      time: {
        hour,
        minute
      },
      is24Hour,
      mode
    } = this.props;
    try {
      const {
        action,
        hour: chosen_hour,
        minute: chosen_minute
      } = await TimePickerAndroid.open({
        hour,
        minute,
        is24Hour,
        mode
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        this._set_time(chosen_hour, chosen_minute);
      }
    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message);
    }
  }
  render() {
    const {
      hour,
      minute
    } = this.props.time;
    const time_string = `${hour}:${minute}`;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._open}>
          <Text>{time_string}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

DatePicker.propTypes = {
  time: PropTypes.objectOf(PropTypes.number),
  mode: PropTypes.string,
  time_changed: PropTypes.func
};
