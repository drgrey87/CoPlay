import IonicIcon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import React from 'react';

const size = 50;
const color = '#fff';
const user_circle = (<IonicIcon name="md-help" size={size} color={color} />);
const time = (<IonicIcon name="ios-time-outline" size={size} color={color} />);
const calendar = (<IonicIcon name="ios-calendar-outline" size={size} color={color} />);
const activity = (<Feather name="activity" size={size} color={color} />);

export const icons = {
  user_circle,
  time,
  calendar,
  activity
};

export const get_tab_icons = async () => {
  const tab_icons = await Promise.all([
    IonicIcon.getImageSource('ios-home', 30),
    IonicIcon.getImageSource('ios-search', 30),
    IonicIcon.getImageSource('ios-person', 30),
    IonicIcon.getImageSource('ios-map', 30),
    IonicIcon.getImageSource('ios-settings', 30)
  ]);
  const [home, explore, profile, map, settings] = tab_icons;
  return { home, explore, profile, map, settings };
};
