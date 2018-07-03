import { INCREMENT } from '../actionTypes/login'

const initialState = {
  counter: 0,
}

export default function todos (state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      }

    default:
      return state
  }
}
