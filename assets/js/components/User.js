import React, { Component, PropTypes } from 'react'

export default class User extends Component {
  render() {
    const {user} = this.props
    return (
      <div className='1111'>{user} - it's user</div>
    )
  }
}

User.propTypes = {
  user: PropTypes.string.isRequired
}
