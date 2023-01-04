import React from 'react';
import styled, { css } from 'styled-components';

export const StyledTabBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 15vh;
  align-items: center;
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
      border-bottom: ${borderbottom};
      gap: ${gap};
    `;
  }}
`;

export const TabBar = (props) => {
  return <StyledTabBar {...props}></StyledTabBar>;
};
