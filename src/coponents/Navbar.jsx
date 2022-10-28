import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import styled from 'styled-components'
import MenuButton from './navbar/MenuButton'

import { AiFillHome, AiFillProject, AiOutlineContacts } from 'react-icons/ai';
import { HiInformationCircle } from 'react-icons/hi';
import { GiSkills } from 'react-icons/gi';
import { FaBookReader } from 'react-icons/fa';
import { GrProjects } from 'react-icons/gr';


const Navbar = ({setClicked, clicked}) => {

  const [clicke, setClicke] = useState(false)

  const handleClick = () => { 
    //pasar de false a true y viceversa
    setClicked(!clicked)
    // setClicke(!clicke)
  }

  

  return (
    <>
      <NavContainer> 
        
        <div className={`nav__links ${clicked ? 'active' : ''}`} >
        <NavLink onClick={handleClick} className={`nav__word ${clicke ? 'active' : ''}`} to='/' end><AiFillHome /></NavLink>
          <NavLink onClick={handleClick} className={`nav__word ${clicke ? 'active' : ''}`} to='/about' >About <HiInformationCircle/></NavLink>
          <NavLink onClick={handleClick} className={`nav__word ${clicke ? 'active' : ''}`} to='/skills' ><GiSkills /> Skills</NavLink>
          <NavLink onClick={handleClick} className={`nav__word ${clicke ? 'active' : ''}`} to='/experience' >Experience <FaBookReader/></NavLink>
          <NavLink onClick={handleClick} className={`nav__word ${clicke ? 'active' : ''}`} to='/projects' ><AiFillProject/> Projects</NavLink>

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
  margin:auto;
  height:80px;
  display: flex;
  background-color: var(--letter-color);
  

  
  @keyframes moverDiagonal{
    0%{background-position: 0 50%;}
    50%{background-position: 100 50%;}
    100%{background-position: 0 50%;}
  }

  .btn__menu{
    position:absolute;
    z-index:100;
    right:10px;
    top: 20px;
    animation: transform 500ms easy;
  }
  .btn__menu:hover{
    transform: scale(1.03);
    animation: transform 500ms easy;
  }

  .nav__links{
    font-size:1.5rem;
    position: absolute;
    top: -2000px;
    right: -2000px;
    transition: .1s; 
    width: 100vw;
    height: 100vh;
    display:flex;
    flex-direction:column;
    align-items: center;  
    justify-content: center;
    gap: 30px;
    
  }

  .nav__links.active{

    max-height: 100vh;
    max-width:100vw;
    background-color: rgba(255, 255, 255, 0.5);
    top:0px; 
    right: 0px; 
    bottom:0; 
    left:0px;
    padding-top: 0;
    z-index:100;
  }

  .nav__word{
    padding:10px;
    box-shadow: 20px 20px 50px rgba(0,0,0,0.5);
    background: rgba(255, 255, 255, 0.1);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    width: 100%;
    max-width: 200px;
    text-align:center;
    text-transform: capitalize;
  }
  .nav__word:hover{
    transform:translateY(-5px) scale(1.01);
    transition: all 500ms;
  }
  .nav__word.active{
    text-shadow:  0 0 8px white;
  }
 
`
