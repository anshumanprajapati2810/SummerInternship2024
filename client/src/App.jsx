import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer.jsx'
import Intern from './components/Internships/Intern.jsx'
import JobAvl from './components/Jobs/JobAvl.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/register' element={}/> */}
          <Route path='/Internship' element={<Intern/>}/>
          <Route path='/Jobs' element={<JobAvl/>}/>

        </Routes>
        <Footer/>
      </div>
      
    </div>
  )
}

export default App
