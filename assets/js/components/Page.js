import React, { Component, PropTypes } from 'react'
import RaisedButton from 'material-ui/lib/raised-button';

export default class Page extends Component {
  onPageBtnClick() {
    this.props.setPage(3334)
  }

  uploadData() {
    this.props.uploadPage()
  }

  render() {

    const {page} = this.props
    return <div>
      <div className='1111' onClick={this.onPageBtnClick.bind(this)}>{page} - it's page mo</div>
      <h1 onClick={this.uploadData.bind(this)}>{page} - hahaha</h1>
      <RaisedButton label="Default" />
    </div>
  }
}

Page.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired
}
