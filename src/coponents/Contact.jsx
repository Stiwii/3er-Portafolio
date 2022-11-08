
import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import emailjs from 'emailjs-com';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

const Contact = () => {
  const form = useRef()
  const { handleSubmit, register, reset } = useForm()

  const sendEmail = data => {
    const defaultValues = {
      name:'',
      email: '',
      company: '',
      subject: '',
      message: ''
    }
    if (data.name != '') {
      if (data.email != '') {
        if (data.company != '') {
          if (data.message != '') {
            emailjs.sendForm('service_60vhlwm', 'template_9wy5w8j', form.current, '4aS42C3SSpmCW7MVx')
              .then((result) => {
                alert("Message sent succesfully")
                console.log(result.text);
              }, (error) => {
                console.log(error.text);
              });
            reset(defaultValues)
          } else {
            window.alert('Write your message')
          }
        } else {
          window.alert('Write your company')
        }
      } else {
        window.alert('Write your email')
      }
    } else {
      window.alert('Write your name')
    }

  };

  return (
    <Formulario>
      <div className='contact__container vista'>
        <div className='form_icons'>
          <h2>Contact</h2>
          <div className='form_i'>

            <div className="linkedin icon_contact">
              <a href="https://www.linkedin.com/in/steeven-sanchez-693442238/" target='_blanck'> <AiFillLinkedin /> </a>
            </div>
            <div className='github icon_contact'>
              <a href="https://github.com/Stiwii" target='_blanck'> <AiFillGithub /> </a>
            </div>
            <div className='instagram icon_contact'>
              <a href="https://www.instagram.com/sanchez.steeven/" target='_blanck'> <AiFillInstagram /> </a>
            </div>
          </div>
        </div>
        <form className='form_text' ref={form} onSubmit={handleSubmit(sendEmail)}>
          <div className='form_div'>
            <label>Name  *</label>
            <input type="text" name="name" {...register('name')} />
          </div>
          <div className='form_div'>
            <label htmlFor='email'>Email    *</label>
            <input type="email" name="email" {...register('email')} />
          </div>
          <div className='form_div'>
            <label htmlFor='company'>Company  *</label>
            <input type="text" name="company" {...register('company')} />
          </div>
          <div className='form_div'>
            <label htmlFor='subject'>Subject   </label>
            <input type="text" name="subject" {...register('subject')} />
          </div>
          <div className='form_div'>
            <label htmlFor='message'>Message    * </label>
            <textarea name="message" className='message' {...register('message')} />
          </div>
          <div className='form_div'>
            <button className='send'>Send</button>
          </div>
        </form>
      </div>
    </Formulario >
  )
}

export default Contact

const Formulario = styled.div`
margin-top: 50px;
display:flex;
cursor: url('./icon/normal.png'), auto; 
div,h1,h2,h3,h4,p,ul,li,article{
    cursor: url('./icon/normal.png'), auto; 
  }
.contact__container{
  display: flex;
  justify-content:center;
  align-items:center;
  cursor: url('./icon/normal.png'), auto;
}
.form_div{
  display: flex;
  flex-direction:column;
  width:100%;max-width: 600px;
}
.form_icons{
  margin-top:10px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
}
.form_i{
  display:flex;
}
.icon_contact{
  font-size: 2.5rem;
  border: 2px solid var(--color-2);
  margin: 5px;
  display:flex;
  align-items:center;
  justify-content:center;
  padding-top:5px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 10px;
  height:max-content;
}
.icon_contact:hover{
  color: rgb(252,144,0);
  cursor: url('./icon/pointer.png'), auto;
  transform: scale(1.3);
}
.form_text{
  padding: 10px;
  width:100%;
  max-width:300px;
}
.send{
  background: var(--color-2tt);
  border-radius: 30px;
  border: 2px solid var(--color-2);
  outline: none;
  cursor: url('./icon/pointer.png'), auto;
  margin-top: 10px;
  font-family: one-piece;
  font-size: 15px;
}
.send:hover{
  box-shadow: 0 0 8px var(--color-2);
  font-size: 17px;
}
.message{
  width: 100%;
  max-width: 300px;
}
`