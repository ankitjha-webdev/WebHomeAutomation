import React from 'react'
import { useState } from "react";
import ac from '../images/air-conditioner.png'
export const Ac = () => {
    const [toggle, setToggle] = useState(true);
    const toggleClass = " transform translate-x-5";
    return (
        <div>
            <div className="flex mx-auto max-w-7xl">
                <div className=" p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <div className=" flex md:justify-between mt-2 w-auto">
                    <img
                        className=" w-20 h-20 "
                        src={ac}
                    />
    
                </div>
                    <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
                    AC
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
