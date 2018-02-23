import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

import css from './Question.css'

class Question extends Component {

  constructor(props) {
    super(props)
    this.state =  {
      mark: null
    }
  }

  handleChange = (e) => {
    this.setState({
      mark: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.markAnswer(this.state.mark)
    if(+this.props.match.params.id === 19) {
      this.props.getResult()
      this.props.history.push('/test/result')
    } else {
      this.props.history.push('/test/questions/' + (+this.props.match.params.id + 1))
      this.setState({mark: null})
    }
  }

  componentDidMount() {
    this.getQuestion(this.props.match.params.id)
  }

  componentDidUpdate() {
    this.getQuestion(this.props.match.params.id)
  }

  getQuestion = (id) => {
    this.props.getQuestion(id)
  }

  render() {
    const { question, match } = this.props;
    // const { mark } = this.state
    // const question = questions[match.params.id];

    return <div>
      <h3>#{ +match.params.id + 1 } {question.questionText}</h3>
      <form className={css.form} onSubmit={this.onSubmit}>
        <input type="submit" value="Ответить"/>
        { question.answersId.map((radio, i) => {
          return <div className="row" key={i}>
              <label>
                <input
                  type="radio"
                  name={question.questionId}
                  value={radio.id}
                  onChange={this.handleChange}
                  checked={this.state.mark === radio.id.toString()}
                />
                {radio.text}
              </label>
            </div>
          })
        }
      </form>
    </div>
  }
}

export default Question
