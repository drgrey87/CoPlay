const initialState = {
  page: 1234234
}

export default function page (state = initialState, action) {
  switch (action.type) {
    case 'SET_PAGE':
      return { ...state, page: action.payload }

    case 'RECEIVE_DATA':
      return { ...state, page: action.payload }

    default:
      return state
  }
}
