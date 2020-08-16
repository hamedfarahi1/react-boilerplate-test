import { css } from 'styled-components';

const cardStyleParent = css`
  -webkit-border-radius: 0% 0% 100% 100% / 0% 0% 8px 8px;
`;

const cardStyleChild = css`
  direction: rtl;
  margin: auto;
  width: 80%;
  max-width: 105vh;
  margin-top: 96px;

  height: 80vh;
  background: #3e3e3e;
  border-radius: 3px/6px;
  box-shadow: 1px 1px 3px rgb(255 255 255 / 60%);
  color: #f4f4f4;
  padding: 30px;
`;

export { cardStyleParent, cardStyleChild };
