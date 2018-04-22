import IonicIcon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import React from 'react';
import {
  colors,
  icon_sizes
} from '../styles/index';

const size = icon_sizes[25];
const color = colors.light_blue;
const tab_size = icon_sizes[30];
const user_circle = (<IonicIcon name="md-help" size={size} color={color} />);
const time = (<IonicIcon name="ios-time-outline" size={size} color={color} />);
const calendar = (<IonicIcon name="ios-calendar-outline" size={size} color={color} />);
const activity = (<Feather name="activity" size={size} color={color} />);
const heartbeat = (<FontAwesome name="heartbeat" size={size} color={color} />);
const address = (<Entypo name="address" size={size} color={color} />);

export const icons = {
  user_circle,
  time,
  calendar,
  activity,
  heartbeat,
  address
};

export const get_tab_icons = async () => {
  const tab_icons = await Promise.all([
    IonicIcon.getImageSource('ios-home', tab_size),
    IonicIcon.getImageSource('ios-search', tab_size),
    IonicIcon.getImageSource('ios-person', tab_size),
    IonicIcon.getImageSource('ios-map', tab_size),
    IonicIcon.getImageSource('ios-settings', tab_size)
  ]);
  const [home, explore, profile, map, settings] = tab_icons;
  return { home, explore, profile, map, settings };
};
