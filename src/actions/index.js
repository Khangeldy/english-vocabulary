export const LOADING = 'LOADING_STATE';
export const ADD_NEW_WORD = 'ADD_NEW_WORD';
export const REMOVE_WORD = "REMOVE_WORD_BY_ID";
export const UPDATE_WORD = "UPDATE_WORD_BY_ID";

export const loadingAction = () => ({
  loading: true,
  type: LOADING
})

export const addWordAction = (word, translation) => ({
  type: ADD_NEW_WORD,
  word,
  translation
})

export const removeWordAction = (id) => ({
  type: REMOVE_WORD,
  id
})

export const updateWordAction = (id, word, translation) => ({
  type: UPDATE_WORD,
  id,
  word,
  translation
})
