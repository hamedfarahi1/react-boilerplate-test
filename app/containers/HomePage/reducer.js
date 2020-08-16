import produce from 'immer';
import {
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  RESET,
  RESET_FROM,
} from './constants';

export const initialState = {
  number: 0,
};

const counterReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case INCREMENT_COUNT:
        draft.number += 1;
        break;
      case DECREMENT_COUNT:
        draft.number -= 1;
        break;
      case RESET:
        draft.number = initialState.number;
        break;
      case RESET_FROM:
        draft.number = action.number;
        break;
    }
  });

export default counterReducer;
