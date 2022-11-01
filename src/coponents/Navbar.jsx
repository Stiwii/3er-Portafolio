import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import styled from 'styled-components'
import MenuButton from './navbar/MenuButton'

import { AiFillHome, AiFillProject, AiOutlineContacts } from 'react-icons/ai';
import { HiInformationCircle } from 'react-icons/hi';
import { GiSkills } from 'react-icons/gi';
import { FaBookReader } from 'react-icons/fa';
import { GrProjects } from 'react-icons/gr';


const Navbar = ({setClicked, clicked, setIsLoading}) => {

  const [clicke, setClicke] = useState(false)

  const handleClick = () => { 
    //pasar de false a true y viceversa
    setClicked(!clicked)
    // setClicke(!clicke)
  }



  return (
    <>
      <NavContainer> 
    
        <div className="foto">
          <a href="https://docs.google.com/document/d/1EbAd7LbJvybZ9qntVOXDdK35T9QJN2zTbvhiDjjAQqY/edit?usp=sharing" target='_blank'>
          <img src='./identidad/fotoSinFondo.png' alt=""  />
          </a>
            
        </div>
        <div className='nombre' onClick={()=> setIsLoading(true)}>
        <h1>SANCHEZ S.</h1>
        </div>
        
        
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
  max-width: 1040px;
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
  }
  .nombre:hover{
    outline: solid 6px var(--color-2);
    outline-offset: -6px;
    h1{
      text-shadow:  0 0 8px var(--color-2);
    }
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
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    border:solid 1px var(--color-2);
    transition: display 1000ms ease;
  }

  .foto:hover::after{
    display:none;
    transition: display 1000ms ease;
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
  }
  .foto:hover::before{
    color: var(--color-2t);
    z-index: -1;
    transition: display 1000ms ease;
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
    left: -2000px;
    transition: .1s; 
    width: 100vw;
    height: 100vh;
    display:flex;
    flex-direction:column;
    align-items: center;  
    justify-content: center;
    gap: 25px;
    
  }

  .nav__links.active{
    max-height: 100vh;
    max-width:100vw;
    background-color: var(--color-1t);
    top:0px; 
    right: 0px; 
    bottom:0; 
    left:0;
    padding-top: 0;
    z-index:50;
    backdrop-filter: blur(3px); 

  }

  .nav__word{
    padding:10px;
    box-shadow: 20px 20px 50px var(--color-2t);
    border-left: 1px solid var(--color-1t);
    border-top: 1px solid var(--color-1t);
    width: 100%;
    background: rgba(255, 255, 255, 0.25);
    max-width: 200px;
    text-align:center;
    text-transform: capitalize;
    font-size: 30px;
  }
  .nav__word:hover{
    transform:translateY(-5px) scale(1.01);
    transition: all 500ms;
  }
  .nav__word.active{
    text-shadow:  0 0 8px white;
  }
  
 
`
