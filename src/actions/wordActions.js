export const LOADING = 'LOADING_STATE';
export const ADD_WORD = 'ADD_NEW_WORD';
export const REMOVE_WORD = "REMOVE_WORD_BY_ID";
export const GET_WORD = 'SELECT_WORD';
export const UPDATE_WORD = "UPDATE_WORD_BY_ID";
export const LOAD_INITIAL_STATE = "LOAD_INITIAL_STATE";
export const RESET_FORM = "RESET_FORM";
export const GET_QUESTION = "GET_QUESTION";
export const GET_ANSWER = "GET_ANSWER";

export const getQuestionAction = (id) => ({
  type: GET_QUESTION,
  id
})

export const getAnswerAction = (id) => ({
  type: GET_ANSWER,
  id
})

export const loadInitialAction = (state) => ({
  type: LOAD_INITIAL_STATE,
  state
})

export const loadingAction = () => ({
  loading: true,
  type: LOADING
})

export const addWordAction = (word, translations) => ({
  type: ADD_WORD,
  word,
  translations
})

export const getWordAction = (id) => ({
  type: GET_WORD,
  id
})

export const removeWordAction = (id) => ({
  type: REMOVE_WORD,
  id
})

export const updateWordAction = (word, translations) => ({
  type: UPDATE_WORD,
  word,
  translations
})

export const resetForm = () => ({
  type: RESET_FORM
})
