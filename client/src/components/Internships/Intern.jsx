import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect} from 'react';
import '../Internships/Intern.css'

function Intern() {

  
 
  return (
    
      
    <div className='flex internship-filter'>
      <div className="first-int mb-14">
        <div className="filter-section w-1/5">
          <p className='text-center'><i className='bi bi-funnel text-blue-400'></i>Filter</p>
          <div className="fill flex flex-col ml-2">
            <label htmlFor="pro">Profile</label>
            <input type="text" className='profile border-black-2 mr-3' id='pro' placeholder='Profile Manager'  />
            <label htmlFor="loc">Location</label>
            <input type="text" className='profile border-black-2 mr-3' id='loc' placeholder='Ahmedabad'  />
          </div>
          <div className="preferences flex flex-col">
            <div className="flex mt-3 ml-3 mr-3">
              <input type="checkbox" id='whf' name='wfh' className='mr-2 ml-3'/>
              <label htmlFor="wfh">Work From Home</label>  
            </div>
            <div className="flex mt-3 ml-3 mr-3">
              <input type="checkbox" id='whf' name='pt' className='mr-2 ml-3'/>
              <label htmlFor="pt">Part-time</label>  
            </div>
            <p>Desired Minimum Monthly Stipend (૱)</p>
            <input type="range" name='' id='' />
            <p className="mt-2 ml-3 mr-3">0  &nbsp; 2K &nbsp;  4K  &nbsp;  6K  &nbsp;  8K &nbsp;</p>
          </div>
        <p className='mt-5 text-blue-400 text-center'>View More Filters <i className='bi bi-chevron-down'></i></p>
        <span className='justify-end flex text-blue-400 mr-2 mb-2'>Clear All</span>
        </div>

      </div>
  

    </div>
    
    
  )
}

export default Intern