import React, { Component } from 'react';
import Chip from 'material-ui/Chip';
import { Link } from 'react-router';

export default class App extends Component {
  constructor(props) {
    const { netsList, actions } = props;
    super(props);
    this.styles = {
      chip: {
        margin: 4,
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    };
    this.netsList = netsList;
    this.actions = actions;
  }

  handleClick (label) {console.log(66665);
    // const { actions } = this.props;
    // if (label === 'vk') {
    //   actions.getList();
    // }
  }

  handleDelete (key) {
    const chipToDelete = this.netsList.map((chip) => chip.key).indexOf(key);
    this.netsList.splice(chipToDelete, 1);
    this.setState({netsList: this.netsList});
  }

  renderChip(data) {
    let href = `/${data.href}`;
    return (
      // <Chip
      //   key={data.key}
      //   href={href}
      //   onTouchTap={() => {this.handleClick(data.label);}}
      //   style={this.styles.chip}
      // >
      //   {data.label}
      // </Chip>
      <li key={data.key}><Link to={href}>{data.label}</Link></li>
    );
  }

  render() {
    return (
      <div style={this.styles.wrapper}>
        <ul role="nav">
        {this.netsList.map(this.renderChip, this)}
        </ul>
      </div>
    );
  }
}