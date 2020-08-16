import {
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  RESET,
  RESET_FROM,
} from './constants';

export function increment() {
  return {
    type: INCREMENT_COUNT,
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNT,
  };
}

export function reset() {
  return {
    type: RESET,
  };
}

export function resetFrom(number) {
  return {
    type: RESET_FROM,
    number,
  };
}
