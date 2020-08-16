/**
 *
 * Card
 *
 */

import React, { Children } from 'react';
import { StyledDivParent, StyledDivChild } from './StyledCard';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Card(props) {
  return (
    <StyledDivParent>
      <StyledDivChild>{Children.toArray(props.children)}</StyledDivChild>;
    </StyledDivParent>
  );
}

Card.propTypes = {};

export default Card;
