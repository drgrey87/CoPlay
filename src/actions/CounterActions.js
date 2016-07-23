import { INCREMENT_COUNTER, DECREMENT_COUNTER, GET_LIST } from '../constants/ActionTypes';

export function increment(add) {
  return {
    type: INCREMENT_COUNTER,
    add: '1'
  };
}

export function decrement(add) {
  return {
    type: DECREMENT_COUNTER,
    add: '-1'
  };
}

export function getList() {
  return (dispatch) => {
    fetch('/list')
      .then(list => dispatch(increment()))
    // VK.Api.call('audio.get', {extended:1, count: 200, offset: 0},(r) => {
    //   console.log(1111, r); dispatch(increment());
    //   if(r.response) {
    //     alert('Привет, ' + r.response[0].first_name);
    //   }
    // });
  };
  // return {
  //   type: GET_LIST
  // };
}

// export function incrementIfOdd() {
//   return (dispatch, getState) => {
//     const { counter } = getState();
//
//     if (counter % 2 === 0) {
//       return;
//     }
//
//     dispatch(increment());
//   };
// }
//
// export function incrementAsync() {
//   return dispatch => {
//     setTimeout(() => {
//       dispatch(increment());
//     }, 1000);
//   };
// }
