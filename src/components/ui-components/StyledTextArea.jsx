import React from 'react';
import { useContext } from 'react';
import styled, { css } from 'styled-components';

import { ThemeContext } from '../../context/ThemeContext';
import themeStyled from '../../themeStyled';

const StyledTextarea = styled.textarea`
  height: 15rem;
  padding: 1rem;
  ${(props) => {
    const { width, color, fontSz, textAl, backgr, border, borderRad } = props;
    return css`
      width: ${width};
      color: ${color};
      font-size: ${fontSz};
      text-align: ${textAl};
      background: ${backgr};
      border: ${border};
      border-radius: ${borderRad};
    `;
  }}
`;

const Textarea = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <StyledTextarea
      border={`1px solid ${themeStyled.dark.tertiary}`}
      backgr={
        theme === 'dark' ? themeStyled.dark.background : themeStyled.light.background
      }
      color={theme === 'dark' ? themeStyled.dark.primary : themeStyled.light.primary}
      {...props}
    ></StyledTextarea>
  );
};

export default Textarea;
