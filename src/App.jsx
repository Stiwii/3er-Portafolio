
import { useEffect, useState } from 'react'
import './App.css'
import About from './coponents/About'
import Experience from './coponents/Experience'
import Footer from './coponents/Footer'
import Home from './coponents/Home'
import Load from './coponents/load/Load'
import Navbar from './coponents/Navbar'
import Skills from './coponents/Skills'

function App() {
  // variable para activar el loading
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 500) //tiempo de carga del loading
  }, [isLoading])
  // constante abrir el navbar
  const [clicked, setClicked] = useState(false)
  //modo nocturno
  const [changeNocturn, setChangeNocturn] = useState(false)

  return (
    <div className={changeNocturn && `nocturno`}>
      {
        isLoading ?
          <Load /> :

          <div className='app-color'>
          
            <div className="triangle__container">
              <div className=" triangle triangle1"></div>
              <div className=" triangle triangle2"></div>
              <div className=" triangle triangle3"></div>
            </div>

            <div className='navbar'>
              <Navbar
                setClicked={setClicked}
                clicked={clicked}
                setIsLoading={setIsLoading}

              />
            </div>
            <div className="App" >
              <section id='home'>
              <Home />
              </section>
              <section id='about'>
              <About />
              </section>
              <section id='skills'>
              <Skills />
              </section>
              <section id='experience'>
              <Experience />
              </section>
              
              
             
              
            </div>
            <div className='footer'>
              <Footer
                setChangeNocturn={setChangeNocturn}
                changeNocturn={changeNocturn} />
            </div>

          </div>

      }
    </div>
  )
}

export default App
