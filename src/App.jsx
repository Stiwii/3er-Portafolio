
import { useEffect, useState } from 'react'
import './App.css'
import Load from './coponents/load/Load'
import Navbar from './coponents/Navbar'

function App() {
  // variable para activar el loading
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false) 
    }, 2000) //tiempo de carga del loading
  }, [])
// constante abrir el navbar
  const [clicked, setClicked] = useState(false)

  return (
    <>
    {
      isLoading ?
        <Load /> :
   
       <div className='app-color'>
            <div className="triangle__container">
              <div className=" triangle triangle1"></div>
              <div className=" triangle triangle2"></div>
              <div className=" triangle triangle3"></div>
            </div>

            <div className="App" >
            <Navbar
                  setClicked={setClicked}
                  clicked={clicked}
                />
            </div>

          </div>
   
    }
    </>
  )
  }

export default App
