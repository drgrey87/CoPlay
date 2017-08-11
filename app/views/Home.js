import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { ListItems } from '../../src/lib/data.service';

const Home = () => {
  return (
    <ScrollView contentContainerStyle={styles.view}>
        <View>
            {ListItems.map((item, idx) => (
              <TouchableOpacity
                key={idx}
                style={styles.listItem}
              >
                <Text style={styles.listItemTitle}>{item.label}</Text>
              </TouchableOpacity>
            ))}
        </View>
    </ScrollView>
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
  }
});

export default Home;
