import React from 'react';

import Bold from '../components/ui-components/StyledBold';
import Div from '../components/ui-components/StyledDiv';
import { Img } from '../components/ui-components/StyledImg';
import P from '../components/ui-components/StyledPharagraph';

const NotFound = () => {
  return (
    <Div
      display="flex"
      flexdir="column"
      align="center"
      margintop="2rem"
      minH="65vh"
      justify="center"
    >
      <Bold>Error 404</Bold>
      <P>Page not found!</P>
      <Img
        src="https://res.cloudinary.com/dh9z8mk2j/image/upload/v1673130394/Other/not_Found-removebg-preview_n5zo0s.png"
        alt="Notfound icon"
        width="90%"
      />
    </Div>
  );
};

export default NotFound;
