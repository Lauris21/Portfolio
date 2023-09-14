import React from 'react';

import LauraSanchez from '../../public/LauraSanchez.png';
import Bold from '../components/ui-components/StyledBold';
import Div from '../components/ui-components/StyledDiv';
import DivHome from '../components/ui-components/StyledDivHome';
import { Img } from '../components/ui-components/StyledImg';
import P from '../components/ui-components/StyledPharagraph';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
  return (
    <Div display="flex" flexdir="column" gap="5rem">
      <DivHome display="flex" flexdir="row" justify="center" margintop="2rem" minH="65vh">
        <Div margin="auto 0">
          <Div display="flex" flexdir="column" gap="1rem" padding="1.25rem">
            <P fontSz="1.75rem">Hello <span className='wave'>👋🏽</span>,</P>
            <Div display="flex" flexdir="row" gap="1rem">
              <P fontSz="1.75rem">I´m</P>
              <Bold fontSz="2.5rem">Laura Sánchez</Bold>
            </Div>
          </Div>

          <Div display="flex" flexdir="row" gap="1rem" padding=" 0 1.5rem">
            <P fontSz="1.75rem">FullStack Developer</P>
          </Div>
        </Div>
        <Div padding="2rem" display="flex" align="center" justify="center">
          <Img src={LauraSanchez} alt="Laura Sánchez Image" width="22rem" />
        </Div>
      </DivHome>
      <About />
      <Projects />
      <Contact />
    </Div>
  );
};

export default Home;
