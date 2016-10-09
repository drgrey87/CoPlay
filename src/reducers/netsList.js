import * as actionTypes from '../constants/ActionTypes';

const initialState = {
  nets: [
    {key: 0, label: '1vk', href: 'vk', list: []},
    {key: 1, label: 'yandex music', href: 'yandex', list: []},
    {key: 2, label: 'sound cloud', href: 'sound_cloud', list: []}
  ]
};

/**
 * i can use like this return Object.assign({},data) or like below
 * */
export default function netsList(data = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_NETS_LIST:
      return {...data};
    case actionTypes.GET_VK_DATA:
      let newData = Object.assign({}, data);
      newData.nets[0].list.push(...action.list);
      return newData;
    // case actionTypes.GET_SOUND_CLOUD_DATA:
    //   let newData = Object.assign({}, data);
    //   newData.nets[0].list.push(...action.list);
    //   return newData;
    default:
      return {...data};
  }
}
