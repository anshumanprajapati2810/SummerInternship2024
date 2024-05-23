import React from 'react'
import JobData from '../Data/JobDataAvl.js';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Job() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [selectedCategory,setSelectedCategory]= useState("")
    // const [JobData, setJobData]=useState([])


    const handleSlideJob =(direction)=>{
        const container = document.getElementById("container3");
        const step = 250;
        if(direction === 'left'){
          setCurrentSlide((preveSlide)=>(preveSlide>0 ? preveSlide-1 : 0))
        }
        else{
          setCurrentSlide((preveSlide)=>(preveSlide<3 ? preveSlide+1 : 3))
        }
        sideScrollJob(container, direction, 10, step, 5)
      }
      const filterInternShips=JobData.filter((item)=>
    !selectedCategory ||item.category === selectedCategory
) 

  return (
    <div>
        <div className="infoys">
        <div className="info-intern mt-12">
          <div className="mt-16">
            <h1 className='text-center font-bold text-xl'> Latest Jobs on InternArea</h1>
          </div>
        <div className="categories flex flex-wrap mt-14">
        <p>POPULAR CATEGORIES :</p>
        <span className={`category mr-4 ml-6 ${ selectedCategory==='Big Brands'?'bg-blue-500 text-white':""}`} onClick={()=>setSelectedCategory('Big Brands')}>Big Brands</span>
        <span className={`category mr-4 ml-6 ${selectedCategory==="Work From Home"?'bg-blue-500 text-white':
        ""}`} onClick={()=>setSelectedCategory("Work From Home")}>Work From Home</span>
        <span className={`category mr-4 ml-6 ${selectedCategory==="Part-time"?'bg-blue-500 text-white':
        ""}`} onClick={()=>setSelectedCategory("Part-time")}>Part-time</span>
        <span className={`category mr-4 ml-6 ${selectedCategory==="MBA"?'bg-blue-500 text-white':
        ""}`} onClick={()=>setSelectedCategory("MBA")}>MBA</span>
        <span className={`category mr-4 ml-6 ${selectedCategory==="Engineering"?'bg-blue-500 text-white':
        ""}`} onClick={()=>setSelectedCategory("Engineering")}>Engineering</span>
        <span className={`category mr-4 ml-6 ${selectedCategory==="media"?'bg-blue-500 text-white':
        ""}`} onClick={()=>setSelectedCategory("media")}>Media</span>
        <span className={`category mr-4 ml-6 ${selectedCategory==="Design"?'bg-blue-500 text-white':
        ""}`} onClick={()=>setSelectedCategory("Design")}>Design</span>
        <span className={`category mr-4 ml-6 ${selectedCategory==="Data Science"?'bg-blue-500 text-white':
        ""}`} onClick={()=>setSelectedCategory("Data Science")}>Data Science</span>
            </div>
            </div>
            <div className="internships" id='container3'>
        <div className="internShip-Info flex">
        {
        filterInternShips.map(( data,index)=>(
        
            <div className="int-1 mt-6" key={index}>
        <p className='mb-4 mt-3' id='boxer'> <i className='bi bi-arrow-up-right text-blue-500' ></i> Actively Hiring</p>
        <p>{data.title}</p>
        <small className='text-slate-400 text-sm'>{data.company}</small>

            <hr className='mt-5' />
            <p className='mt-3' ><i className="bi bi-geo-alt-fill"></i> {data.location}  </p>
            <p className='mt-1'> <i className="bi bi-cash-stack"></i> {data.CTC}</p>
            <p className='mt-1'><i className="bi bi-calendar-fill"></i> {data.Experience}</p>
            <div className='more flex justify-between mt-6'>
                <span className='bg-slate-200 text-slate-400 w-20 rounded-sm text-center'>Job</span>
        <Link to={`detailjob?q=${data._id}`}>
        <span className='text-blue-500 mr-2'> 
        View details <i className="bi bi-chevron-right"></i>
        </span></Link>
            </div>
            </div>
            
            
        ))
        }

        </div>
            </div>
        <div className="flex BUttons mt-9">
        <button className='back' onClick={()=>handleSlideJob('left')}> <i className='bi bi-chevron-left' id='sideBack'></i></button>
        <button  className="next" onClick={()=>handleSlideJob('right')}> <i className='bi bi-chevron-right' id='slide'></i></button>
        </div>

    </div>
        </div>
  )
}

export default Job

function sideScrollJob(element, direction, speed, distance, step){
    let scrollAmount = 0;
    const slideTimer = setInterval(function(){
      if(direction === 'left'){
        element.scrollLeft-=step;
      }
      else{
        element.scrollLeft+=step;
      }
      scrollAmount+=step;
      if(scrollAmount>=distance){
        window.clearInterval(slideTimer)
      }
    },speed)
  }