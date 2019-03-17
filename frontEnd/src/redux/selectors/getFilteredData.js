import { createSelector } from 'reselect'

const getList = (state) => state.comics.data
const getFilter = (state) => state.comics.filter

const getFilteredData = createSelector([
  getList, getFilter
], (list, filterTitle) => {
  const filteredList = list.filter(item => item.title.toUpperCase().includes(filterTitle.toUpperCase()));
  return filteredList
})

export default getFilteredData
