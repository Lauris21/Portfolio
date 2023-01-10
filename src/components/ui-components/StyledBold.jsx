import React from 'react';
import { useContext } from 'react';
import styled, { css } from 'styled-components';

import { ThemeContext } from '../../context/ThemeContext';
import { mobileS } from '../../mediaStyled';
import themeStyled from '../../themeStyled';

const StyledBold = styled.p`
  ${mobileS} {
    font-size: 2rem;
  }
  ${(props) => {
    const { color, fontSz, textAl, backgr } = props;
    return css`
      color: ${color};
      font-size: ${fontSz};
      text-align: ${textAl};
      background: ${backgr};
    `;
  }}
`;

const Bold = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <StyledBold
      color={theme === 'dark' ? themeStyled.dark.secondary : themeStyled.light.secondary}
      backgr={
        theme === 'dark'
          ? themeStyled.dark.background
          : themeStyled.light.backgroundSecond
      }
      {...props}
    ></StyledBold>
  );
};

export default Bold;
