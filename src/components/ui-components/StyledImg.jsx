import React from 'react';
import styled, { css } from 'styled-components';

export const StyledImg = styled.img`
  ${(props) => {
    const { width, height, border, borderRadius, padding, objectfit, margin } = props;
    return css`
      width: ${width};
      height: ${height};
      border: ${border};
      border-radius: ${borderRadius};
      padding: ${padding};
      object-fit: ${objectfit};
      margin: ${margin};
    `;
  }}
`;

export const Img = (props) => {
  return <StyledImg {...props}></StyledImg>;
};
