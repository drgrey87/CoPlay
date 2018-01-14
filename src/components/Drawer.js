import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as AuthActions from '../reducers/auth/authActions';
import * as ProfileActions from '../reducers/profile/profileActions';

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

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...AuthActions, ...ProfileActions }, dispatch),
});

const mapStateToProps = state => ({
  username: state.auth.get('form').fields.username,
  sessionToken: state.global.get('currentUser'),
});

class Menu extends Component {
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
            onPress={() => this.on_item_selected('Activities')}
          >
            <Text style={styles.listItemTitle}>Activities</Text>
          </TouchableOpacity>
          <TouchableOpacity
            key={3}
            style={styles.listItem}
            onPress={() => this.props.actions.getProfile(this.props.sessionToken)}
          >
            <Text style={styles.listItemTitle}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            key={4}
            style={styles.listItem}
            onPress={this.props.actions.logout}
          >
            <Text style={styles.listItemTitle}>Logout</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
Menu.propTypes = {
  username: PropTypes.string.isRequired,
  sessionToken: PropTypes.string.isRequired,
  actions: React.PropTypes.shape({
    logout: PropTypes.func.isRequired,
    getProfile: PropTypes.func.isRequired,
  }),
};
Menu.defaultProps = {
  actions: {},
};
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
