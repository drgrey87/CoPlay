import { INCREMENT_COUNTER, DECREMENT_COUNTER, GET_LIST, GET_NETS_LIST , GET_VK_DATA} from '../constants/ActionTypes';

const initialState = {
  nets: [
    {key: 0, label: 'vk', href: 'vk'},
    {key: 1, label: 'yandex music', href: 'yandex'},
    {key: 2, label: 'sound cloud', href: 'sound_cloud'}
  ]
};

/**
 * i can use like this return Object.assign({},data) or like below
 * */
export default function netsList(data = initialState, action) {
  switch (action.type) {
    case GET_NETS_LIST:
      return {...data};
    case GET_VK_DATA:
      console.log('data', data);
      return {...data};
    default:
      return {...data};
  }
}
