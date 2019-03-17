import { createSelector } from 'reselect'
import sortBy from 'lodash/sortBy'
import getFilteredData from './getFilteredData'

const getSorter = (state) => state.comics.sorter
const getFilteredList = (state) => getFilteredData(state)

const getSortedData = createSelector([
  getFilteredList,
  getSorter,
], (list, sorter) => {
  const sortedList = sortBy(list, ['title'])
  if (sorter !== 'descend') return sortedList.reverse()
  return sortedList
})

export default getSortedData
