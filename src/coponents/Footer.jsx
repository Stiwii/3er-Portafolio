import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import styled from 'styled-components'

const Footer = ({setChangeNocturn,changeNocturn}) => {

  const handleNoc = () => {
    setChangeNocturn(!changeNocturn)
  }

  return (
    <FootDiv>
      <div className="linkedin icon_contact">
        <a href="https://www.linkedin.com/in/steeven-sanchez-693442238/" target='_blanck'> <AiFillLinkedin /> </a>
      </div>
      <div className='github icon_contact'>
    <a href="https://github.com/Stiwii" target='_blanck'> <AiFillGithub/> </a>
      </div>
      <div className='instagram icon_contact'>
<a href="https://www.instagram.com/sanchez.steeven/" target='_blanck'> <AiFillInstagram /> </a>
      </div>

      <button className={`switch ${changeNocturn ? 'active' : ''}`} onClick={handleNoc}></button>

      <div className='mail'><a href="mailto:stiwers1997@gmail.com">stiwers1997@gmail.com</a></div>
    </FootDiv>
  
  )
}

export default Footer

const FootDiv = styled.div`
position: relative;
display:flex;
gap: 50px;
padding-left: 30px;
padding-top: 10px;
height:80px;

max-width: 1080px;
margin:auto;
left:0;
box-shadow: 20px 0px 50px var(--color-2t);
    background: rgba(255, 255, 255, 0.1);
    
    border-left: 1px solid var(--color-1t) ;
    border-top: 1px solid  var(--color-1t);
    backdrop-filter: blur(3px);  

.mail{
  cursor: pointer;
  position: absolute; 
  right:25px;
  top:40px;
  font-family: 'Times New Roman', Times, serif;
  text-decoration: underline;
}
.switch {
  background: var(--color-2);
  width: 60px;
  height: 32px;
  border-radius: 30px;
  border: none;
  outline: none;
  cursor: pointer;
  position: absolute; 
  display: flex;
  right:25px;
  bottom:40px;
}
.switch::after {
  content: "";
  width: 28px;
  height: 28px;
  position: absolute;
  background: var(--color-1);
  background-image: url('https://i.pinimg.com/originals/9b/d6/2e/9bd62eb341dcd095bf01657f50d37257.jpg');
  background-size: cover;
  border-radius: 50px;
  top: 0;
  left: 0;
  display: block;
  margin: 2px; 
  right: unset;

 
}


.active::after {
  right: 0;
  left: unset;
  
}

.icon_contact{
  font-size: 2rem;
}
.icon_contact:hover{
  color: #9b6500;
  cursor: pointer;
}
@media (min-width: 768px) {
  .switch{
    display: none;
    right:100px;
  }
 }

`