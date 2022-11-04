import React from 'react'
import styled from 'styled-components'


const Load = () => {
  return (
    <LoadContainer>
      <div className='back_nav'></div>
       <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
       <div className='letra'>
         <h1>S</h1>
        </div>
    </LoadContainer>
  )
}

export default Load

const LoadContainer = styled.div`
    display:flex;
    position:relative;
    width: 100vw;
    
    height: 100vh;
    align-items: center;
    justify-content:center;
    text-align:center;
    color: var(--color-2);
    background-color: var(--color-1);


    .letra{
        font-size: 40px;
        font-weight: 800;
        transform: translate(8px, 8px);
        position:absolute;
        margin: auto; 
       font-family: 'Times New Roman', Times, serif;
       background-image: linear-gradient(0deg, rgba(255, 0, 0, 6) 30%, rgba(255, 255, 0, 6) 70%);
       display: inline-block;
     -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    } 

    .lds-ring {
  display: inline-block;
  position: relative;
  width: 120px;
  height: 120px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  margin:auto;
  width: 100%;
  height: 100%;
  margin: 8px;
  border: 8px solid var(--color-2);
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: var(--color-2) transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

`