import React from 'react';
import { useContext } from 'react';
import styled, { css } from 'styled-components';

import { ThemeContext } from '../../context/ThemeContext';
import themeStyled from '../../themeStyled';

const StyledInput = styled.input`
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

const Input = (props, name, handleChange) => {
  const { theme } = useContext(ThemeContext);
  return (
    <StyledInput
      placeholder={name}
      backgr={
        theme === 'dark'
          ? themeStyled.dark.backgroundSecond
          : themeStyled.light.backgroundSecond
      }
      color={theme === 'dark' ? themeStyled.dark.primary : themeStyled.light.primary}
      {...props}
    />
  );
};

export default Input;
