import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getComics, setFilter, setSorter } from '../../redux/modules/action'
import getSortedData from '../../redux/selectors/getSortedData'
import ComicList from './Comics'

const mapStateToProps = (state) => {
  const comics = getSortedData(state)
  return ({
    comics,
    sorter: state.comics.sorter
  })
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getComics,
  setFilter,
  setSorter,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ComicList)
