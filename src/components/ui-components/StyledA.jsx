import React from 'react';
import styled from 'styled-components';

const StyledAnchor = styled.a`
  font-family: 'Poppins';
  font-size: 1.3rem;
  place-self: center;
  :hover {
    border-bottom: 1px solid;
  }
`;

const Anchor = ({ text }) => {
  return <StyledAnchor>{text}</StyledAnchor>;
};

export default Anchor;
