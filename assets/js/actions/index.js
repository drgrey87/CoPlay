import {constants} from '../constants'

export function setPage (text) {
  return {
    type: constants.SET_PAGE,
    payload: text
  }
}

let uploadedData = {
  type: constants.RECEIVE_DATA,
  payload: 1987
}

export function uploadPage () {
  return dispatch => {
    setTimeout(() => {
      dispatch(uploadedData)
    }, 5000)
  }
}

