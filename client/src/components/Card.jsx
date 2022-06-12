import React from 'react'
import living from '../images/living-room.gif'
import kitchen from '../images/kitchen.gif'
import bedroom from '../images/smart-bedroom.gif'
import bathroom from '../images/bathroom.gif'
import study from '../images/study.gif'
import dining from '../images/dining.png'
export const Card = () => {
    return (
        <div className='container lg:flex-wrap py-24 px-6 mx-auto max-w-7xl lg:flex space-x-8 lg:justify-center	'>
            {/* Living Room */}
            <div className="max-w-md ease-out ease-out transition-shadow py-4 px-8 bg-white shadow-lg rounded-lg my-20">
                <div className=" flex justify-center md:justify-end -mt-16">
                    <img
                        className=" w-full h-3xl object-cover"
                        src={living}
                    />
                </div>
                <div>
                    <h2 className="text-gray-800 items-center  text-3xl justify-between font-semibold">Living Room</h2>
                </div>
                <div className="flex justify-between items-center  mt-4">
                    <a href="#" className="text-xl font-medium text-[#3ca2db] items-center">
                        4 Devices
                    </a>
                </div>
            </div>

            {/* Kitchen Room */}
            <div className="max-w-md ease-out ease-out transition-shadow py-4 px-8 bg-white shadow-lg rounded-lg my-20">
                <div className=" flex justify-center md:justify-end -mt-16">
                    <img
                        className=" w-full h-3xl object-cover"
                        src={kitchen}
                    />
                </div>
                <div>
                    <h2 className="text-gray-800 items-center  text-3xl justify-between font-semibold">Kitchen</h2>
                </div>
                <div className="flex justify-between items-center  mt-4">
                    <a href="#" className="text-xl font-medium text-[#3ca2db] items-center">
                        4 Devices
                    </a>
                </div>
            </div>
            {/* Bedroom */}
            <div className="max-w-md ease-out ease-out transition-shadow py-4 px-8 bg-white shadow-lg rounded-lg my-20">
                <div className=" flex justify-center md:justify-end -mt-16">
                    <img
                        className=" w-full h-3xl object-cover"
                        src={bedroom}
                    />
                </div>
                <div>
                    <h2 className="text-gray-800 items-center  text-3xl justify-between font-semibold">Bedroom</h2>
                </div>
                <div className="flex justify-between items-center  mt-4">
                    <a href="#" className="text-xl font-medium text-[#3ca2db] items-center">
                        4 Devices
                    </a>
                </div>
            </div>

            <div className="max-w-md ease-out ease-out transition-shadow py-4 px-8 bg-white shadow-lg rounded-lg my-20">
                <div className=" flex justify-center md:justify-end -mt-16">
                    <img
                        className=" w-full h-3xl object-cover"
                        src={bathroom}
                    />
                </div>
                <div>
                    <h2 className="text-gray-800 items-center  text-3xl justify-between font-semibold">Bathroom</h2>
                </div>
                <div className="flex justify-between items-center  mt-4">
                    <a href="#" className="text-xl font-medium text-[#3ca2db] items-center">
                        4 Devices
                    </a>
                </div>
            </div>

            <div className="max-w-md ease-out ease-out transition-shadow py-4 px-8 bg-white shadow-lg rounded-lg my-20">
                <div className=" flex justify-center md:justify-end -mt-16">
                    <img
                        className=" w-full h-3xl object-cover"
                        src={study}
                    />
                </div>
                <div>
                    <h2 className="text-gray-800 items-center  text-3xl justify-between font-semibold">Study Room</h2>
                </div>
                <div className="flex justify-between items-center  mt-4">
                    <a href="#" className="text-xl font-medium text-[#3ca2db] items-center">
                        4 Devices
                    </a>
                </div>
            </div>

            <div className="max-w-md ease-out ease-out transition-shadow py-4 px-8 bg-white shadow-lg rounded-lg my-20">
                <div className=" flex justify-center md:justify-end -mt-16">
                    <img
                        className=" w-full object-cover"
                        src={dining}
                      
                    />
                </div>
                <div>
                    <h2 className="text-gray-800 items-center  text-3xl justify-between font-semibold">Dining Room</h2>
                </div>
                <div className="flex justify-between items-center  mt-4">
                    <a href="#" className="text-xl font-medium text-[#3ca2db] items-center">
                        4 Devices
                    </a>
                </div>
            </div>
        </div>
    )
}
