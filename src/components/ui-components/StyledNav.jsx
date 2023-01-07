import React from 'react';
import styled, { css } from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 20vh;

  ${(props) => {
    const {
      backgr,
      fontcolor,
      fontsize,
      flexwrap,
      flexdir,
      objectfit,
      width,
      justify,
      border,
      borderradius,
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
      justify-content: ${justify};
      border-radius: ${borderradius};
      border: ${border};
      align-items: ${align};
      border-bottom: ${borderbottom};
      gap: ${gap};
    `;
  }}
`;

export const Nav = (props) => {
  return <StyledNav {...props}></StyledNav>;
};
