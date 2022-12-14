import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BsChevronDown } from 'react-icons/bs';


const Home = () => {
  return (
    
      <HomeSection id='/home'>
      <div className='background'>
      </div>


        <div className="home__container vista">
          <div className='imagen_1'>

          </div>
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
          <p> and my especiality is Front End. Currently, I work on creating projects where I focus my knowledge on <span className='react'><a href="https://reactjs.org" target='_blank'>Reactjs</a></span>. By other way I am studying computer science engineering.</p>
        </div>
        </div>
      </HomeSection>
     
  )
}

export default Home

const HomeSection = styled.div`
  position:relative;
  display: flex;
  cursor: url('./icon/normal.png'), auto; 

  div,h1,h2,h3,h4,p,ul,li{
    cursor: url('./icon/normal.png'), auto; 
  }

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

  .home_container{
    /* position:relative; */
  }
  .imagen_1{
    background-image:url('./movibles/gohan.jpg');
    position: absolute;
    background-size:cover;
    height:180px;
    width:120px;
    right:0;
    animation: flotar 5s infinite;
  }
  .greeting{
    margin-right:100px;
  }

  z-index:1;

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
    cursor: url('./icon/normal.png'), auto; 
  }
  .react{
    transition: all 1s ease;
    cursor: url('./icon/pointer.png'), auto; 
  }
  a{
  cursor: url('./icon/pointer.png'), auto; 
 }
  
`