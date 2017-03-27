import React, { Component, PropTypes } from 'react';

import {
  View,
  ScrollView,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { menuItems } from '../lib/data.service';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state={
      route: 0
    }
  }


  render() {
    return(
      <ScrollView contentContainerStyle={styles.drawer}>
        <View style={styles.header} key={0}>
          <View style={styles.headerIcon} key={0}>
            <Icon name="user-circle-o" size={50} color="#fff" />
          </View>
          <View style={styles.headerInfo} key={1}>
            <Text style={styles.headerEmail} key={1}>
              {this.props.username}
            </Text>
          </View>
        </View>
        <View style={styles.content} key={1}>
          <View>
            {menuItems.map((item, idx) => (
              <TouchableOpacity
                key={idx}
                style={styles.listItem}
              >
                <Text style={styles.listItemTitle}>{item.label}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              key={menuItems.length}
              style={styles.listItem}
              onPress={() => this.props.onItemSelected('Activities')}
            >
              <Text style={styles.listItemTitle}>Activities</Text>
            </TouchableOpacity>
            <TouchableOpacity
                key={menuItems.length+1}
                style={styles.listItem}
                onPress={() => this.props.onItemSelected('Profile')}
            >
              <Text style={styles.listItemTitle}>Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

/**
 * ### propTypes
 * * onItemSelected: hide drawer
 */
Menu.propTypes = {
  username: PropTypes.string.isRequired,
  onItemSelected: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
  },
  header: {
    height: 180,
    padding: 16,
    backgroundColor: '#1565C0'
  },
  content: {
    flex: 1,
    padding: 16,
    backgroundColor: '#1E88E5'
  },
  headerInfo: {
    height: 56
  },
  headerIcon: {
    width: 70,
    height: 70,
    borderRadius: 45,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3'
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20
  },
  headerEmail: {
    color: '#fff',
    fontSize: 16
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: 80,
    marginBottom: 10
  },
  listItemTitle: {
    fontSize: 18,
    flexShrink: 1,
    color: '#fff'
  }
});
