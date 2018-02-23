import {
  MARKANSWER,
  CREATE_QUIZ,
  GET_RESULT
} from '../actions/quizActions'
import {
  GET_QUESTION
} from '../actions/wordActions'

import { randomNumber } from '../utils'
const initialState = {
  current: 0,
  questions: [],
}

const answerPerQuestion = 6;
const questionLength = 20;

export default function(state = initialState, action) {
  let { questions, current } = state;
  switch(action.type) {
    case CREATE_QUIZ: {
      let { words, translations } = action
      let newQuestions = [];
      words = Object.assign({}, words);
      for(let i = 0; i < questionLength; i++) {
        const child = {};
        const ques_id = words.allIds.splice(randomNumber(0, words.allIds.length), 1)[0];
        child.answersId = [];
        child.questionId = ques_id;
        child.questionText = words[ques_id].text;
        for(let n = 0, m = translations.allIds.length; n < m; n++) {
          if(ques_id === translations[translations.allIds[n]].wordId) {
            child.answersId.push({
              id: translations[n].id,
              text: translations[n].text
            })

            child.correct = translations[n].id;

            while(child.answersId.length < answerPerQuestion) {
              const fakeId = translations.allIds[randomNumber(0, translations.allIds.length, child.answersId.map(x => x.id))]
              const method = randomNumber(0, 2) ? 'unshift' : 'push';
              child.answersId[method]({
                id: fakeId,
                text: translations[fakeId].text
              })
            }

            break;
          }
        }

        newQuestions.push(child);

      }

      return {
        ...state,
        questions: [ ...newQuestions ]
      }
    }
    case MARKANSWER: {
      let q = questions.slice();
      q[current].answer = action.id;
      return {
        ...state,
        questions: q
      }
    }
    case GET_QUESTION: {
      return {
        ...state,
        current: action.id
      }
    }
    case GET_RESULT: {
      return {
        ...state,
        result: state.questions.reduce((acc, i) => {
          if((+i.answer) === (+i.correct)) {
            return acc + 1;
          }
          return acc;
        }, 0)
      }
    }
    default: {
      return state;
    }
  }
}
