/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { memo, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useInjectReducer } from 'utils/injectReducer';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import messages from './messages';
import Button from '../../components/Button';
import { makeSelectNumber } from './selectors';
import { increment, decrement, reset, resetFrom } from './actions';
import reducer from './reducer';
import Card from '../../components/Card';

const key = 'counter';

function HomePage({ number, onIncrement, onDecrement, onReset, onResetFrom }) {
  useInjectReducer({ key, reducer });
  const [resetNumber, setResetNumber] = useState(0);
  const handleResetNumberChange = e => {
    if (!Number.isNaN(+e.target.value)) setResetNumber(+e.target.value);
  };

  return (
    <>
      <Link to="/about">
        <Button>about</Button>
      </Link>

      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <h3>{`number is: ${number}`}</h3>
      <div>
        <Button onClick={onIncrement}>increment</Button>
        <Button onClick={onDecrement}>decrement</Button>
        <Button onClick={onReset}>reset</Button>
        <input onChange={handleResetNumberChange} value={resetNumber} />
        <Button onClick={() => onResetFrom(resetNumber)}>resetFrom</Button>
      </div>
    </>
  );
}

HomePage.propTypes = {
  number: PropTypes.number,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onReset: PropTypes.func,
  onResetFrom: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  number: makeSelectNumber(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onReset: () => dispatch(reset()),
    onResetFrom: number => dispatch(resetFrom(number)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
