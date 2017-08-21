import React, { Component, PropTypes } from 'react';

import {
  View,
  ScrollView,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Menu extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <View style={styles.drawer}>
        <View style={styles.header} key={0}>
          <View style={styles.headerIcon}>
            <Icon name="user-circle-o" size={50} color="#fff" />
          </View>
          <View style={styles.headerInfo} key={1}>
            <Text style={styles.headerEmail}>
              {this.props.username}
            </Text>
          </View>
        </View>
        <ScrollView contentContainerStyle={styles.content}>
          <TouchableOpacity
            key={2}
            style={styles.listItem}
            onPress={() => this.props.onItemSelected('Activities')}
          >
            <Text style={styles.listItemTitle}>Activities</Text>
          </TouchableOpacity>
          <TouchableOpacity
            key={3}
            style={styles.listItem}
            onPress={() => this.props.onItemSelected('Profile')}
          >
            <Text style={styles.listItemTitle}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            key={4}
            style={styles.listItem}
            onPress={() => this.props.onItemSelected('Logout')}
          >
            <Text style={styles.listItemTitle}>Logout</Text>
          </TouchableOpacity>
          <TouchableOpacity
            key={5}
            style={styles.listItem}
            onPress={() => this.props.onItemSelected('Logout')}
          >
            <Text style={styles.listItemTitle}>Logout2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            key={6}
            style={styles.listItem}
            onPress={() => this.props.onItemSelected('Logout')}
          >
            <Text style={styles.listItemTitle}>Logout3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            key={7}
            style={styles.listItem}
            onPress={() => this.props.onItemSelected('Logout')}
          >
            <Text style={styles.listItemTitle}>Logout4</Text>
          </TouchableOpacity>

        </ScrollView>
      </View>
    );
  }
}

/**
 * ### propTypes
 * * onItemSelected: hide drawer
 */
// Menu.propTypes = {
//   username: PropTypes.string.isRequired,
//   onItemSelected: PropTypes.func.isRequired
// }

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
  },
  header: {
    height: 180,
    padding: 16,
    backgroundColor: '#1565C0',
  },
  content: {
    padding: 16,
    backgroundColor: '#1E88E5',
  },
  headerInfo: {
    height: 56,
  },
  headerIcon: {
    width: 70,
    height: 70,
    borderRadius: 45,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
  },
  headerEmail: {
    color: '#fff',
    fontSize: 16,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: 80,
    marginBottom: 10,
  },
  listItemTitle: {
    fontSize: 18,
    flexShrink: 1,
    color: '#fff',
  },
});
