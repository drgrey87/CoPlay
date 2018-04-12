import React, { PureComponent } from 'react';
import {
  DatePickerAndroid,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});

export default class DatePicker extends PureComponent {
  constructor(props) {
    super(props);
    this._open = this._open.bind(this);
  }
  get _min_date() {
    return this.props.min_date;
  }
  get _mode() {
    return this.props.mode;
  }
  _set_date(chosen_year, chosen_month, chosen_day) {
    this.props.date_changed(chosen_year, chosen_month, chosen_day);
  }
  async _open() {
    const min_date = this._min_date;
    const {
      year,
      month,
      day
    } = this.props.date;
    const mode = this._mode;
    try {
      const {
        action,
        year: chosen_year,
        month: chosen_month,
        day: chosen_day
      } = await DatePickerAndroid.open({
        minDate: min_date,
        date: new Date(year, month, day),
        mode
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        this._set_date(chosen_year, chosen_month, chosen_day);
      }
    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message);
    }
  }
  render() {
    const {
      day,
      month,
      year
    } = this.props.date;
    const date_string = `${day}/${month}/${year}`;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._open}>
          <Text>{date_string}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

DatePicker.propTypes = {
  min_date: PropTypes.instanceOf(Date),
  date: PropTypes.objectOf(PropTypes.number),
  mode: PropTypes.string,
  date_changed: PropTypes.func
};
