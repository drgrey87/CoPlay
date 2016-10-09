import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CounterActions from '../../actions/CounterActions';

class Vk extends Component {

  componentDidMount() {
    // console.log('this.props', this.props);
    this.props.actions.getVkData();
  }

  vkPage() {
    let page;
    if (this.props.vkData.list.length) {
      page = (
        this.props.vkData.list.map(function (item) {
          return <p key={item.id}>{item.artist}</p>;
        })
      );
    } else {
      page = 'About';
    }
    return page;
  }
  render() {
    const { data, vkData, actions } = this.props;
    return <div>
      {this.vkPage()}
    </div>
  }
}

Vk.propTypes = {
  data: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  vkData: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    data: state.counter,
    vkData: state.netsList.nets[0]
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