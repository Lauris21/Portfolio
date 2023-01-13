import React from 'react';
import { useContext } from 'react';

import LogoLS from '../../public/logoLauraSanchez.png';
import { ThemeContext } from '../context/ThemeContext';
import themeStyled from '../themeStyled';
import Switcher from './Switcher';
import { Img } from './ui-components/StyledImg';
import { Li } from './ui-components/StyledLi';
import { NavLink } from './ui-components/StyledLink';
import { Nav } from './ui-components/StyledNav';
import { Ul } from './ui-components/StyledUl';

const NavBar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Nav
      backgr={
        theme === 'dark' ? themeStyled.dark.background : themeStyled.light.background
      }
    >
      <Img
        src={LogoLS}
        alt="logo Laura Sanchez"
        width="3rem"
        height="3rem"
        margin="auto"
        borderRadius="50px"
      />

      <Ul>
        <Li>
          <NavLink to="/" activeStyle={{ color: themeStyled.dark.tertiary }}>
            Home
          </NavLink>
        </Li>
        <Li>
          <NavLink to="/about">About</NavLink>
        </Li>
        <Li>
          <NavLink to="/projects">Projects</NavLink>
        </Li>
        <Li>
          <NavLink to="/contact">Contact</NavLink>
        </Li>
      </Ul>
      <Switcher />
    </Nav>
  );
};

export default NavBar;
