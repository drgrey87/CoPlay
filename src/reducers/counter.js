import { INCREMENT_COUNTER, DECREMENT_COUNTER, GET_LIST } from '../constants/ActionTypes';

const initialState = {
  state: 0,
  list: []
};

/**
 * i can use like this return Object.assign({},data) or like below
 * */
export default function counter(data = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      data.state += Number(action.add);
      return {...data};
    case DECREMENT_COUNTER:
      data.state += Number(action.add);
      return {...data};
    case GET_LIST:
      data.state += Number(action.add);
      return {...data};
    default:
      return {...data};
  }
}
