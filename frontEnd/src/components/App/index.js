import { connect } from 'react-redux'
import App from './App'

const mapStateToProps = state => { 
  return ({
    data: state.comics.data,
    isFetching: state.comics.isFetching,
    errorMsg: state.comics.errorMsg
  })
}

export default connect(mapStateToProps)(App)