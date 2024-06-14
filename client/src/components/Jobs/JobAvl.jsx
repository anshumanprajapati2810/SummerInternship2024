import React, { useEffect, useState } from 'react'
import "./Job.css"
import compLogo from "../../Assets/netflix.png"
import { Link } from 'react-router-dom';
import axios from 'axios'

function JobAvl() {

const [serachCategory,setSearchCategory]=useState("");
const [searchLoaction,setSearchLocation]=useState("")
const [jobData,setJobData]=useState([])
const [filterJob,setFilterJob]=useState([])
const [isDivVisible,setDivVisible]=useState(false)

useEffect(()=>{
  const fetchData=async()=>{
    try{
      const response = await axios.get("http://localhost:3000/api/job")
      // console.log("response data ",response.data)
      setJobData(response.data)
      setFilterJob(response.data)
      // console.log(jobData)
    }
    catch(error){
      console.log(error)
    }
  }
  fetchData();
},[])
// console.log("job data: ",jobData)

  const showDiv=()=>{
  setDivVisible(true)
  }
  const hidediv=()=>{
    setDivVisible(false)
  }

  const handleCategoryChange=(e)=>{
    const categeoryValue=e.target.value;
    setSearchCategory(categeoryValue);
    setFilterJob([categeoryValue,searchLoaction])
  }
  
  const handleCategoryLocationChange=(e)=>{
    const loactionValue=e.target.value;
    setSearchLocation(loactionValue);
    setFilterJob([serachCategory,loactionValue])
  }
const filterJobs=(category,location)=>{
  const filterData=jobData.filter(
    (Job)=>
    
    Job.category.toLowerCase().includes(category.toLowerCase())&&
    Job.location.toLowerCase().includes(location.toLowerCase())
    )
    setFilterJob(filterData)

}
// console.log("filtered data", filterJob)
useEffect(()=>{

  filterJobs(serachCategory,searchLoaction);


},[searchLoaction,serachCategory])


 
  return (
    <>
    <div className='flex internship-filter'>
    <div className="first-int  mb-14">
        <div className="filter-section w-1/5">
          <p className='text-center' id='filter-ico'><i className='bi bi-funnel text-blue-400'></i>Filter</p>
          <div className="fill flex flex-col ml-2 mr-2 mt-2">
            <label htmlFor="pro">Profile</label>
            <input type="text" value={serachCategory} onChange={handleCategoryChange} className='profile border-2 mr-3 w-full' id='pro' placeholder='Profile Manager'  />
            <label htmlFor="loc">Location</label>
           <input type="text" value={searchLoaction} onChange={handleCategoryLocationChange} className='profile border-2 mr-3 w-full' id='loc' placeholder='Ahmedabad'  />
          </div>
          <div className="preferences flex flex-col">
            <div className="flex mt-3  mr-3">
              <input type="checkbox" id='whf' name='wfh' className='mr-2 ml-3'/>
              <label htmlFor="wfh">Work From Home</label>  
            </div>
            <div className="flex mt-3  mr-3">
              <input type="checkbox" id='whf' name='pt' className='mr-2 ml-3'/>
              <label htmlFor="pt">Part-time</label>  
            </div>
            <p className='p-1'></p>
            <input type="range" name='' id='' />
            <p className="mt-2 ml-3 mr-3">0  &nbsp; 2K &nbsp;  4K  &nbsp;  6K  &nbsp;  8K &nbsp;</p>
          </div>
        <p className='mt-5 text-blue-400 text-center'>View More Filters <i className='bi bi-chevron-down'></i></p>
        <span className='justify-end flex text-blue-400 mr-2 mb-2'>Clear All</span>
        </div>
        <div className="search-2">
          <div className="search-container">
            <input type="text" placeholder='e.g Design, Mumbai'/>
            &nbsp;
            <div className="search-icon">
              <i className='bi bi-search'></i>
            </div>
           </div>
        </div>
      </div>

  <div className="all-internships">
    <div className=" show show2 flex justify-center">
      <p id='filter-ico' className='filterico text-center' >filter <i className="bi bi-funnel  text-blue-400" onClick={showDiv}></i>   </p>

    </div>
    <p className='head font-bold text-lg text-center '>{ filterJob.length} total Jobs</p>

    { filterJob.map((data,index)=>(

<div className='shadow-lg rounded-lg bg-white m-7 ' id='display' key={index}>
  <div className="m-4 pt-2">
  <p className='mb-4 mt-3' id='boxer'> <i className='bi bi-arrow-up-right text-blue-500' ></i> Actively Hiring</p>
  <div className="flex justify-end">
<img src={compLogo} className='w-14' alt="" />
  </div>
<div className="all-ele">


<div className='text-lg text-black  mt-7 font-bold'>{data.title}</div>
<div className="info">

<p className='text-sm text-slate-300 font-bold'>{data.company}</p>
<p className=' mt-2'>{data.location}</p>
</div>
<div className="flex text-sm justify-between">
  <p className='mt-3'> <i className="bi bi-play-circle-fill"></i>   Start Date  <br />  {data.StartDate}</p>


  <p className='mt-3'> <i className="bi bi-calendar-check-fill"></i>  Experience  <br />
  {data.Experience}</p>

  <p className='mt-3'>  <i className="bi bi-cash"></i>   Salary <br /> {data.CTC}</p>
   </div>
   </div>
   <span className='bg-slate-200 text-slate-400 w-20 rounded-sm text-center'>Job</span>
   <br />
   <span><i className="bi bi-stopwatch text-green-300"></i>23/11/2065</span>
   <div className="flex justify-end" id='hr'>
<Link className='mt-10' to={`/detailjob?q=${data._id}`}>
<button id='viewButtons' className='bg-transparent text-blue-500'>View In Deatils</button></Link>
   </div>
  </div>
  </div>
  
    ))
     
    }

  </div>


 
</div>
{
  isDivVisible &&(
    <>
    <div className="first2-int mb-14">
  <div className="filter-section w-1/6">
      <button id='close-btn' onClick={hidediv}><i class=" text-3xl bi bi-x"></i></button>
<p className='text-center'><i class="bi bi-funnel  text-blue-400"></i> Filter</p>
<div className='fill flex flex-col ml-2'>
<label htmlFor="pro">Profile</label>
<input type="text" id='pro'  value={serachCategory} onChange={handleCategoryChange} className='profile border-2 mr-3 w-full' placeholder='Profile manager'/>
<label htmlFor="loc">Location</label>
<input type="text" id='loc'  value={searchLoaction}  onChange={handleCategoryLocationChange} className='location border-2 mt-10  -ml-8 w-full' placeholder='Mumbai'/>
</div>
<div className=" preferences mt-8 flex flex-col">
<div className="flex mt-3 ml-3 mr-3">
  <input type="checkbox" name="wfh" id="whf"  className='mr-2 ml-3'/>
  <label htmlFor="wfh">Work From home</label>
</div>
<div className="flex mt-3 ml-3 mr-3">
<input type="checkbox" name="pt" id="whf"  className='mr-2 ml-3'/>
  <label htmlFor="pt">Part-time</label>
</div>
<p> Annual salary (in lakhs)</p>
<input type="range" name="" id="" />
<p className='mt-2 ml-3 mr-3'>0  2K  &nbsp;  4k  &nbsp;  6K &nbsp;  8k   &nbsp; 10K</p>
</div>

<p className= ' mt-5 text-blue-400'>View more filters <i class="bi bi-chevron-down"></i></p>
<span className='justify-end flex text-blue-400 mr-3'>Clear all</span>
</div>
<div className="search-2"><div className="search-container">
  <label htmlFor="ex ">Experince</label>
  <input type="text" id='ex' placeholder='eg. 0-1 year' />
  <div className="search-icon">
  <i class="bi bi-search"></i>
  </div>
  </div></div>
  </div>
    </>
  )
}
</>

    
  )
}

export default JobAvl
