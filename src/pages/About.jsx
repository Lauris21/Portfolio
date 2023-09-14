import React from 'react';

import chakra from '../../public/chakra-ui.png';
import CSS from '../../public/css-svgrepo-com.svg';
import git from '../../public/git-svgrepo-com.svg';
import HTML5 from '../../public/html-svgrepo-com.svg';
import JS from '../../public/js-official-svgrepo-com.svg';
import mongoDB from '../../public/mongo-svgrepo-com.svg';
import nodeJS from '../../public/nodejs-1-logo-svgrepo-com.svg';
import react from '../../public/react-svgrepo-com.svg';
import styledComponents from '../../public/styledComponents.png';
import typescript from '../../public/typescript-official-svgrepo-com.svg';
import Div from '../components/ui-components/StyledDiv';
import DivSkills from '../components/ui-components/StyledDivSkills';
import { Img } from '../components/ui-components/StyledImg';
import P from '../components/ui-components/StyledPharagraph';
import themeStyled from '../themeStyled';
import tailwind from '../../public/Tailwind_CSS_Logo.svg.png';
import socket from '../../public/socket.png';

const About = () => {
  return (
    <Div
      display="flex"
      flexdir="column"
      align="center"
      margintop="2rem"
      minH="65vh"
      gap="2rem"
    >
      <Div width="10rem" height="4px" backgr={themeStyled.dark.tertiary}></Div>
      <Div
        padding="2rem"
        display="flex"
        flexdir="column"
        gap="1rem"
        width="65%"
        minW="300px"
      >
        <P>I am 30 years old, I love sports, nature and new challenges.</P>
        <P>I am a web development teacher at Neoland. I also work as a freelancer, if you are interested contact me.</P>
      </Div>
      <Div width="10rem" height="4px" backgr={themeStyled.dark.tertiary}></Div>
      <Div padding="2rem" width="90%" maxW="900px" minW="350px">
        <P textAl="center" fontSz="2rem">
          My Skills
        </P>
        <Div
          display="flex"
          flexdir="row"
          padding="2rem"
          gap="1rem"
          flexwrap="wrap"
          justify="center"
        >
          <DivSkills>
            <Img src={HTML5} alt="icon HTML" width="4rem" />
            <P>HTML5</P>
          </DivSkills>
          <DivSkills>
            <Img src={CSS} alt="icon CSS" width="4rem" />
            <P>CSS</P>
          </DivSkills>
          <DivSkills>
            <Img src={JS} alt="icon JS" width="4rem" />
            <P>JavaScript</P>
          </DivSkills>
          <DivSkills>
            <Img src={typescript} alt="icon TS" width="4rem" />
            <P>TypeScript</P>
          </DivSkills>
          <DivSkills>
            <Img src={react} alt="icon React" width="4rem" />
            <P>React</P>
          </DivSkills>
          <DivSkills>
            <Img src={nodeJS} alt="icon NodeJS" width="4rem" />
            <P>NodeJS</P>
          </DivSkills>
          <DivSkills>
            <Img src={mongoDB} alt="icon mongoDB" width="4rem" />
            <P>MongoDB</P>
          </DivSkills>
          <DivSkills>
            <Img src={socket} alt="icon socket.io" width="4rem" />
            <P>Socket.io</P>
          </DivSkills>
          <DivSkills>
            <Img src={styledComponents} alt="icon styledComponents" width="4rem" />
            <P textAl="center">Styled-Components</P>
          </DivSkills>
          <DivSkills>
            <Img src={tailwind} alt="icon chakra" width="5.5rem" height="4rem" />
            <P>Tailwind</P>
          </DivSkills>
          <DivSkills>
            <Img src={chakra} alt="icon chakra" width="5.5rem" height="4rem" />
            <P>Chakra</P>
          </DivSkills>
          <DivSkills>
            <Img src={git} alt="icon git" width="4rem" />
            <P>Git</P>
          </DivSkills>
        </Div>
      </Div>
    </Div>
  );
};

export default About;
