import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer.jsx'
import Intern from './components/Internships/Intern.jsx'
import JobAvl from './components/Jobs/JobAvl.jsx'
import JobDetail from './components/Jobs/JobDetail.jsx'
import InternDetail from './components/Internships/InternDetail.jsx'
import Register from './components/auth/Register.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/Internship' element={<Intern/>}/>
          <Route path='/Jobs' element={<JobAvl/>}/>
          <Route path='/job_details' element={<JobDetail/>}/>
          <Route path='/intern_details' element={<InternDetail/>}/>

        </Routes>
        <Footer/>
      </div>
      
    </div>
  )
}

export default App
