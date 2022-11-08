import React, { useState } from 'react'
import styled from 'styled-components'
import { BsChevronDown,BsChevronUp } from 'react-icons/bs';

// import Swiper core and required modules


import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-coverflow";
import { Link, useNavigate } from 'react-router-dom';


const Projects = () => {


  return (
    <ProjectSection>
      <div className='projects__container vista'>
        <h2><span>Projects</span></h2>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
          spaceBetween={10}
          breakpoints={{
            769: { slidesPerView: 1.5},
          }}
          slidesPerView={1}
          effect={"coverflow"}
          grabCursor={true}
          navigation={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}

        >
          <SwiperSlide>
              <article className='project'>
                <header>
            <a href='https://pokedex-steeven-sanchez.netlify.app' target="_blank">
                  <img className='img' src='imagenes/project1.png' alt="" />
                </a>
                </header>
                <h3><span>POKEDEX</span> </h3>
              
                <ul>
                  <li>Design and development of fully responsive web application;
                  </li>
                  <li>Custom hooks, components, contexts, stores, global variables;</li>
                  <li>The application was tested by non-programmers with an excellent interface result.</li>
                </ul>
              </article>
            
          </SwiperSlide>
          <SwiperSlide>
              <article className='project'>
                <header>
            <a href='https://rick-morty-app-st-san.netlify.app' target="_blank">
                  <img src='imagenes/project2.png' alt="" />
            </a>
                </header>
                <h3><span>RICK AND MORTY APP</span>  </h3>
                <ul>
                  <li>Design and development of fully responsive web application;
</li>
                  <li>User friendly interface;</li>
                  <li>Implementation of React JS technologies as components, asynchronous calls, global variable contexts, hooks;</li>
                </ul>
              </article>
          </SwiperSlide>
          <SwiperSlide>
              <article className='project'>
                <header>
            <a href='https://crud-project-steeven-sanchez.netlify.app' target="_blank">
                  <img src='imagenes/project3.png' alt="" />
            </a>
                </header>
                <h3>CRUD project</h3>
                <ul>
                  <li>Create, Read, Update and Delete users from a backend provided by Academlo.
</li>
                  <li>Fully responsive model.</li>
                  <li>Use of manners.</li>
                  <li>Clear and defined design using CSS.</li>
                </ul>
              </article>
          </SwiperSlide>

          <SwiperSlide>
              <article className='project'>
                <header>
            <a href='https://weather-app-steeven-sanchez.netlify.app' target="_blank">
                  <img src='imagenes/project4.png' alt="" />
            </a>
                </header>
                
                <h3>
                WEATHER-APP
                </h3>
                <ul>
                  <li>Design and development of fully responsive web application.</li>
                  <li>Asynchronous calls, hooks.</li>
                  <li>Clear and defined design using CSS.</li>
                </ul>
              </article>
          </SwiperSlide>

        </Swiper>
      </div>


      <div className='up-down'>


</div>
    </ProjectSection>
  )
}

export default Projects

const ProjectSection = styled.div`
margin-top: 100px;
 position:relative;
  
  cursor: url('./icon/normal.png'), auto; 
 div,h1,h2,h3,h4,p,ul,li,article{
    cursor: url('./icon/normal.png'), auto; 
  }
  img{
  cursor: url('./icon/pointer.png'), auto; 
 }

 .project{
  position: relative;
 }
 .header{
  display:absolute;
  justify-content: center;
  align-items: center;
  background-color:blue;
  width:100%;
  height:100%;
  top: 0;
  
 }
 img{
  position:absolute;
  left:50%;
  transform: translateX(-50%);
  max-width:100%;
  opacity:0;
  height:100%;
  transition: all 1s ease;
  border-radius: 10px;
 }
 img:hover{
    opacity:1;
    transition: all 1s ease;
 }

 h3{
  padding:0;
 }

 .swiper-button-next, .swiper-button-prev{
    z-index: 11;
    border-radius: 50%;
    aspect-ratio: 1;
    background-color: var(--color-2) ;
    height: 50px;
    width:50px;
    color: var(--color-1);
  }
  .swiper-button-next:hover, .swiper-button-prev:hover{
    box-shadow: 0 0 20px var(--color-2);
    background-color: var(--color-4t);
    cursor: url('./icon/pointer.png'), auto; 
  }

  .swiper-button-next::after, .swiper-button-prev::after{
    font-size:25px;
    font-weight: 1000px;
    cursor: url('./icon/pointer.png'), auto; 
  }

  .swiper{
    padding: 0 20px;
    display:flex;
    justify-content:center;
    align-items:center;
  }

`