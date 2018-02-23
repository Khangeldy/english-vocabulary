import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import {
  getWordAction,
  addWordAction,
  updateWordAction,
  removeWordAction,
  resetForm
} from '../actions/wordActions'
import Home from './Home'

const w = state => state.words.wordById;

const getWords = createSelector(
  w,
  words => Object.keys(words).map(key => words[key])
)
const mapStateToProps = (state) => ({
  englishWords: getWords(state),
  form: state.words.form,
  loading: false
})

const mapDispathToProps = (dispatch) => ({
  resetForm: () => dispatch(resetForm()),
  addWord: (text, translations) => dispatch(addWordAction(text, translations)),
  getWord: (id) => dispatch(getWordAction(id)),
  updateWord: (word, translations) => dispatch(updateWordAction(word, translations)),
  removeWord: (id) => dispatch(removeWordAction(id))
})


export default connect(
  mapStateToProps,
  mapDispathToProps
)(Home)
