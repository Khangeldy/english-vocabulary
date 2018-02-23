import { combineReducers } from 'redux'
import words from './words'
import quiz from './quiz'

const reducers = combineReducers({
  words,
  quiz
})

export default reducers;
