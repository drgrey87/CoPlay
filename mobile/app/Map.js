import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  PropTypes,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Config from 'react-native-config';
import MapView from 'react-native-maps';

let { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;

// (Initial Static Location) Mumbai
const LATITUDE = +Config.LATITUDE;
const LONGITUDE = +Config.LONGITUDE;

const LATITUDE_DELTA = +Config.LATITUDE_DELTA;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class Map extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      },
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          }
        });
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );

    this.watchID = navigator.geolocation.watchPosition((position) => {
      const newRegion = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }

      this.onRegionChange(newRegion);
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    return (
      <MapView
        style={styles.map}
        region={this.state.region}
        showsUserLocation={true}
        followUserLocation={true}
        loadingEnabled={true}
        showsMyLocationButton={true}
        mapType={'hybrid'}
      />
    );
  }
};

let styles = StyleSheet.create({
  map: {
    position:'absolute',
    top:0,
    right:0,
    bottom:0,
    left:0,
    width:width,
    height:height
  }
});