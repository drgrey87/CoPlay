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
    this.state = { chosen_date: props.date || props.min_date };
    this._open = this._open.bind(this);
  }
  get _min_date() {
    return this.props.min_date;
  }
  get _mode() {
    return this.props.mode;
  }
  _set_date(chosen_date) {
    this.setState({ chosen_date });
  }
  async _open() {
    const min_date = this._min_date;
    const date = this.state.chosen_date;
    const mode = this._mode;
    try {
      const {
        action,
        year,
        month,
        day
      } = await DatePickerAndroid.open({
        minDate: min_date,
        date,
        mode
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        this.props.date_changed(new Date(year, month, day));
      }
    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message);
    }
  }
  render() {
    const date = new Date(this.state.chosen_date);
    const date_month = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const date_string = `${date_month}/${month}/${year}`;
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
  date: PropTypes.instanceOf(Date),
  mode: PropTypes.string,
  date_changed: PropTypes.func
};
