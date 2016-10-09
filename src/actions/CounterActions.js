import * as actionTypes from '../constants/ActionTypes';

export function increment(add) {
  return {
    type: actionTypes.INCREMENT_COUNTER,
    add: '1'
  };
}

export function decrement(add) {
  return {
    type: actionTypes.DECREMENT_COUNTER,
    add: '-1'
  };
}

export function getList() {
  return (dispatch) => {
    fetch('/list')
      .then(list => dispatch(increment()));
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

export function getVkData() {
  return (dispatch) => {
    fetch('/vk/list')
      .then((list) => list.json())
      .then((list) => {
        console.log('--------', list);
        dispatch({
          type: actionTypes.GET_VK_DATA,
          // list: [{id:1, name:'a'}, {id:2, name:'b'}, {id:3, name:'c'}, {id:4, name:'d'}]
          list: list
        })
      });
  };
}

export function getSoundCloudData() {
  return (dispatch) => {
    fetch('/list')
      .then((list) => {
        console.log('--------', list);
        dispatch({
          type: actionTypes.GET_SOUND_CLOUD_DATA,
          list: [{id:1, name:'a'}, {id:2, name:'b'}, {id:3, name:'c'}, {id:4, name:'d'}]
        })
      });
  };
}

// export function getVkData() {
//   return (dispatch) => {
//     setTimeout(() => {
//       dispatch({
//         type: types.GET_VK_DATA,
//         list: [{id:1, name:'a'}, {id:2, name:'b'}, {id:3, name:'c'}, {id:4, name:'d'}]
//       });
//     }, 1000);
//   };
// }

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
