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
    <>
      <NavContainer>
        <div className='back_nv'></div>
        <div className='nombre' onClick={() => setIsLoading(true)}>
          <h1>SANCHEZ STEEVEN</h1>
        </div>
        <div className="foto">
          <a href="https://docs.google.com/document/d/1EbAd7LbJvybZ9qntVOXDdK35T9QJN2zTbvhiDjjAQqY/edit?usp=sharing" target='_blank'>
            <img src='./identidad/fotoSinFondo.png' alt="" />
          </a>
        </div>
        <button className={`switch ${changeNocturn ? 'active' : ''}`} onClick={handleNoc}></button>

        <div className={`nav__links ${clicked ? 'active' : ''}`} >
          <div className='nav_flex'>
            <a onClick={handleClick} className={`nav__word ${clicke ? 'active' : ''}`} href='#' end><AiFillHome /> Home</a>
            <a onClick={handleClick} className={`nav__word ${clicke ? 'active' : ''}`} href='#about' >About <HiInformationCircle /></a>
            <a onClick={handleClick} className={`nav__word ${clicke ? 'active' : ''}`} href='#skills' ><GiSkills /> Skills</a>
            <a onClick={handleClick} className={`nav__word ${clicke ? 'active' : ''}`} href='#experience' >Experience <FaBookReader /></a>
            {/* <a onClick={handleClick} className={`nav__word ${clicke ? 'active' : ''}`} href='#projects' ><AiFillProject /> Projects</a> */}
            {/* <a onClick={handleClick} className={`nav__word ${clicke ? 'active' : ''}`} href='#contact' > Contact <AiFillContacts /></a> */}
          </div>
        </div>

        <div className='btn__menu'>
          <MenuButton clicked={clicked} handleClick={handleClick} />
        </div>

      </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`
  position: relative;

  width:100%;
  max-width: 1080px;
  height:100%;
  max-height: 120px;
  
  margin:auto;
  padding:10px;
  gap: 20px;

  display: flex;
  align-items: center;

  box-shadow: 20px 0px 50px var(--color-2t);
    background: rgba(255, 255, 255, 0.1);
    
    border-left: 1px solid var(--color-1t) ;
    border-top: 1px solid  var(--color-1t);
    backdrop-filter: blur(3px);  

  
  @keyframes moverDiagonal{
    0%{background-position: 0 50%;}
    50%{background-position: 100 50%;}
    100%{background-position: 0 50%;}
  }

  .back_nav{
    position: absolute;
    width:100%;
 
  height:100vh;
  background-image: url('https://38.media.tumblr.com/fe2be7992406f6a08369cce31b3154fc/tumblr_n9af8lWC711r72ht7o1_r1_500.gif');
  background-size: cover;
  opacity: 0.2;
  top: 0; 
  right: 0;
  z-index: -1;
  }
  .nombre{
    border: solid 1px var(--color-2);
    padding: 0px 20px;
    outline: solid 1px var(--color-2);
    outline-offset: -6px;
    cursor: pointer;
    h1{
      
      width: 100%;
      font-size: 20px;
    }
    transition: all 1000ms ease;
  }
  .nombre:hover{
    outline: solid 6px var(--color-2);
    outline-offset: -6px;
    background-image: linear-gradient(0deg, rgba(255, 0, 0, 6) 30%, rgba(255, 255, 0, 6) 70%);
     display: inline-block;
     -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    h1{
      /* text-shadow:  0 0 2px var(--color-2t); */
    }
    transition: all 1000ms ease;
  }
  
  .foto{
    position:relative;
    width: 100%;
    height: 100%;
    max-width: 100px;
    max-height: 100px;
    border: solid 0px var(--color-2);
    outline: 1px solid var(--color-2);
    cursor: pointer;
    img{
      width:100%;
    }
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
  background: var(--color-2ttt);
  width: 60px;
  height: 32px;
  border-radius: 30px;
  border: none;
  outline: none;
  cursor: pointer;
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
    right: 10px
  }
  .btn__menu:hover{
    transform: scale(1.03);
    animation: transform 500ms easy;
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

  }
  
  .nav__links.active{
    background-color: var(--color-1);
    top:0px; 
    right: 0px; 
    padding-top: 0;
    z-index:50;
    backdrop-filter: blur(3px); 
    
/* opacity:.5; */
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
  
 @media (min-width: 768px) {
    
    .btn__menu{
    display: none;
  }
     .switch{
    display: flex;
    right:80px;
    z-index: 10;
  }
     .nav__links{
    display: flex; 
    height: 600px;
    margin:auto;
    top:350px;
    right:0;
    max-width: clamp(170px , 50vw, 200px);
    background: none;
  }
     .nav__links.active{
    display: fixed;
    height: 600px;
    margin:none;
    top:350px;
    right: 0; 
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
