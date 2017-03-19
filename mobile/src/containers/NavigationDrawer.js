import React, { Component } from 'react'
import SideMenu from 'react-native-side-menu'
import Menu from '../components/Menu'
import {Actions, DefaultRenderer} from 'react-native-router-flux';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

const styles = StyleSheet.create({})

export default class NavigationDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectedItem: 'About',
    }
    this.onMenuItemSelected = this.onMenuItemSelected.bind(this);
    this.updateMenuState = this.updateMenuState.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen, });
  }

  onMenuItemSelected = (item) => {
    this.setState({
      isOpen: false,
      selectedItem: item,
    });
  }

  render() {
    const menu = <Menu onItemSelected={this.onMenuItemSelected} />;
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