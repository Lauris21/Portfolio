import React from 'react';
import Div from '../components/ui-components/StyledDiv';
import { Img } from '../components/ui-components/StyledImg';
import mail from '../../public/mail-svgrepo-com (1).svg';
import P from '../components/ui-components/StyledPharagraph';
import Form from '../components/Form';

const Contact = () => {
  return (
    <Div display="flex" flexdir="column" align="center" margintop="2rem" height="65vh">
      <Form />
    </Div>
  );
};

export default Contact;
