import React from 'react'
import css from './Word.css'

export default ({data, selectWord, deleteWord}) => {

  return <div
    onClick={(e) => {
      if(e.target.tagName !== 'SPAN') {
        selectWord(data.id)
      }
    }}
    style={{height: '25px'}}
    >
    {data.text}
    <span className={css.remove} onClick={(e) => {
      deleteWord(data.id)
    }}>&times;</span>
  </div>
}
