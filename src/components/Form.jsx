import React from 'react';

import mail from '../../public/mail-svgrepo-com (1).svg';
import Div from '../components/ui-components/StyledDiv';
import { Img } from '../components/ui-components/StyledImg';
import P from '../components/ui-components/StyledPharagraph';
import Fieldset from './ui-components/StyledFieldset';
import Input from './ui-components/StyledInput';
import Legend from './ui-components/StyledLegend';

const Form = () => {
  return (
    <form>
      <Fieldset>
        <Legend>Contact Me</Legend>
        <Div display="flex" flexdir="row" gap="2rem" align="center">
          <Img src={mail} alt="mail icon" width="2.5rem" />
          <P>laurasanchez.develop@gmail.com</P>
        </Div>
        <Div>
          <Input name="Name" />
        </Div>
      </Fieldset>
    </form>
  );
};

export default Form;
