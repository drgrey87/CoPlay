import Coplay from './src/CoPlay';

Coplay('android');

// import React, { Component } from 'react';
// import {
//     AppRegistry,
//     StyleSheet,
//     Text,
//     View
// } from 'react-native';
// import { Navigation } from 'react-native-navigation';
//
// class FirstTabScreen extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text style={styles.welcome}>
//                     Welcome to React Native!
//                 </Text>
//             </View>
//         );
//     }
// }
//
// class SecondTabScreen extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text style={styles.welcome}>
//                     Welcome to React Native!
//                 </Text>
//                 <Text style={styles.instructions}>
//                     SecondTabScreen
//                 </Text>
//             </View>
//         );
//     }
// }
//
//
// class PushedScreen extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text style={styles.welcome}>
//                     Welcome to React Native!
//                 </Text>
//                 <Text style={styles.instructions}>
//                     PushedScreen
//                 </Text>
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F5FCFF',
//     },
//     welcome: {
//         fontSize: 20,
//         textAlign: 'center',
//         margin: 10,
//     },
//     instructions: {
//         textAlign: 'center',
//         color: '#333333',
//         marginBottom: 5,
//     },
// });
//
// const navigatorStyle = {
//     statusBarColor: 'black',
//     statusBarTextColorScheme: 'light',
//     navigationBarColor: 'black',
//     navBarBackgroundColor: '#0a0a0a',
//     navBarTextColor: 'white',
//     navBarButtonColor: 'white',
//     tabBarButtonColor: 'red',
//     tabBarSelectedButtonColor: 'red',
//     tabBarBackgroundColor: 'white',
//     topBarElevationShadowEnabled: false,
//     navBarHideOnScroll: true,
//     tabBarHidden: true,
//     drawUnderTabBar: true
// };
//
// Navigation.registerComponent('mobile.FirstTabScreen', () => FirstTabScreen);
// Navigation.registerComponent('mobile.SecondTabScreen', () => SecondTabScreen);
// Navigation.registerComponent('mobile.PushedScreen', () => PushedScreen);
//
// Navigation.startSingleScreenApp({
//     screen: {
//         screen: 'mobile.FirstTabScreen',
//         title: 'Movies',
//         navigatorStyle,
//         leftButtons: [
//             {
//                 id: 'sideMenu'
//             }
//         ]
//     }
// });
