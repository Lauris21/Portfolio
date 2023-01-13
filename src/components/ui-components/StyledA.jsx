import React from 'react';
import styled, { css } from 'styled-components';

const StyledAnchor = styled.a`
  font-family: 'Poppins';
  font-size: 1.3rem;
  place-self: center;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
  ${(props) => {
    const { color, fontSz, textAl, borderBt, width } = props;
    return css`
      color: ${color};
      font-size: ${fontSz};
      text-align: ${textAl};
      border-bottom: ${borderBt};
      width: ${width};
    `;
  }}
`;

const Anchor = ({ text }) => {
  return <StyledAnchor>{text}</StyledAnchor>;
};

export default Anchor;
