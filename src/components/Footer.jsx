import React from 'react';
import { useContext } from 'react';

import linkedin from '../../public/linkedin-svgrepo-com.svg';
import github from '../../public/github-svgrepo-com.svg';
import { ThemeContext } from '../context/ThemeContext';
import themeStyled from '../themeStyled';
import { Img } from './ui-components/StyledImg';
import { Li } from './ui-components/StyledLi';
import { TabBar } from './ui-components/StyledTabBar';
import { Ul } from './ui-components/StyledUl';

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <TabBar
      backgr={
        theme === 'dark' ? themeStyled.dark.background : themeStyled.light.background
      }
    >
      <Ul>
        <Li>
          <a href="https://github.com/Lauris21" target="_blank" rel="noreferrer">
            <Img src={github} alt="logo Github" width="2.5rem" />
          </a>
        </Li>
        <Li>
          <a
            href="https://www.linkedin.com/in/laura-sanchez-gonzalez0301/"
            target="_blank"
            rel="noreferrer"
          >
            <Img src={linkedin} alt="logo Linkeding" width="2.5rem" />
          </a>
        </Li>
      </Ul>
    </TabBar>
  );
};

export default Footer;
