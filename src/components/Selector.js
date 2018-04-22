import React, { PureComponent } from 'react';
import {
  View,
  Picker,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 50
  }
});

class Selector extends PureComponent {
  get _picker_items() {
    return this
      .props
      .items
      .map(item => (<Picker.Item label={item} value={item} key={item} />));
  }
  get _selected_value() {
    return this.props.selected_value;
  }
  get _mode() {
    return this.props.mode;
  }
  render() {
    const picker_items = this._picker_items;
    const selected_value = this._selected_value;
    return (
      <View>
        <Picker
          selectedValue={selected_value}
          style={styles.container}
          mode={this._mode}
          onValueChange={item_value => this.props.selector_changed(item_value)}
        >
          {picker_items}
        </Picker>
      </View>
    );
  }
}

Selector.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  selected_value: PropTypes.string,
  mode: PropTypes.string,
  selector_changed: PropTypes.func
};

export default Selector;
