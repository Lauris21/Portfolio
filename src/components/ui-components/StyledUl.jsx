import React from 'react';
import styled, { css } from 'styled-components';

export const StyledUl = styled.ul`
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  width: 50%;
  min-width: 225px;
  margin: auto;
  flex-wrap: wrap;

  ${(props) => {
    const {
      backgr,
      fontcolor,
      fontsize,
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
      align,
      borderbottom,
      gap,
    } = props;
    return css`
      background-color: ${backgr};
      color: ${fontcolor};
      font-size: ${fontsize};
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
      align-items: ${align};
      border-bottom: ${borderbottom};
      gap: ${gap};
    `;
  }}
`;

export const Ul = (props) => {
  return <StyledUl {...props}></StyledUl>;
};
