
import { useEffect, useState } from 'react'
import './App.css'
import Load from './coponents/load/Load'

function App() {
  // variable para activar el loading
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false) 
    }, 2000) //tiempo de carga del loading
  }, [])


  return (
    <>
    {
      isLoading ?
        <Load /> :
    <div className="App">
       <div className='app-color'>
            <div className="triangle__container">
              <div className=" triangle triangle1"></div>
              <div className=" triangle triangle2"></div>
              <div className=" triangle triangle3"></div>
            </div>

            <div className="App" >
             hola
            </div>


          </div>
    </div>
    }
    </>
  )
  }

export default App
