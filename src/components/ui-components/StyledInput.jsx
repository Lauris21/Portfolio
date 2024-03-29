import React from 'react';
import { useContext } from 'react';
import styled, { css } from 'styled-components';

import { ThemeContext } from '../../context/ThemeContext';
import themeStyled from '../../themeStyled';

const StyledInput = styled.input`
  ${(props) => {
    const {
      width,
      heigth,
      color,
      fontSz,
      textAl,
      backgr,
      border,
      borderRad,
      margin,
      padding,
    } = props;
    return css`
      width: ${width};
      height: ${heigth};
      color: ${color};
      font-size: ${fontSz};
      text-align: ${textAl};
      background: ${backgr};
      border: ${border};
      border-radius: ${borderRad};
      margin: ${margin};
      padding: ${padding};
    `;
  }}
`;

const Input = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <StyledInput
      border={`1px solid ${themeStyled.dark.tertiary}`}
      backgr={
        theme === 'dark' ? themeStyled.dark.background : themeStyled.light.background
      }
      color={theme === 'dark' ? themeStyled.dark.primary : themeStyled.light.primary}
      {...props}
    ></StyledInput>
  );
};

export default Input;
