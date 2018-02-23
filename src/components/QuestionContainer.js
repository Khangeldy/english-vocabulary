import { connect } from 'react-redux'
// import { createSelector } from 'reselect'
import { getQuestionAction, getAnswerAction } from '../actions/wordActions'
import { markAnswerAction, getResult } from '../actions/quizActions'
import Question from './Question'

const mapStateToProps = (state) => ({
  current: state.quiz.current,
  question: state.quiz.questions[state.quiz.current]
})

const mapDispathToProps = (dispatch) => ({
  getQuestion: (id) => dispatch(getQuestionAction(id)),
  getAnswer: (id) => dispatch(getAnswerAction(id)),
  markAnswer: (id) => dispatch(markAnswerAction(id)),
  getResult: () => dispatch(getResult())
})


export default connect(
  mapStateToProps,
  mapDispathToProps
)(Question)
