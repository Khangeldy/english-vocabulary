import { LOADING } from '../actions'

const initialState = {
  loading: false,
  englishWordById: {
    3: 'refund',
    4: 'relegation',
    5: 'stork'
  },
  russianWordById: {
    0: {
      englishWordId: 3,
      text: 'возврат'
    },
    1: {
      englishWordId: 4,
      text: 'изгнание'
    },
    2: {
      englishWordId: 5,
      text: 'айст'
    }
  }
}

export default function (state = initialState, action) {
  switch(action.type) {
    case LOADING: {
      return {
        ...state,
        loading: true
      }
    }
    default: {
      return state;
    }
  }
}
