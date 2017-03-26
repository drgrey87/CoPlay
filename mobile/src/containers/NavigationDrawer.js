'use strict'

import React, { Component } from 'react'
import SideMenu from 'react-native-side-menu'
import Menu from '../components/Menu'
import {Actions, DefaultRenderer} from 'react-native-router-flux';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

/*
 * ## Imports
 *
 * Imports from redux
 */
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

/**
 * ## App class
 */
import reactMixin from 'react-mixin'
import TimerMixin from 'react-timer-mixin'

/**
 * The actions we need
 */
import * as drawerActions from '../reducers/drawer/drawerActions'

/**
 *  Save that state
 */
function mapStateToProps (state) {
  return {
    drawer: state.drawer,
    profile: state.global.currentUser
  }
}

/**
 * Bind all the actions from authActions, deviceActions and globalActions
 */
function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({ ...drawerActions }, dispatch)
  }
}

const styles = StyleSheet.create({})

class NavigationDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: this.props.open,
      turn: this.props.drawer.turn
    }
    this.onMenuItemSelected = this.onMenuItemSelected.bind(this);
    this.updateMenuState = this.updateMenuState.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.drawer.turn === this.state.turn) return;
    this.setState({
      isOpen: !this.state.isOpen,
      turn: nextProps.drawer.turn
    })
  }

  updateMenuState(isOpen) {
    this.setState({
      isOpen: isOpen
    })
  }

  onMenuItemSelected = (item) => {
    Actions[item]()
    this.setState({
      isOpen: false
    })
  }

  render() {
    const menu = <Menu
        username={this.props.profile.username}
        onItemSelected={this.onMenuItemSelected} />;
    const state = this.props.navigationState;
    const children = state.children;
    return (
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={(isOpen) => this.updateMenuState(isOpen)}
      >
        <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
      </SideMenu>
    );
  }
};

// Since we're using ES6 classes, have to define the TimerMixin
reactMixin(NavigationDrawer.prototype, TimerMixin)
/**
 * Connect the properties
 */
export default connect(mapStateToProps, mapDispatchToProps)(NavigationDrawer)

// import Drawer from 'react-native-drawer';
// import {Actions, DefaultRenderer} from 'react-native-router-flux';
//
// export default class NavigationDrawer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       open: false,
//       selectedItem: 'About',
//     }
//   }
//
//   render(){
//     const state = this.props.navigationState;
//     const children = state.children;
//     return (
//       <Drawer
//         ref="navigation"
//         open={state.open}
//         onOpen={()=>Actions.refresh({key:state.key, open: true})}
//         onClose={()=>Actions.refresh({key:state.key, open: false})}
//         type="displace"
//         content={<Menu />}
//         tapToClose={true}
//         openDrawerOffset={0.2}
//         panCloseMask={0.2}
//         negotiatePan={true}
//         acceptTap={true}
//         tweenHandler={(ratio) => ({
//           main: { opacity:Math.max(0.54,1-ratio) }
//         })}>
//         <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
//       </Drawer>
//     );
//   }
// }