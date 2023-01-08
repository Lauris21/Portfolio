import React from 'react';
import { useContext } from 'react';
import styled, { css } from 'styled-components';

import { ThemeContext } from '../../context/ThemeContext';
import { mobile } from '../../mediaStyled';
import themeStyled from '../../themeStyled';

const StyledDivSkills = styled.div`
  box-sizing: border-box;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  gap: 1rem;
  width: 7rem;
  ${mobile} {
    width: 6.3rem;
  }
  ${(props) => {
    const {
      backgr,
      fontcolor,
      fontsize,
      flexwrap,
      objectfit,
      width,
      height,
      justify,
      border,
      margin,
      marginTop,
      borderbottom,
      hover,
    } = props;
    return css`
      background-color: ${backgr};
      color: ${fontcolor};
      font-size: ${fontsize};
      flex-wrap: ${flexwrap};
      object-fit: ${objectfit};
      width: ${width};
      height: ${height};
      justify-content: ${justify};
      border: ${border};
      margin: ${margin};
      margin-top: ${marginTop};
      border-bottom: ${borderbottom};
      :hover: ${hover};
    `;
  }}
`;

const DivSkills = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <StyledDivSkills
      backgr={
        theme === 'dark'
          ? themeStyled.dark.backgroundSecond
          : themeStyled.light.backgroundSecond
      }
      {...props}
    ></StyledDivSkills>
  );
};

export default DivSkills;
