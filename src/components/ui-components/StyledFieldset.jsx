import React from 'react';
import styled, { css } from 'styled-components';

import themeStyled from '../../themeStyled';

const StyledFieldset = styled.fieldset`
  border: 1px solid #ffdc2b;
  padding: 2.5rem;
  ${(props) => {
    const { color } = props;
    return css`
      color: ${color};
    `;
  }}
`;

const Fieldset = (props) => {
  return <StyledFieldset color={themeStyled.dark.tertiary} {...props}></StyledFieldset>;
};

export default Fieldset;
