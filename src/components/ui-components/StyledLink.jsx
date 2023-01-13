import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavLink = styled(Link)`
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
