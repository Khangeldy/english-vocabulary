import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import QuestionContainer from '../components/QuestionContainer';

class Quiz extends Component {
  onStart = () => {
    this.props.startQuiz(this.props.words, this.props.translations)
    this.props.history.push(this.props.match.url + '/questions/0')
  }
  render() {
    const { match } = this.props
    return <div>
      <button onClick={this.onStart}>Начать тест</button>
      <Route path={`${match.url}/result`} result={this.props.result} exact render={props => {
        return <div>Твой результат {this.props.result} из 20</div>
      }} />
      <Route path={`${match.url}/questions/:id`} component={QuestionContainer} />
    </div>
  }
}

export default Quiz
