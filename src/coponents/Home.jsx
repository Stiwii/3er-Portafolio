import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BsChevronDown } from 'react-icons/bs';


const Home = () => {
  return (
    <>
      <HomeSection id='/home'>
      <div className='background'>
            
            </div>

        <div className="home__container vista">
          <div>
             <h2 className='greeting'><span className='greeting__span'><span>Welcome</span> , my name is </span> </h2>
        </div>
         
          <div>
          <h3 className='name'><span className='name_span'>STEEVEN SANCHEZ.</span> </h3>
        </div>
        <div>
          <h4 className='employment'><span className='employment__span'>Full Stack Web Developer.</span></h4>
        </div>
       
        <div>
          <p><span className='uppercase'>I</span> am a student in the last semester of Computer Science and Full Stack Web Developer, especially in Front End. Currently, I work on creating projects where I focus my knowledge on <span className='react'><a href="https://reactjs.org" target='_blank'>Reactjs</a>. </span> </p>
        </div>
        </div>
      </HomeSection>
     
    </>
  )
}

export default Home

const HomeSection = styled.div`
  position:relative;

  @keyframes rotate1 {
    0%{
        transform: rotate(0deg) translateX(300px);
    }
    25%{
        transform:rotate(-180deg) translateY(-300px);
    }
    50%{
        transform:rotate(180deg) translateY(200px);
    }
    75%{
        transform:rotate(180deg) translateY(200px);
    }
    100%{
        transform:rotate(0deg) translateX(300px);
    }
  }
  .background{
    background-image:url('https://i.pinimg.com/564x/c3/54/d3/c354d3692b146508b4cd0447817d3f7d.jpg'); 
    position: fixed ;
    height:400px;
    width:400px;
    border-radius: 55%;
    background-size: cover;
    opacity:.5;
    top:100px;
    left:200px;
    animation: rotate1 20s ease infinite;
  }
  .react{
    transition: all 1s ease;
  }
    
`