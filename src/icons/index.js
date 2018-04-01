import IonicIcon from 'react-native-vector-icons/Ionicons';
import React from 'react';

const size = 50;
const color = '#fff';
const user_circle = (<IonicIcon name="md-help" size={size} color={color} />);

export const icons = {
  user_circle,
};

export const get_tab_icons = async () => {
  const tab_icons = await Promise.all([
    IonicIcon.getImageSource('ios-home', 30),
    IonicIcon.getImageSource('ios-search', 30),
    IonicIcon.getImageSource('ios-person', 30),
    IonicIcon.getImageSource('ios-map', 30),
    IonicIcon.getImageSource('ios-settings', 30),
  ]);
  const [home, explore, profile, map, settings] = tab_icons;
  return { home, explore, profile, map, settings };
};
