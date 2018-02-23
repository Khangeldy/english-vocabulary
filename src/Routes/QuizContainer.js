import { connect } from 'react-redux'
// import { createSelector } from 'reselect'
import {
  createQuizAction
} from '../actions/quizActions'
import Quiz from './Quiz'

const mapStateToProps = (state) => ({
  words: state.words.wordById,
  translations: state.words.translationById,
  quesions: state.quiz.questions,
  result: state.quiz.result
})

const mapDispathToProps = (dispatch) => ({
  startQuiz: (words, translations) => dispatch(createQuizAction(words, translations))
})


export default connect(
  mapStateToProps,
  mapDispathToProps
)(Quiz)
