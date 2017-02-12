/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  ToolbarAndroid
} from 'react-native';
import App from './app/components/App'

export default class mobile extends Component {

   // render() {
   //   return (
   //     <App />
   //   );
   // }

 constructor() {
   super();
//    this.onIconClicked = this.onIconClicked.bind(this);
 }

 render() {
   let navigationView = (
     <View style={{flex: 1, backgroundColor: '#fff'}}>
       <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
     </View>
   );

   return (
     <DrawerLayoutAndroid
       drawerWidth={300}
       drawerPosition={DrawerLayoutAndroid.positions.Left}
       renderNavigationView={() => navigationView}
       ref={(drawer) => this.drawer = drawer}
       >
       <ToolbarAndroid
         navIcon={require('./app/assets/1.png')}
         style={{backgroundColor: 'red', height:50}}
         title="AwesomeApp"
         actions={[
           {title: 'Settings', icon: require('./app/assets/2.png'), show: 'always'},
           {title: 'Hamburger', icon: require('./app/assets/3.png'), show: 'always'},
         ]}
//          onIconClicked={this.onIconClicked}
         onIconClicked={()=>this.drawer.openDrawer()}
         onActionSelected={this.onActionSelected} />
     </DrawerLayoutAndroid>
   )
 }
//
//  onIconClicked() {
//    this.drawer.openDrawer();
//  }
//
//  onActionSelected(position) {
//    if (position === 0) { // index of 'Settings'
//      alert(1111);
//    }
//  }

  // render() {
  //   var navigationView = (
  //     <View style={{flex: 1, backgroundColor: '#e5e5e5'}}>
  //       <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
  //     </View>
  //   );
  //   return (
  //     <DrawerLayoutAndroid
  //       drawerWidth={300}
  //       drawerPosition={DrawerLayoutAndroid.positions.Left}
  //       renderNavigationView={() => navigationView}>
  //       <View style={{flex: 1, alignItems: 'center'}}>
  //         <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
  //         <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
  //       </View>
  //     </DrawerLayoutAndroid>
  //   );
  // }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
});

AppRegistry.registerComponent('mobile', () => mobile);
