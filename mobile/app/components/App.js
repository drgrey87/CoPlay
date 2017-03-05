import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  DrawerLayoutAndroid,
  Navigator,
  ToolbarAndroid,
  TouchableOpacity,
  Image,
  BackAndroid,
  StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { routes, toolbarActions } from '../data.service';
import DrawerMenu from './DrawerMenu';
import Home from '../views/Home';
import About from '../views/About';
import Credits from '../views/Credits';
import Lindau from '../views/lighthouses/Lindau';
import Fanad from '../views/lighthouses/Fanad';
import Augustine from '../views/lighthouses/Augustine';
import Peggys from '../views/lighthouses/Peggys';
import Hercules from '../views/lighthouses/Hercules';
import Bass from '../views/lighthouses/Bass';
import Map from '../views/Map';
import { Router, Scene, Actions } from 'react-native-router-flux';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
/**
 * ### configureStore
 *
 *  ```configureStore``` will connect the ```reducers```
 *
 */
import configureStore from '../../src/store/configureStore'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      routes: [0],
      drawerClosed: true,
    }
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this._onActionSelected = this._onActionSelected.bind(this);
    this.setDrawerState = this.setDrawerState.bind(this);
    this.navBarLeftButton = this.navBarLeftButton.bind(this);
  }

  _onActionSelected(position) {
    switch (position) {
      case 0:
        Actions.about();
        break;
      case 1:
        Actions.credits();
        break;
      case 2:
        Actions.map();
        break;
    }
  }

  toggleDrawer() {
    if (this.state.drawerClosed) {
      this.DRAWER.openDrawer();
    } else {
      this.DRAWER.closeDrawer();
    }
  }

  setDrawerState() {
    this.setState({
      drawerClosed: !this.state.drawerClosed
    });
  }

  navBarLeftButton() {
    return (
      <TouchableOpacity onPress={this.toggleDrawer}>
        <Icon name='md-menu' size={25} style={styles.title}/>
      </TouchableOpacity>
    )
  }

  render() {
    const store = configureStore(getInitialState())

    return(
      <Provider store={store}>
        <DrawerLayoutAndroid
          drawerWidth={300}
          ref={(drawerElement) => { this.DRAWER = drawerElement; }}
          drawerPosition={DrawerLayoutAndroid.positions.left}
          onDrawerOpen={this.setDrawerState}
          onDrawerClose={this.setDrawerState}
          renderNavigationView={() => <DrawerMenu toggleDrawer={this.toggleDrawer} />}
        >
          <Router renderLeftButton={this.navBarLeftButton} navigationBarStyle={styles.appBar} titleStyle={styles.title}>
             <Scene key="root">
               <Scene
                 key="home"
                 component={Home}
                 title="Home"
                 initial
               />
               <Scene
                 key="lindau"
                 component={Lindau}
                 title="Lindau"
               />
               <Scene
                 key="fanad"
                 component={Fanad}
                 title="Fanad"
               />
               <Scene
                 key="augustine"
                 component={Augustine}
                 title="Augustine"
               />
               <Scene
                 key="peggys"
                 component={Peggys}
                 title="Peggys"
               />
               <Scene
                 key="hercules"
                 component={Hercules}
                 title="Hercules"
               />
               <Scene
                 key="bass"
                 component={Bass}
                 title="Bass"
               />
               <Scene
                 key="about"
                 component={About}
                 title="About"
               />
               <Scene
                 key="credits"
                 component={Credits}
                 title="Credits"
               />
               <Scene
                 key="map"
                 component={Map}
                 title="Map"
               />
             </Scene>
          </Router>
        </DrawerLayoutAndroid>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  appBar: {
    height: 56,
    backgroundColor: '#2196F3',
    elevation: 4
  },
  title: {
    color: '#fff'
  }
});

export default App;
