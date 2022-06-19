import React from 'react'
import { Link } from 'react-router-dom'
import { Rooms } from '../components/Rooms'
import StatusComp from '../components/StatusComp'
const RoomPage = () => {
    return (
        <div className='mb-auto h-screen'>
            {/* hero */}
            <div className='container px-6 py-16 mx-auto border-b-sky-500 mb-12 ' >
                <div className="items-center lg:flex mx-w-7x1 mx-20">
                    <div className="w-full lg:w-1/2">
                        <div className="lg:max-w-lg">
                            {/* <button className=" w-full border-4 border-gray-100 px-6 py-4 skew-x-4 skew-y-1 mt-6 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-[#3ca2db] shadow-lg rounded-md lg:w-auto hover:bg-blue-400 focus:outline-none focus:bg-blue-500"> 
                            <Link to="/register"> Create a Room!</Link>
                        </button> */}
                            <h1 className="text-2xl font-semibold text-gray-800 uppercase  lg:text-3xl">
                                Living Room <span className="text-red-600">❤</span>

                            </h1>
                            <p className="mt-2 text-sky-600 dark:text-gray-400">
                                A room for you to relax and enjoy your life. 
                                From here you can control your room loads
                            </p>
                        </div>

                    </div>
                </div>

            </div>

            {/* show room name in card */}
           <div className='flex mx-auto max-w-7xl'>
           <StatusComp />
            <StatusComp />
            <StatusComp />
            <StatusComp />
           </div>
        </div>
    )
}

export default RoomPage