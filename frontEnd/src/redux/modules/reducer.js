import initialState from './initialState'
import {
  GET_COMICS_PENDING,
  GET_COMICS_FULLFILED,
  GET_COMICS_REJECTED,
  SET_FILTER,
  SET_SORTER
} from './const'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMICS_PENDING: {
      return {
        ...state,
        isFetching: true,
      }
    }
    case GET_COMICS_FULLFILED: {
      return {
        ...state,
        data: action.payload.data
      }
    }
    case GET_COMICS_REJECTED: {
      return {
        ...state,
        errorMsg: action.payload.errorMsg
      }
    }
    case SET_FILTER: {
      return {
        ...state,
        filter: action.payload
      }
    }
    case SET_SORTER: {
      return {
        ...state,
        sorter: action.payload
      }
    }
    default:
      return state
  }
}

export default reducer
