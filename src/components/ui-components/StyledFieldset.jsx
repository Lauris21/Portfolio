import React, { useContext } from 'react';
import styled, { css } from 'styled-components';

import { ThemeContext } from '../../context/ThemeContext';
import { mobile } from '../../mediaStyled';
import themeStyled from '../../themeStyled';

const StyledFieldset = styled.fieldset`
  border: 1px solid #ffbc2b;
  border-radius: 9px;
  padding: 2rem;
  width: 30rem;
  ${mobile} {
    width: 95%;
  }
  ${(props) => {
    const { color, backgr } = props;
    return css`
      color: ${color};
      background: ${backgr};
    `;
  }}
`;

const Fieldset = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <StyledFieldset
      color={themeStyled.dark.tertiary}
      backgr={
        theme === 'dark'
          ? themeStyled.dark.background
          : themeStyled.light.backgroundSecond
      }
      {...props}
    ></StyledFieldset>
  );
};

export default Fieldset;
