import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectCounter = state => state.counter || initialState;

const makeSelectNumber = () =>
  createSelector(
    selectCounter,
    counterState => counterState.number,
  );

export { selectCounter, makeSelectNumber };
