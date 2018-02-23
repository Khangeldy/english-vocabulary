export const MARKANSWER = 'MARK_ANSWER_AS_CORRECT';
export const CREATE_QUIZ = "CREATE_QUIZ";
export const CHECK = 'CHECK_ANSWER';
export const CHECKALL = 'CHECK_ALL_ANSWERS';
export const SHOWRESULTOFTEST = 'SHOW_RESULT_TEST';
export const NEXTQUESTION = 'SHOW_NEXT_QUESTION';
export const PREVQUESTION = 'SHOW_PREV_QUESTION';
export const DELAYQUESTION = 'DELAY_QUESTION';
export const FIFTYFIFTY = 'HINT_50x50';
export const GET_RESULT = 'GET_RESULT'


export const createQuizAction = (words, translations) => ({
  type: CREATE_QUIZ,
  words,
  translations
})

export const markAnswerAction = (id) => ({
  type: MARKANSWER,
  id
})

export const getResult = () => ({
  type: GET_RESULT
})

export const checkAction = (answerId, questionId) => ({
  type: CHECK,
  answerId,
  questionId
})

export const checkAllAction = () => ({
  type: CHECKALL
})

export const showResultOfTestAction = () => ({
  type: SHOWRESULTOFTEST
})

export const nextQuestionAction = () => ({
  type: NEXTQUESTION
})

export const prevQuestionAction = () => ({
  type: PREVQUESTION
})

export const delayQuestionAction = () => ({
  type: DELAYQUESTION
})

export const fiftyFiftyAction = () => ({
  type: FIFTYFIFTY
})
