import React, { Component, PropTypes } from 'react';

import {
  ScrollView,
  View,
  Image,
  Text,
  Linking,
  StyleSheet,
} from 'react-native';

import { lighthouses } from '../lib/data.service';

const LighthouseBody = (props) => {
  const title = lighthouses[props.pageIndex].title;
  const content = lighthouses[props.pageIndex].content;
  const image = lighthouses[props.pageIndex].image;
  const photo = lighthouses[props.pageIndex].photo;
  const photoUrl = lighthouses[props.pageIndex].url;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.h1}>{title}</Text>
      <View style={styles.figure}>
        <Image source={{ uri: image }} style={styles.img} />
        <View style={styles.credits}>
          <Text style={styles.labelCredits}>Photo: </Text>
          <Text
            style={[styles.linkCredits, styles.labelCredits]}
            onPress={() => Linking.openURL(photoUrl)}
          >
            {photo}
          </Text>
        </View>
      </View>
      <Text style={styles.p}>{content}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 15,
  },
  h1: {
    fontSize: 22,
    marginBottom: 20,
  },
  p: {
    fontSize: 16,
    lineHeight: 24,
  },
  figure: {
    marginBottom: 20,
  },
  img: {
    width: 300,
    height: 300,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: '#000',
  },
  credits: {
    flexDirection: 'row',
  },
  labelCredits: {
    fontSize: 18,
  },
  linkCredits: {
    fontStyle: 'italic',
    color: '#2962FF',
  },
});

export default LighthouseBody;
