import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'react-redux';
import { connect } from 'react-redux';
import * as CounterActions from '../../actions/CounterActions';

class Vk extends Component {

  componentDidMount() {
    this.props.actions.getVkData();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  vkPage() {
    let page;
    if (this.props.vkData.list.length) {
      page = (
        this.props.vkData.list.map(function (item) {
          return <div key={item.id}>
              <p>{item.artist}</p>
              <p>{item.title}</p>
              <audio src={item.url} type="audio/mp3" preload="auto" controls></audio>
            </div>;
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