import React from 'react';

import ProjectsBox from '../components/ProjectsBox';
import Div from '../components/ui-components/StyledDiv';
import P from '../components/ui-components/StyledPharagraph';
import themeStyled from '../themeStyled';

const Projects = () => {
  return (
    <Div
      display="flex"
      flexdir="column"
      align="center"
      margintop="2rem"
      minH="65vh"
      gap="4rem"
    >
      <Div width="10rem" height="4px" backgr={themeStyled.dark.tertiary}></Div>
      <P textAl="center" fontSz="2rem">
        Projects
      </P>
      <ProjectsBox />
    </Div>
  );
};

export default Projects;
