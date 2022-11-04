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
            <a href='https://pokedex-steeven-sanchez.netlify.app' target="_blank">
              <article className='project'>
                <header>
                  <img className='img' src='src/imagenes/project1.png' alt="" />
                </header>
                <h3><span>POKEDEX</span> </h3>
              
                <ul>
                  <li>▶  Design and development of fully responsive web application;
                  </li>
                  <li>▶  Custom hooks, components, contexts, stores, global variables;</li>
                  <li>▶  The application was tested by non-programmers with an excellent interface result.</li>
                </ul>
              </article>
                </a>
            
          </SwiperSlide>
          <SwiperSlide>
            <a href='https://rick-morty-app-st-san.netlify.app' target="_blank">
              <article className='project'>
                <header>
                  <img src='src/imagenes/project2.png' alt="" />
                </header>
                <h3><span>RICK AND MORTY APP</span>  </h3>
                <ul>
                  <li>▶  Design and development of fully responsive web application;
</li>
                  <li>▶  User friendly interface;</li>
                  <li>▶  Implementation of React JS technologies as components, asynchronous calls, global variable contexts, hooks;</li>
                </ul>
              </article>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href='https://crud-project-steeven-sanchez.netlify.app' target="_blank">
              <article className='project'>
                <header>
                  <img src='src/imagenes/project3.png' alt="" />
                </header>
                <h3>CRUD project</h3>
                <ul>
                  <li>▶  Create, Read, Update and Delete users from a backend provided by Academlo.
</li>
                  <li>▶  Fully responsive model.</li>
                  <li>▶  Use of manners.</li>
                  <li>▶  Clear and defined design using CSS.</li>
                </ul>
              </article>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href='https://proyecto-steeven.netlify.app' target="_blank">
              <article className='project'>
                <header>
                  <img src='src/imagenes/project5.png' alt="" />
                </header>
                <h3>RANDOM PHRASES</h3>
                <ul>
                <li>▶   Design and development of fully responsive web application.</li>
                  <li>▶  Managment of json documents</li>
                  <li>▶  Clear and defined design using CSS.</li>
                </ul>
              </article>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href='https://weather-app-steeven-sanchez.netlify.app' target="_blank">
              <article className='project'>
                <header>
                  <img src='src/imagenes/project4.png' alt="" />
                </header>
                <h3>
                WEATHER-APP
                </h3>
                <ul>
                  <li>▶   Design and development of fully responsive web application.</li>
                  <li>▶  Asynchronous calls, hooks.</li>
                  <li>▶  Clear and defined design using CSS.</li>
                </ul>
              </article>
            </a>
          </SwiperSlide>

        </Swiper>
      </div>


      <div className='up-down'>


</div>
    </ProjectSection>
  )
}

export default Projects

const ProjectSection = styled.section`
  margin-top:120px;

`