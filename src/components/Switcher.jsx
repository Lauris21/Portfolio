import { useContext } from 'react';
import React from 'react';
import styled, { css } from 'styled-components';

import { ThemeContext } from '../context/ThemeContext';
import themeStyled from '../themeStyled';

const ButtonStyled = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9px;
  margin: auto;
  font-size: 1.5rem;
  text-align: center;
  ${(props) => {
    const { background, border } = props;
    return css`
      border: ${border};
      background-color: ${background};
    `;
  }}
`;

const Switcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <ButtonStyled
      background={
        theme === 'dark' ? themeStyled.dark.background : themeStyled.light.background
      }
      border="1px solid #ffdc2b"
      onClick={toggleTheme}
    >
      {theme === 'dark' ? '🌞' : '🌝'}
    </ButtonStyled>
  );
};

export default Switcher;
