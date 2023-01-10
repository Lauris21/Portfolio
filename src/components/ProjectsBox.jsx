import React from 'react';
import { useContext, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { HashLoader } from 'react-spinners/HashLoader';

import { ThemeContext } from '../context/ThemeContext';
import themeStyled from '../themeStyled';
import Bold from './ui-components/StyledBold';
import Div from './ui-components/StyledDiv';
import P from './ui-components/StyledPharagraph';
import DivProject from './ui-components/StyledDivProject';
import Title from './ui-components/StyledTitle';

const ProjectsBox = () => {
  const { theme } = useContext(ThemeContext);

  const projects = [
    {
      url: 'https://youtu.be/SoGkInynO04',
      name: 'The Phone Free',
      link: 'https://the-phone-free.vercel.app/',
      description:
        'Web for desktop and mobile. It includes a catalog of mobile phones, where you can add the phones you want to the cart.',
      id: '1',
    },
    {
      url: 'https://youtu.be/t6efFwqDMNE',
      name: 'Rick&MortyBlog',
      link: 'https://rick-and-mortis-blog.vercel.app/',
      description:
        'Blog where you can add comments about the Rick & Morty series and search for your favorite character.',
      id: '2',
    },
    {
      url: 'https://youtu.be/4f19SyiHR2A',
      name: 'Tim Burton Api-Blog',
      link: 'https://tim-burton-app.vercel.app/',
      description:
        'Api-Blog where to search for Tim Burton movies, if you don`t find the movie you are looking for, you can add it so that other people can find it in the future.',
      id: '3',
    },
    {
      url: 'https://youtu.be/rVu876vJCCA',
      name: 'Hub-Game',
      link: 'https://hub-app-sigma.vercel.app/',
      description:
        'Application made with native JavaScript. It has several mini games that you can play.',
      id: '4',
    },
  ];

  return (
    <Div
      display="flex"
      flexdir="row"
      flexwrap="wrap"
      align="center"
      gap="4rem"
      width="95%"
      justify="space-around"
    >
      {projects ? (
        projects.map((project) => (
          <DivProject
            key={project.id}
            display="flex"
            flexdir="column"
            width="400px"
            height="550px"
            justify="space-between"
            gap="1.5rem"
          >
            <Title textAl="center">{project.name}</Title>
            <ReactPlayer url={project.url} playsinline width="100%" />
            <Div
              width="fit-content"
              borderbottom={`1px solid ${themeStyled.dark.tertiary}`}
              color={
                theme === 'dark' ? themeStyled.dark.primary : themeStyled.light.primary
              }
            >
              <a href={project.link} target="_blank" rel="noreferrer">
                <P>👉 See more </P>
              </a>
            </Div>
            <P>{project.description}</P>
          </DivProject>
        ))
      ) : (
        <HashLoader />
      )}
    </Div>
  );
};

export default ProjectsBox;
