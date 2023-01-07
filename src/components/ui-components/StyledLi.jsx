import React from 'react';
import { useContext } from 'react';
import styled, { css } from 'styled-components';

import { ThemeContext } from '../../context/ThemeContext';
import { mobile } from '../../mediaStyled';
import themeStyled from '../../themeStyled';

export const StyledLi = styled.li`
  list-style-type: none;
  box-sizing: border-box;
  ${mobile} {
    font-size: 1rem;
  }

  ${(props) => {
    const { color } = props;
    return css`
      color: ${color};
    `;
  }}
`;

export const Li = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <StyledLi
      color={theme === 'dark' ? themeStyled.dark.primary : themeStyled.light.primary}
      {...props}
    ></StyledLi>
  );
};
