import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { ThemeContext } from '../context/ThemeContext';
import themeStyled from '../themeStyled';
import Switcher from './Switcher';
import { Img } from './ui-components/StyledImg';
import { Li } from './ui-components/StyledLi';
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
        src="../../public/logoLauraSanchez.png"
        alt="logo Laura Sanchez"
        width="2.75rem"
        height="2.75rem"
        margin="auto"
        borderRadius="50px"
      />

      <Ul>
        <Li>
          <NavLink to="/">Home</NavLink>
        </Li>
        <Li>
          <NavLink to="/about">About</NavLink>
        </Li>
        <Li>
          <NavLink to="/proyects">Proyects</NavLink>
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
