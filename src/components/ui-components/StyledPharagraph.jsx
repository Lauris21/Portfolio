import React from 'react';
import { useContext } from 'react';
import styled, { css } from 'styled-components';

import { ThemeContext } from '../../context/ThemeContext';
import themeStyled from '../../themeStyled';

const StyledP = styled.p`
  ${(props) => {
    const { color, fontSz, textAl } = props;
    return css`
      color: ${color};
      font-size: ${fontSz};
      text-align: ${textAl};
    `;
  }}
`;

const P = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <StyledP
      color={theme === 'dark' ? themeStyled.dark.primary : themeStyled.light.primary}
      {...props}
    ></StyledP>
  );
};

export default P;
