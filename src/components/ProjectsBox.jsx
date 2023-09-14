import React from 'react';
import { useContext } from 'react';
import ReactPlayer from 'react-player';
import { HashLoader } from 'react-spinners/HashLoader';

import { ThemeContext } from '../context/ThemeContext';
import themeStyled from '../themeStyled';
import Div from './ui-components/StyledDiv';
import DivProject from './ui-components/StyledDivProject';
import P from './ui-components/StyledPharagraph';
import Title from './ui-components/StyledTitle';

const ProjectsBox = () => {
  const { theme } = useContext(ThemeContext);

  const projects = [
     {
      url: 'https://youtu.be/Fwhz7ykoCXA',
      name: 'Chat-App',
      link: 'https://chat-neon-one.vercel.app/',
      description:
        'web chat with authentication, made with react express mongo DB, socket.io. To access you must register with a valid email, as a verification code will be sent to you.',
      id: '1',
    },
    {
      url: 'https://youtube.com/shorts/3LsCcOwGLNU',
      name: 'Weather-App',
      link: 'https://weather-two-mu.vercel.app/',
      description:
        'Weather forecast web for desktop and mobile, which takes data from the OpenWather API according to the location where you are, or where you are looking, and shows the forecast for the next few hours and days.',
      id: '2',
    },
    {
      url: 'https://youtu.be/cKBF0z3FFkQ',
      name: 'Todo List',
      link: 'https://to-do-list-six-rho.vercel.app/',
      description:
        'Todo List web for desktop and mobile, where you can down tasks, reminders and everything you can think of. Once completed, don`t forget to delete it.',
      id: '3',
    },
    {
      url: 'https://youtu.be/SoGkInynO04',
      name: 'The Phone Free',
      link: 'https://the-phone-free.vercel.app/',
      description:
        'Web for desktop and mobile. It includes a catalog of mobile phones, where you can add the phones you want to the cart.',
      id: '4',
    },
    {
      url: 'https://youtu.be/t6efFwqDMNE',
      name: 'Rick&MortyBlog',
      link: 'https://rick-and-mortis-blog.vercel.app/',
      description:
        'Blog where you can add comments about the Rick & Morty series and search for your favorite character.',
      id: '5',
    },
    {
      url: 'https://youtu.be/4f19SyiHR2A',
      name: 'Tim Burton Api-Blog',
      link: 'https://tim-burton-app.vercel.app/',
      description:
        'Api-Blog where to search for Tim Burton movies, if you don`t find the movie you are looking for, you can add it so that other people can find it in the future.',
      id: '6',
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
            minW="400px"
            maxW="600px"
            height="540px"
            gap="1.5rem"
          >
            <Title textAl="center">{project.name}</Title>
            <ReactPlayer url={project.url} playsinline width="100%" height="330px" />
            <Div
              width="fit-content"
              borderbottom={`1px solid ${themeStyled.dark.tertiary}`}
              color={
                theme === 'dark' ? themeStyled.dark.primary : themeStyled.light.primary
              }
            >
              <a href={project.link} target="_blank" rel="noreferrer">
                <P hover="transform: scale(1.1)">👉 See more </P>
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
