import React, { Component } from 'react'
// import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import User from '../components/User'
import Page from '../components/Page'
import * as pageActions from '../actions'

function mapStateToProps(state) {
   return {
     user: state.user,
     page: state.page
   }
}

function mapDispatchToProps(dispatch) {
 return {
   pageActions: bindActionCreators(pageActions, dispatch)
 }
}

export class App extends Component {
  render() {
    const {user, page} = this.props
    const {setPage, uploadPage} = this.props.pageActions
    return (
      <div className='1111'>
        <User user = {user.user}></User>
        <Page page = {page.page} setPage = {setPage} uploadPage={uploadPage}></Page>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
