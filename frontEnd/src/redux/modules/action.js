import {
  GET_COMICS_PENDING,
  GET_COMICS_FULLFILED,
  GET_COMICS_REJECTED,
  SET_FILTER,
  SET_SORTER
} from './const'

import {
  get
} from '../../helper/api'

export const getComics = () => (dispatch) => {
  dispatch({
    type: GET_COMICS_PENDING
  })
  return get()
    .then((json) => {
      dispatch({
        type: GET_COMICS_FULLFILED,
        payload: json
      })
    })
    .catch((e) => {
      dispatch({
        type: GET_COMICS_REJECTED,
        payload: {
          errorMsg: `Failed trying to get data ${e.error}`
        }
      })
    })
}

export const setFilter = (filter) => (dispatch) => {
      dispatch({
        type: SET_FILTER,
        payload: filter
      })
}

export const setSorter = (sorter) => (dispatch) => {
  dispatch({
    type: SET_SORTER,
    payload: sorter
  })
}