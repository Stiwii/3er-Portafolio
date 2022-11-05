import React from 'react'
import styled from 'styled-components'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Skills = () => {
  return (
    <SkillSection>

      <div className='skills__container vista'>
        <h2><span>SKILLS</span> </h2>
        <div className='languages'>
          <h3><span>Programming Languages and Technologies</span></h3>
          <div className="icon_p">
            <img src='./skills/javascript.png' alt="" className='img_icon dos'/>
            <img src="./skills/html.png" alt="" className='img_icon uno'/>
                                             
            <img src="./skills/react.png" alt="" className='img_icon uno'/>
            <img src='./skills/css.png' alt="" className='img_icon tres'/>
        
            <img src='./skills/python.png' alt="" className='img_icon dos'/>

            <img src="./skills/mongodb.png" alt="" className='img_icon tres'/>

            <img src="./skills/postgreSQL.png" alt="" className='img_icon uno'/>

            <img src="./skills/cpp.png" alt="" className='img_icon dos'/>

          </div>
        </div>

        <div className='container_icons'>

        </div>
      </div>



    </SkillSection>
  )
}

export default Skills

const SkillSection = styled.div`
 cursor: url('./icon/normal.png'), auto; 
 div,h1,h2,h3,h4,p,ul,li{
    cursor: url('./icon/normal.png'), auto; 
  }
  a{
  cursor: url('./icon/pointer.png'), auto; 
 }


  @keyframes icons_skill {
    0%{
        transform:rotate(0deg) ;
    }
    35%{
        transform:rotate(30deg) ;
    }
    70%{
        transform:rotate(-30deg) ;
    }
    100%{
        transform:rotate(0deg) ;
    }
  }
  @keyframes icons_skill_2 {
    0%{
        transform:rotate(0deg) ;
    }
    35%{
        transform:translateY(30px) ;
    }
    /* 70%{
        transform:rotate(-30deg) ;
    } */
    100%{
        transform:rotate(0deg) ;
    }
  }
  @keyframes icons_skill_3 {
    0%{
        transform:rotate(0deg) ;
    }
    35%{
        transform:translateX(-10px) ;
    }
    70%{
        transform:translateY(-20px) ;
    }
    100%{
        transform:rotate(0deg) ;
    }
  }
margin-top: 120px;
.icon_p{
  display: flex;
  flex-wrap: wrap;
  max-width: max-content;
  justify-content:center;
  align-items:center; 
  gap:20px;
  img{
    width: 100px;
  }
  .uno{
      animation: icons_skill  30s ease infinite;
    }
    .dos{
      animation: icons_skill_2  25s ease infinite;
    }
    .tres{
      animation: icons_skill_3  20s ease infinite;
    }
}


@media (min-width: 768px){
  .icon_p{
    gap:50px;
  }
}
  `