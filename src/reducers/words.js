import {
  GET_WORD,
  ADD_WORD,
  UPDATE_WORD,
  REMOVE_WORD,
  LOAD_INITIAL_STATE,
  RESET_FORM
} from '../actions/wordActions'

const initialState = {
  form: null,
  wordById: {},
  translationById: {}
}

export default function (state = initialState, action) {
  let { wordById, translationById, form } = state
  switch(action.type) {
    case LOAD_INITIAL_STATE: {
      return {
        ...state,
        ...action.state
      }
    }
    case ADD_WORD: {
      translationById = Object.assign({}, translationById);
      const id = new Date().valueOf();
      action.translations.split(',').forEach((value, i) => {
        const t_id = new Date().valueOf();
        translationById[t_id] = {
          id: t_id,
          wordId: id,
          text: value
        }
        translationById.allIds = [...translationById.allIds, t_id]
      });
      return {
        ...state,
        wordById: {
          ...wordById,
          [id]: {
            id: id,
            text: action.word
          },
          allIds: [ ...wordById.allIds, id]
        },
        translationById
      }
    }
    case REMOVE_WORD: {
      wordById = Object.assign({}, wordById)
      delete wordById[action.id];
      let allIds = wordById.allIds.slice()
      allIds.splice(wordById.allIds.indexOf(action.id), 1)

      if(form && form.id === action.id) {
        form = null
      }
      wordById.allIds = allIds;

      translationById = Object.assign({}, translationById)

      translationById.allIds = translationById.allIds.slice();

      Object.keys(translationById).forEach((acc, id) => {
        if(translationById[id].wordById === action.id) {
          translationById.allIds.splice(translationById.allIds.indexOf(action.id))
          delete translationById[id]
        }
      })

      return {
        ...state,
        form,
        wordById,
        translationById
      }
    }
    case UPDATE_WORD: {
      if(form.text !== action.word) {
        wordById = Object.assign({}, wordById);
        wordById[form.id].text = action.word
      }
      translationById = Object.assign({}, translationById)
      action.translations.split(',').forEach((translation, i) => {
        if(translationById[form.translations[i].id].text !== translation) {
          translationById[form.translations[i].id].text = translation;
        }
      });
      return {
        ...state,
        wordById,
        translationById
      }
    }
    case GET_WORD: {
      const englishW = wordById[action.id];

      englishW.translations = Object.keys(translationById).reduce((acc, i) => {
        if(+translationById[i].wordId === +action.id) {
          return [...acc, translationById[i]];
        }
        return acc
      }, []);

      return { ...state, form: englishW}
    }
    case RESET_FORM: {
      return {
        ...state,
        form: {}
      }
    }
    default: {
      return state;
    }
  }
}
