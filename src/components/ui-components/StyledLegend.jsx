import React from 'react';
import { useContext } from 'react';
import styled, { css } from 'styled-components';

import { ThemeContext } from '../../context/ThemeContext';
import themeStyled from '../../themeStyled';
const StyledLegend = styled.legend`
  text-align: center;
  font-size: 2rem;
  ${(props) => {
    const { color } = props;
    return css`
      color: ${color};
    `;
  }}
`;

const Legend = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <StyledLegend
      color={theme === 'dark' ? themeStyled.dark.primary : themeStyled.light.primary}
      {...props}
    ></StyledLegend>
  );
};

export default Legend;
