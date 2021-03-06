/**
 *
 * Button
 *
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';
import StyledButton from './StyledButton';
import A from './A';
import Wrapper from './Wrapper';
// import styled from 'styled-components';

function Button(props) {
  let button = (
    <A href={props.href} onClick={props.onClick}>
      {Children.toArray(props.children)}
    </A>
  );
  if (props.handleRoute)
    button = (
      <StyledButton onClick={props.handleRoute}>
        {Children.toArray(props.children)}
      </StyledButton>
    );

  return <Wrapper>{button}</Wrapper>;
}

Button.propTypes = {
  handleRoute: PropTypes.func,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
