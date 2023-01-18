import 'react-toastify/dist/ReactToastify.css';

import emailjs from '@emailjs/browser';
import React from 'react';
import { useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import mail from '../../public/mail-svgrepo-com (1).svg';
import { Img } from '../components/ui-components/StyledImg';
import P from '../components/ui-components/StyledPharagraph';
import themeStyled from '../themeStyled';
import DivForm from './ui-components/StyledDivForm';
import Fieldset from './ui-components/StyledFieldset';
import Input from './ui-components/StyledInput';
import Legend from './ui-components/StyledLegend';
import Textarea from './ui-components/StyledTextArea';

const Form = () => {
  const form = useRef();

  const sendEmail = (ev) => {
    ev.preventDefault();
    emailjs
      .sendForm('service_4fobios', 'contact_form', form.current, 'OSbft1z1M9_pHU-mC')
      .then(
        (res) => {
          console.log(res);
          toast.success('The task is empty!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
        },
        (error) => {
          console.log('FAILED', error);
          toast.error('The task is empty!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
        },
      );
    ev.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <Fieldset>
        <Legend>Contact Me</Legend>
        <DivForm display="flex" flexdir="row" gap="2rem" justify="center" align="center">
          <Img src={mail} alt="mail icon" width="2.5rem" />
          <P>laurasanchez.develop@gmail.com</P>
        </DivForm>
        <DivForm
          padding="2rem"
          display="flex"
          flexdir="column"
          gap="1rem"
          justify="center"
        >
          <Input
            type="text"
            name="user_name"
            placeholder="Name"
            textAl="center"
            borderRad="9px"
            fontSz="1rem"
            heigth="2rem"
            required
          />
          <Input
            type="email"
            name="user_email"
            placeholder="Email"
            textAl="center"
            borderRad="9px"
            fontSz="1rem"
            heigth="2rem"
            required
          />
          <Textarea
            name="message"
            placeholder="Message"
            fontSz="1rem"
            borderRad="9px"
            textAl="center"
            required
          />
          <Input
            width="6rem"
            margin="0 auto"
            fontSz="1rem"
            padding="0.5rem"
            borderRad="9px"
            backgr={themeStyled.dark.tertiary}
            color={themeStyled.dark.background}
            type="submit"
            value="SEND"
          />
        </DivForm>
      </Fieldset>
      <ToastContainer />
    </form>
  );
};

export default Form;
