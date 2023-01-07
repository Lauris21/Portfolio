import React from 'react';

import ProjectsBox from '../components/ProjectsBox';
import Div from '../components/ui-components/StyledDiv';

const Projects = () => {
  return (
    <Div
      display="flex"
      flexdir="column"
      align="center"
      margintop="2rem"
      minH="65vh"
      padding="2rem"
    >
      <ProjectsBox />
    </Div>
  );
};

export default Projects;
