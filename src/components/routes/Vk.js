import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CounterActions from '../../actions/CounterActions';

class Vk extends Component {
  // constructor() {
  //   const {netsList, actions} = props;
  //   super(props);
  //   console.log('aaaa', actions);
  // }

  componentDidMount() {
    // console.log('this.props', this.props);
    this.props.actions.getVkData();
  }

  render() {
    // console.log('this.props', this.props);
    return <div>About</div>
  }
}

Vk.propTypes = {
  data: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  netsList: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    data: state.counter,
    netsList: state.netsList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CounterActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Vk);