
import React, { useRef } from 'react'
import { Form } from 'react-router-dom'
import styled from 'styled-components'
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_60vhlwm', 'template_9wy5w8j', form.current, '4aS42C3SSpmCW7MVx')
      .then((result) => {
        alert("Message sent succesfully")
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <Formulario>
      <div className='contact__container vista'>

        <h2>Contact</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <label>Name: </label>
            <input type="text" name="user_name" />
          </div>
          <div>
            <label>Email: </label>
            <input type="email" name="user_email" />
          </div>
          <div>
            <label>Company: </label>
            <input type="text" name="user_company" />
          </div>
          <div>
            <label>Subject: </label>
            <input type="text" name="user_subject" />
          </div>
          <div>
            <label>Message: </label>
            <textarea name="message" />
          </div>
          <div>
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
    </Formulario >
  )
}

export default Contact

const Formulario = styled.div`
margin-top: 50px;
`