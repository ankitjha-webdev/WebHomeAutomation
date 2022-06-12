import React from 'react'
import { useState } from "react";
import light from '../images/light.png'
import { Ac } from './Ac';
import { Fan } from './Fan';
import { Temperatures } from './Temperatures';
export const Light = () => {
    const [toggle, setToggle] = useState(true);
    const toggleClass = " transform translate-x-5";
    return (
        <div className='mb-auto h-screen'>
            <div className="flex mx-auto max-w-7xl space-x-4 justify-center ">
                <div className=" p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <div className=" flex md:justify-between mt-2 w-auto">
                    <img
                        className=" w-20 h-20 object-cover "
                        src={light}
                    />
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 object-cover " viewBox="0 0 20 20" fill="currentColor">
  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
</svg> */}
                </div>
                    <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
                        Lights
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
                <Fan/>
                <Ac/>
                <Temperatures/>
            </div>

         

        </div>
    )
}
