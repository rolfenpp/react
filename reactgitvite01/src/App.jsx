
import {BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom'
import './App.css'
import Ip from './components/Ip'


//pages
import Home from './pages/Home'
import About from './pages/About'


function App() {

  return (
   <BrowserRouter>
      {/* <Ip /> */}
      <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
        </nav>
      <main>
        <section className='swiperx-section'>
          <Routes>
            <Route index element={<Home />}/>
            <Route path='/about' element={<About />}/>
          </Routes>
        </section>
      </main>
      <footer>
        <h1>Footer</h1>
      </footer>
    </BrowserRouter> 
  )
}

export default App
