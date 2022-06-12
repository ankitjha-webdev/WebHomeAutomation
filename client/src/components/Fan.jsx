import React from 'react'
import fan from '../images/fan.png'
import { useState } from "react";
export const Fan = () => {
    const [toggle, setToggle] = useState(true);
    const toggleClass = " transform translate-x-5";
    return (
        <div>
            <div className="flex mx-auto max-w-7xl">
                <div className=" p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <div className=" flex md:justify-between mt-2 w-auto">
             <img src={fan} className='w-20 h-20 object-cover' alt="" srcset="" />
        
                </div>
                    <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
                        Fan
                    </h5>
                    <div className="flex  ">
                {/*   Switch Container */}

                <div
                    className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-sky-400 rounded-full p-1 cursor-pointer"
                    onClick={() => {
                        setToggle(!toggle);
                    }}
                >
                    {/* Switch */}
                    <div
                        className={
                            "bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
                            (toggle ? null : toggleClass)
                        }
                    ></div>
                </div>

            </div>
                
                </div>
            </div>

         

        </div>
    )
}
