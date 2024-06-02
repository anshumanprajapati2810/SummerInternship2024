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
              <div className="main-info align-baseline mr-96 mt-7">
                <p className='text-xl font-bold mt-4'> {data.title}</p>
                <p className='text-sm text-slate-300 font-bold'>{data.title}</p>
                <p> <i className="bi bi-geo-alt-fill"></i> {data.location}</p>
              </div>
              <div className="flex tedxt-sm justify-between">
                <p className='mt-3 text-slate-400'> <i className="bi bi-play-circle-fill"></i>   Start Date  <br />  {data.StartDate}</p>


                <p className='mt-3 text-slate-400' > <i className="bi bi-calendar-check-fill"></i>  Experience  <br />
                {data.Experience}</p>

                <p className='mt-3 text-slate-400'>  <i className="bi bi-cash"></i>   Salary <br /> {data.CTC}</p>
              </div>
              <div className="flex">
                <p className='bg-green-100 rounded-md ml-4 text-green-300'> <i className="bi bi-clock"></i> 12/12/2012</p>
              </div>
              <hr />
              <div className="aboutCompany flex justify-start">
                <p className='mt-3 text-xl font-bold text-start'> About {data.company}</p>
                <br />
              </div>
              <div className="flex">

                <p className='text-blue-500'> instagram page  <i className='bi bi-arrow-up-right-square'></i></p>

              </div>
              <p className='mt-4'> {data.aboutCompany}</p>
              <div className="about-Job">
          <p className='mt-3 text-xl font-bold text-start'> about Job</p>
          <p>{data.aboutJob}</p>
          </div>
          <p className='text-blue-500 justify-start'> Learn Business Communication</p>

          <div className="whocan">
          <p className='mt-3 text-xl font-bold text-start'>Who can apply</p>
          <p>{data.Whocanapply}</p>
          </div>

          <p className='mt-3 text-xl font-bold text-start'>Perks</p>
          <p>{data.perks}</p>
          
          <p className='mt-3 text-xl font-bold text-start'> Additional information</p>
          <p>{data.AdditionalInfo}</p>

          <p className='mt-3 text-xl font-bold text-start'> Number of opening</p>
          <p className='text-start'>{data.numberOfopning}</p>
          <div className='flex justify-center mt-6 bg-blue-500 w-40 text-center text-white font-bold '>
          <button className='flex justify-center align-middle'>Apply</button>

          </div>

              </div>
            </>
          ))
        }
      </div>


    </div>  //returned div last one
  )
}

export default JobDetail