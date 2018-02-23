import React, { Component } from 'react'
import ListView from '../ui/ListView'
import Word from '../components/Word'
import WordEditor from '../components/WordEditor'

import styles from './Home.css'

class Home extends Component {

  resetForm = (e) => {
    e.preventDefault()
    this.props.resetForm()
  }

  onSubmit = (word, translations) => {
    if(Object.keys(this.props.form).length) {
      alert('update')
      this.props.updateWord(word, translations)
    } else {
      this.props.addWord(word, translations)
    }
  }

  render() {
    const { form } = this.props
    return <div className={styles.container}>
      <main>
        <button onClick={this.resetForm}>+</button>
        <ListView
          items={this.props.englishWords}
          rowHeight={25}
          component={Word}
          onSelect={(id) => this.props.getWord(id)}
          onDelete={(id) => this.props.removeWord(id)}
         />
      </main>

      <aside className={styles.aside}>
        { form && <WordEditor form={form} onSubmit={this.onSubmit} /> }
      </aside>
    </div>
  }
}

export default Home
