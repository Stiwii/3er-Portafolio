import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import styled from 'styled-components'
import MenuButton from './navbar/MenuButton'

import { AiFillContacts, AiFillHome, AiFillProject, AiOutlineContacts } from 'react-icons/ai';
import { HiInformationCircle } from 'react-icons/hi';
import { GiSkills } from 'react-icons/gi';
import { FaBookReader } from 'react-icons/fa';
import { GrProjects } from 'react-icons/gr';


const Navbar = ({ setClicked, clicked, setIsLoading, setChangeNocturn, changeNocturn }) => {

  const [clicke, setClicke] = useState(false)
  

  const handleClick = () => {
    //pasar de false a true y viceversa
    setClicked(!clicked)
    // setClicke(!clicke)
  }

  const handleNoc = () => {
    setChangeNocturn(!changeNocturn)
  }
  return (
      <NavContainer>
       
        <div  >
          <h1 onClick={() => setIsLoading(true)} className='nombre'>SANCHEZ S.</h1>
          <a href="mailto:stiwers1997@gmail.com"><p className='mail'>stiwers1997@gmail.com</p> </a>
          
        </div>
        <div className="foto">
          <a href="https://docs.google.com/document/d/1EbAd7LbJvybZ9qntVOXDdK35T9QJN2zTbvhiDjjAQqY/edit?usp=sharing" target='_blank'>
            <img src='./identidad/fotoSinFondo.png' alt="" />
          </a>
        </div>
        <div >
        <a className={`nav__word contact`} href='#contact' > Contact me <AiFillContacts /></a>
        </div>
        <button className={`switch ${changeNocturn ? 'active' : ''}`} onClick={handleNoc}></button>

        <div className={`nav__links ${clicked ? 'active' : ''}`} >
        <a href="mailto:stiwers1997@gmail.com"><p className='mail nav_mail'>stiwers1997@gmail.com</p> </a>
          <div className='nav_flex'>
            <a onClick={handleClick} className={`nav__word ${clicke ? 'active' : ''}`} href='#' end><AiFillHome /> Home</a>
            <a onClick={handleClick} className={`nav__word ${clicke ? 'active' : ''}`} href='#about' >About <HiInformationCircle /></a>
            <a onClick={handleClick} className={`nav__word ${clicke ? 'active' : ''}`} href='#skills' ><GiSkills /> Skills</a>
            <a onClick={handleClick} className={`nav__word ${clicke ? 'active' : ''}`} href='#projects' ><AiFillProject /> Projects</a>
            <a onClick={handleClick} className={`nav__word ${clicke ? 'active' : ''}`} href='#contact' > Contact <AiFillContacts /></a>
          </div>
        </div>

        <div className='btn__menu'>
          <MenuButton clicked={clicked} handleClick={handleClick} />
        </div>

      </NavContainer>
  )
}

export default Navbar

