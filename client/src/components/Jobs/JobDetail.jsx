import React from 'react'
import Jobs from '../Data/JobDataAvl'
import './Job.css'
function JobDetail() {
  return (
    <div>
      <div className="details-app">
        {
          Jobs.map((data,index)=>(
            <>
              <h1 className='font-bold text-3xl text-center'>{data.title}</h1>
              <div className="m-14 shadow-sm rounded-md border">
              <p className='mb-4 mt-3' id='boxer'> <i className='bi bi-arrow-up-right text-blue-500' ></i> Actively Hiring</p>
          
              </div>
            </>
          ))
        }
      </div>
    </div>
  )
}

export default JobDetail