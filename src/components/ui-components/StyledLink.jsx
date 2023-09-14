import { NavLink as RouterNavLink} from 'react-router-dom';
import styled from 'styled-components';

export const NavLink = styled(RouterNavLink)`
  &:hover {
    transform: scale(1.1);
    border-bottom: 2px solid #ffdc2b;
  }
`;
