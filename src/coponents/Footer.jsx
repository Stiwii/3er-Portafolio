import React from 'react'
import styled from 'styled-components'

const Footer = ({setChangeNocturn,changeNocturn}) => {

  const handleNoc = () => {
    setChangeNocturn(!changeNocturn)
  }

  return (
    <FootDiv>
      <button className={`switch ${changeNocturn ? 'active' : ''}`} onClick={handleNoc}></button>

    </FootDiv>
  
  )
}

export default Footer

const FootDiv = styled.div`
position: relative;
display:flex;
height:32px;
max-height: 32px;
max-width: 1040px;
margin:auto;
left:0;
.switch {
  
  /* margin: auto; */
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

`