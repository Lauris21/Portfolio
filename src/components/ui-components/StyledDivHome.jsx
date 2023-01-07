import React from 'react';
import { useContext } from 'react';
import styled, { css } from 'styled-components';

import { ThemeContext } from '../../context/ThemeContext';
import { mobile } from '../../mediaStyled';
import themeStyled from '../../themeStyled';

const StyledDivHome = styled.div`
  box-sizing: border-box;
  ${mobile} {
    flex-direction: column;
  }
  ${(props) => {
    const {
      backgr,
      fontcolor,
      fontsize,
      display,
      flexwrap,
      flexdir,
      objectfit,
      width,
      height,
      justify,
      border,
      borderradius,
      padding,
      margin,
      marginTop,
      align,
      borderbottom,
      gap,
      minH,
    } = props;
    return css`
      background-color: ${backgr};
      color: ${fontcolor};
      font-size: ${fontsize};
      display: ${display};
      flex-wrap: ${flexwrap};
      flex-direction: ${flexdir};
      object-fit: ${objectfit};
      width: ${width};
      height: ${height};
      justify-content: ${justify};
      border-radius: ${borderradius};
      border: ${border};
      padding: ${padding};
      margin: ${margin};
      margin-top: ${marginTop};
      align-items: ${align};
      border-bottom: ${borderbottom};
      gap: ${gap};
      min-height: ${minH};
    `;
  }}
`;

const DivHome = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <StyledDivHome
      backgr={
        theme === 'dark' ? themeStyled.dark.background : themeStyled.light.background
      }
      {...props}
    ></StyledDivHome>
  );
};

export default DivHome;
