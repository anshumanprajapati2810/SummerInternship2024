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
import AdminLogin from './Admin/AdminLogin.jsx'
import AdminPanel from './Admin/AdminPanel.jsx'
import DetailApplication from './Applications/DetailApplication.jsx'
import Postinternships from './Admin/PostInternships.jsx'
import ViewAllApplication from './Admin/ViewAllApplications.jsx'
import DetailApplicationUser from './Applications/DetailApplicationUser.jsx'
import UserApplication from './profile/UserApplication.jsx'
import PostJobs from './Admin/PostJobs.jsx'
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
          <Route path='/detailApplication' element={<DetailApplication/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/adminlogin' element={<AdminLogin/>}/>
          <Route path='/adminpanel' element={<AdminPanel/>}/>
          <Route path='/postInternship' element={<Postinternships/>}/>
          <Route path='/postjob' element={<PostJobs/>}/>
          <Route path='/applications' element={<ViewAllApplication/>}/>
          <Route path='/UserapplicationDetail' element={< DetailApplicationUser/>}/>
          <Route path='/userapplication' element={<UserApplication/>}/>


        </Routes>
        <Footer/>
      </div>
      
    </div>
  )
}

export default App
