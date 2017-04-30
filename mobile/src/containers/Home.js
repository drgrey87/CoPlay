import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button
} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../styles/colors'
import {Actions} from 'react-native-router-flux'

import { ListItems } from '../lib/data.service';

const Home = () => {

  let onPress = () => {
    Actions.CreateEvent()
  }

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
          onPress={onPress.bind(this)}
        />
    </View>
  );
}

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
  header1: {
    fontSize: 24,
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

export default Home;
