import { combineReducers } from 'redux'
import comics from './modules/reducer'
// in case we want to expand our app with more modules we can do it here
const rootReducer = combineReducers({
  comics
})

export default rootReducer
