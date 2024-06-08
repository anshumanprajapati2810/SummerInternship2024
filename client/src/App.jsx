import { useEffect, useState } from 'react'
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
import { useDispatch, useSelector } from 'react-redux'
import { selectUser,login,logout } from './features/UserSlice.jsx'
import { auth } from './firebase/firebase.jsx'
import Profile from './profile/Profile.jsx'
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(()=>{
    
      auth.onAuthStateChanged((authuser)=>{
        if (authuser) {
          dispatch(login({
            uid:authuser.uid,
            photo:authuser.photoURL,
            name:authuser.displayName,
            email:authuser.email, 
          }))
        }
        else{
          dispatch(logout())
        }
      })
  },[dispatch])
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
          <Route path='/detailjob' element={<JobDetail/>}/>
          <Route path='/detailInternship' element={<InternDetail/>}/>
          <Route path='/profile' element={<Profile/>}/>

        </Routes>
        <Footer/>
      </div>
      
    </div>
  )
}

export default App
