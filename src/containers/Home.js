import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import ActionButton from 'react-native-action-button';
import colors from '../styles/colors';
import { ListItems } from '../lib/data.service';

const styles = StyleSheet.create({
  view: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
    padding: 20
  },
  img: {
    width: 300,
    height: 300,
    marginBottom: 10
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 10
  },
  photo: {
    fontStyle: 'italic',
    marginBottom: 15
  },
  container: {
    flex: 1
  }
});
export default class Home extends Component {
  constructor() {
    super();
    this.on_press = this.on_press.bind(this);
  }
  on_press() {
    this.props.navigator.push({
      screen: 'mobile.Activity'
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.view}>
          {ListItems.map((item, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.listItem}
            >
              <Text style={styles.listItemTitle}>{item.label}</Text>
            </TouchableOpacity>
          ))}
          {ListItems.map((item, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.listItem}
            >
              <Text style={styles.listItemTitle}>{item.label}</Text>
            </TouchableOpacity>
          ))}
          {ListItems.map((item, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.listItem}
            >
              <Text style={styles.listItemTitle}>{item.label}</Text>
            </TouchableOpacity>
          ))}
          {ListItems.map((item, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.listItem}
            >
              <Text style={styles.listItemTitle}>{item.label}</Text>
            </TouchableOpacity>
          ))}
          {ListItems.map((item, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.listItem}
            >
              <Text style={styles.listItemTitle}>{item.label}</Text>
            </TouchableOpacity>
          ))}
          {ListItems.map((item, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.listItem}
            >
              <Text style={styles.listItemTitle}>{item.label}</Text>
            </TouchableOpacity>
          ))}
          {ListItems.map((item, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.listItem}
            >
              <Text style={styles.listItemTitle}>{item.label}</Text>
            </TouchableOpacity>
          ))}
          {ListItems.map((item, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.listItem}
            >
              <Text style={styles.listItemTitle}>{item.label}</Text>
            </TouchableOpacity>
          ))}
          {ListItems.map((item, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.listItem}
            >
              <Text style={styles.listItemTitle}>{item.label}</Text>
            </TouchableOpacity>
          ))}
          {ListItems.map((item, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.listItem}
            >
              <Text style={styles.listItemTitle}>{item.label}</Text>
            </TouchableOpacity>
          ))}
          {ListItems.map((item, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.listItem}
            >
              <Text style={styles.listItemTitle}>{item.label}</Text>
            </TouchableOpacity>
          ))}
          {ListItems.map((item, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.listItem}
            >
              <Text style={styles.listItemTitle}>{item.label}</Text>
            </TouchableOpacity>
          ))}
          {ListItems.map((item, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.listItem}
            >
              <Text style={styles.listItemTitle}>{item.label}</Text>
            </TouchableOpacity>
          ))}
          {ListItems.map((item, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.listItem}
            >
              <Text style={styles.listItemTitle}>{item.label}</Text>
            </TouchableOpacity>
          ))}
          {ListItems.map((item, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.listItem}
            >
              <Text style={styles.listItemTitle}>{item.label}</Text>
            </TouchableOpacity>
          ))}
          {ListItems.map((item, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.listItem}
            >
              <Text style={styles.listItemTitle}>{item.label}</Text>
            </TouchableOpacity>
          ))}
          {ListItems.map((item, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.listItem}
            >
              <Text style={styles.listItemTitle}>{item.label}</Text>
            </TouchableOpacity>
          ))}
          {ListItems.map((item, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.listItem}
            >
              <Text style={styles.listItemTitle}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <ActionButton
          buttonColor={colors.blue}
          onPress={this.on_press}
        />
      </View>
    );
  }
}
