import React from 'react';
import { useContext } from 'react';
import styled, { css } from 'styled-components';

import { ThemeContext } from '../../context/ThemeContext';
import themeStyled from '../../themeStyled';

const StyledBold = styled.p`
  ${(props) => {
    const { color, fontSz } = props;
    return css`
      color: ${color};
      font-size: ${fontSz};
    `;
  }}
`;

const Bold = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <StyledBold
      color={theme === 'dark' ? themeStyled.dark.secondary : themeStyled.light.secondary}
      {...props}
    ></StyledBold>
  );
};

export default Bold;
