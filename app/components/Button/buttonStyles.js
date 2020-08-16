import { css } from 'styled-components';

const buttonStyle = css`
display: inline-block;
    padding: .75rem 1.25rem;
    border-radius: 10rem;
    color: #fff;
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: .15rem;
    transition: all .3s;
    position: relative;
    overflow: hidden;
    z-index: 1;
    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: $color;
        border-radius: 10rem;
        z-index: -2;
    }
`;

export default buttonStyle;
