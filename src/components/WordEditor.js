import React, { Component } from 'react'

import css from './WordEditor.css'

class InputText extends Component {

  onInput = (e) => {
    this.props.onInput(e.target.value)
  }

  render() {
    return <input type="text" name={this.props.name} value={this.props.val} onChange={this.onInput} {...this.props}/>
  }
}

class TextArea extends Component {

  onInput = (e) => {
    this.props.onInput(e.target.value)
  }

  render() {
    return <textarea name={this.props.name} value={this.props.val} onChange={this.onInput} {...this.props}></textarea>
  }
}

class WordEditor extends Component {

  constructor(props) {
    super(props)
    this.state =  {
      source: props.form.text,
      targets: props.form.translations && props.form.translations.reduce((acc, i) => {
        return acc === '' ? i.text : + ',' + i.text;
      }, '')
    }
  }

  componentWillReceiveProps(nextProps)  {
    if(Object.keys(nextProps.form).length === 0) {
      this.reset()
    } else if(nextProps.form !== this.props.form) {
      this.setState({
        source: nextProps.form.text,
        targets: nextProps.form.translations && nextProps.form.translations.reduce((acc, i) => {
          return acc === '' ? i.text : acc + ',' + i.text;
        }, '')
      })
    }
  }

  reset = () => {
    this.setState({
      source: '',
      targets: ''
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    // let isUpdate = !Object.keys(this.props.form).length
    this.props.onSubmit(this.state.source, this.state.targets)
    this.reset()
  }

  render() {
    const { form } = this.props;
    const { source, targets } = this.state
    return <form className={css.form} onSubmit={this.onSubmit}>
      <div className={css.buttonsContainer}>
        <input type="submit" className="btn" value={Object.keys(form).length === 0 ? "add" : "update"}/>
      </div>
      <div className={css.wordContainer}>
        <InputText name="sourceWord" val={source} onInput={source => this.setState({source})} placeholder="Слово" />
      </div>
      <hr/>
      <div className={css.translContainer}>
        <TextArea name="targetWord" val={targets} onInput={targets => this.setState({targets})} placeholder="добавляй переводы через запятую" />
      </div>
    </form>
  }
}

export default WordEditor
