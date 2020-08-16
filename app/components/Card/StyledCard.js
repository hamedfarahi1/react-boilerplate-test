import styled from 'styled-components';
import { cardStyleChild, cardStyleParent } from './cardStyled';

const StyledDivParent = styled.div`
  ${cardStyleParent}
`;

const StyledDivChild = styled.div`
  ${cardStyleChild}
`;

export { StyledDivParent, StyledDivChild };
