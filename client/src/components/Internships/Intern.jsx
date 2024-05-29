import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect} from 'react';
import '../Internships/Intern.css'
import InternShipData from '../Data/InternshipDatAvl'

function Intern() {
  const [serachCategory,setSearchCategory]=useState("");
  const [searchLoaction,setSearchLocation]=useState("")
  const [filterInternship,setFilterInternship]=useState([])
  const [isDivVisible,setDivVisible]=useState(false)
  // const [internOpening, setInternOprning] = useState([])
  // const [InternData,setInternData]=useState([])



  const showDiv = ()=>{
    setDivVisible(true)
  }
  const hideDiv = ()=>{
    setDivVisible(false)
  }
  const handleCategoryChange=(e)=>{
    const categeoryValue=e.target.value;
    setSearchCategory(categeoryValue);
    setFilterInternship([categeoryValue,searchLoaction])
  }
  const handleCategoryLocationChange=(e)=>{
    const loactionValue=e.target.value;
    setSearchLocation(loactionValue);
    setFilterInternship([serachCategory,loactionValue])
  }

  const filterInterships = (category, location) => {
    // if (InternData && InternData.length > 0) {
    
        const filterData = InternShipData.filter(
          (internship) =>
            internship.category.toLowerCase().includes(category.toLowerCase()) &&
            internship.location.toLowerCase().includes(location.toLowerCase())
        );
        setFilterInternship(filterData);
        console.log(setFilterInternship.length)
      
    // }
  };
  useEffect(() => {
    filterInterships(serachCategory, searchLoaction);
  }, []);
console.log(filterInternship)

  
 
  return (
    <>
      < div className='flex internship-filter'>
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
            <p className='p-1'>Minimum Monthly Stipend</p>
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
          <p className='filterico text-center' onClick={showDiv}>filter <i className="bi bi-funnel  text-blue-400"></i>   </p>

        </div>
        <p className='head font-bold text-lg text-center '  >{filterInterships.length} total internships</p>

      </div>
    </div>
    </>  
    
    
    
  )
}

export default Intern