import React from 'react'
import { Link } from 'react-router-dom'
import { TbMailbox } from "react-icons/tb";
import { FaBriefcase } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";

function adminPanel() {
  return (
    <div>
        <div className="hidded w-full overflow-hidden rounded-lg border bg-gray-50 shadow-sm lg:block">
            <div className="mx-auto flex max-w-screen-lg items-center gap-8 p-8">
                <div className="grid w-2/3 grid-cols-2 gap-8">
                    <Link to={"/applications"} className='group flex gap-4'>
                        <div className='"flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg transition duration-100 group-hover:bg-indigo-600 group-active:bg-indigo-700 md:h-12 md:w-12"'>
                            <TbMailbox />
                        </div>
                        <div>
                            <div class="mb-1 font-semibold">View Applications</div>
                            <p class="text-sm text-gray-500">View All the Applications That you got from applicants</p>
                        </div>
                    </Link>
                    <Link to={"/postjob"} className='group flex gap-4'>
                        <div className='"flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg transition duration-100 group-hover:bg-indigo-600 group-active:bg-indigo-700 md:h-12 md:w-12"'>
                            <FaBriefcase />
                        </div>
                        <div>
                            <div class="mb-1 font-semibold">Post Job</div>
                            <p class="text-sm text-gray-500">Post Jobs According to Your Requirements</p>
                        </div>
                    </Link>
                    <Link to={"/postinternship"} className='group flex gap-4'>
                        <div className='"flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg transition duration-100 group-hover:bg-indigo-600 group-active:bg-indigo-700 md:h-12 md:w-12"'>
                            <FaLocationArrow />
                        </div>
                        <div>
                            <div class="mb-1 font-semibold">Post InternShips</div>
                            <p class="text-sm text-gray-500">Post InternShip According To Your Requirements</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default adminPanel