const NavContainer = styled.div`
  position: relative;

  width:100%;
  max-width: 1080px;
  height:100%;
  max-height: max-content;
  
  margin:auto;
  padding:10px;
  gap: 20px;

  display: flex;
  align-items: center;

  box-shadow: 20px 0px 50px red;
    
    
    border-left: 1px solid var(--color-1t) ;
    border-top: 1px solid  var(--color-1t);
    backdrop-filter: blur(3px);  
  
  
  @keyframes moverDiagonal{
    0%{background-position: 0 50%;}
    50%{background-position: 100 50%;}
    100%{background-position: 0 50%;}
  }


  .nombre{
    width:max-content;
    border: solid 1px var(--color-2);
    padding: 10px 20px;
    outline: solid 1px var(--color-2);
    outline-offset: -6px;
    cursor: url('./icon/pointer.png'), auto;
    h1{
      width: 100%;
      font-size: 20px;
    }
    transition: all 1000ms ease;
    margin:0;
  }
  .nombre:hover{
    outline: solid 6px var(--color-2);
    outline-offset: -6px;
    background-image: linear-gradient(0deg, rgba(255, 0, 0, 6) 30%, rgba(255, 255, 0, 6) 70%);
     -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    transition: all 1000ms ease;
  }

  .mail{
  cursor: url('./icon/pointer.png'), auto;
  right:25px;
  top:20px;
  z-index:10;
  margin:0;
  margin-top:5px;
  max-width: max-content;
  padding-left: 10px;
  padding-right: 10px;
}
.mail:hover{
  cursor: url('./icon/pointer.png'), auto;
  background-image: linear-gradient(0deg, 
    rgba(255, 0, 0, 6) 30%,
     rgba(255, 255, 0, 6) 70%);
     -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      /* -webkit-text-stroke: .01px var(--color-2) ; */
  color: var(--color-1);
  font-weight: 1000;
  border-bottom: 3px solid var(--color-2);
  transition: all 1s ease;
  
}
  .foto{
    position:relative;
    width: 100%;
    height: 100%;
    max-width: 100px;
    max-height: 100px;
    border: solid 0px var(--color-2);
    outline: 1px solid var(--color-2);
    cursor: url('./icon/pointer.png'), auto;
    margin-right: 70px;
    img{
      display: inline;
      width:100%;
    }
  }
  .foto:hover{
    box-shadow: 0 0 50px var(--color-2);
  }
  .contact{
    display:none;
  }
  .foto::after{
    position:absolute;
    content: '';
    background-color: var(--color-1t);
    background-image: url('https://www.gifcen.com/wp-content/uploads/2022/05/dragon-ball-z-gif-11.gif');
    background-size: cover;
    opacity: 0.2;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    border:solid 1px var(--color-2);
    transition: all 1000ms ease;
    z-index:-1;
    cursor: url('./icon/pointer.png'), auto;
  }

  .foto:hover::after{
    opacity: 1 ;
    transition: all 1000ms ease;
  }
  .foto::before{
    position:absolute;
    content: 'RESUME';
    font-size: 18px;
    color: var(--color-2);
    z-index:1;
    transform: rotate(-45deg);
    width: 100%;
    height: 100%;   
    display: flex;
    justify-content: center;
    align-items:center;
    top: 28px;
    left: 28px;
    -webkit-text-stroke: .5px var(--color-1) ;
    transition: all 800ms ease;
    
  }
  .foto:hover::before{
    color: var(--color-2t);
    z-index: -1;
    transition: all 800ms ease;
    -webkit-text-stroke: .5px var(--color-4) ;
  }
  .switch {
  background: var(--color-2tt);
  border: 2px solid var(--color-2);
  width: 60px;
  height: 36px;
  border-radius: 30px;
  outline: none;
  cursor: url('./icon/pointer.png'), auto;
  position: absolute; 
  display: none;
  right:60px;
  
}
.switch::after {
  content: "";
  width: 28px;
  height: 28px;
  position: absolute;
  background: var(--color-1t);
  border-radius: 50px;
  top: 0;
  left: 0;
  display: block;
  margin: 2px; 
  right: unset;
  background-image: url('https://i.pinimg.com/originals/9b/d6/2e/9bd62eb341dcd095bf01657f50d37257.jpg');
  background-size: cover;
}
.active::after {
  right: 0;
  left: unset;
  
}
  .btn__menu{
    position: fixed;
    z-index:100;
    animation: transform 500ms easy;
    right: 10px;
    cursor: url('./icon/pointer.png'), auto;
  }
  .btn__menu:hover{
    transform: scale(1.03);
    animation: transform 500ms easy;
    cursor: url('./icon/pointer.png'), auto;
  }
  .nav_mail{
    writing-mode: vertical-rl;
    position: absolute;
    top:20px;
    left:40px;
    transform: translateY(-50%);
    transform: rotate(200deg);
    padding: 10px; 
  }
  .nav_mail:hover{
    border:0;
  }
  .nav__links{
    font-size:1.5rem;
    position: absolute;
    top: -2000px;
    bottom:0;
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    max-width:100vw;
    display:flex;
    flex-direction:column;
    align-items: center;  
    justify-content: center;
    gap: 25px;
    color: var(--color-1);
    transition:all .5s ease; 
  }
  .nav__links.active{
    background-color: var(--color-1ttt);
    top:-30px; 
    padding-top: 0;
    z-index:50;
    backdrop-filter: blur(3px); 
    transition:all .5s ease; 
  }
  .nav_flex{
    display:flex;
    flex-direction: column;
    align-items: center;  
    justify-content: center;
    gap: 25px;
  }
  .nav__word{
    padding:10px;
    box-shadow: 20px 20px 50px var(--color-2t);
    border-left: 1px solid var(--color-1t);
    border-top: 1px solid var(--color-1t);
    width: 100%;
    background: var(--color-2tt);
    max-width: clamp(180px , 25vw, 200px);
    text-align:center;
    text-transform: capitalize;
    font-size: 30px;
    -webkit-text-stroke: 2px var(--color-2) ;
    

  }
  .nav__word:hover{
    transform:translateY(-5px) scale(1.01);
    transition: all 500ms ease;
    color: var(--color-2);
    background-image: linear-gradient(0deg, rgba(255, 0, 0, 6) 30%, rgba(255, 255, 0, 6) 70%);
     display: inline-block;
     -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
  }
  .nav__word.active{
    
  }
  @media (max-width:769px) {
    .nav__links{
      left:-2000px;
    }
    .nav__links.active{
      left:0;
    }
    
  }
 @media (min-width: 768px) {
    
    .btn__menu{
    display: none;
  }
     .switch{
    display: flex;
    right:80px;
    z-index: 10;
  }
  .foto{
    margin-right: 10px;
  }
  .contact{
    display:flex;
    color: var(--color-1);
  }
  .nav_mail{
    display:none;
  }
     .nav__links{
    display: flex; 
    height: 600px;
    margin:auto;
    top:350px;
    right:0px;
    max-width: clamp(170px , 50vw, 200px);
    background: none;
  }
     .nav__links.active{
    display: flex;
    height: 600px;
    margin:none;
    /* width: max-content; */
    top:350px;
    right: 0px; 
    z-index:1;
    backdrop-filter: none; 
    transition:all 1s ease; 
    background-color: transparent;
  }
     .nav_flex{
    display:flex;
    flex-direction: column;
    align-items: center;  
    justify-content: center;
    gap: 1rem;
  }


 }
`
