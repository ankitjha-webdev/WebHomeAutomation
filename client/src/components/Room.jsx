import React from 'react'
import { Link } from 'react-router-dom'
import living from '../images/living-room.gif'
export const Room = () => {
    return (
        <div className=''>
            <section class="bg-gray-50 pt-20 pb-10 lg:pt-[120px] lg:pb-20">
                <div class="container mx-auto max-w-7xl">
                    <div class="-mx-4 flex flex-wrap">
                        <div class="w-full px-4 md:w-1/2 xl:w-1/3 ">
                            <div class="flex justify-center ">
                                <div class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 block rounded-lg shadow-lg hover:shadow-2xl bg-white max-w-sm text-center">
                                    <div class="py-3 px-6 border-b border-gray-300 text-sky-500">
                                        Room id: <span className='text-sky-300'>62aedb5d6843d0303346b3a7</span>
                                    </div>
                                    <div class="p-6">

                                        <h5 class="text-gray-900 text-xl font-medium mb-2">Living Room</h5>
                                        <p class="text-gray-700 text-base mb-4">
                                            This is Living room. You can control this room by clicking the buttons below.
                                        </p>
                                        <Link to="/home/room">
                                        <button type="button" class=" inline-block px-6 py-2.5 bg-[#3ca2db] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#11a8ff] hover:shadow-lg focus:bg-[#3ca2db] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#3a5f75] active:shadow-lg transition duration-150 ease-in-out">Enter</button>
                                        </Link>
                                    </div>
                                    <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
                                        2 days ago
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full px-4 md:w-1/2 xl:w-1/3">
                            <div class="flex justify-center">
                                <div class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 block rounded-lg shadow-lg hover:shadow-2xl bg-white max-w-sm text-center block rounded-lg shadow-lg bg-white max-w-sm text-center">
                                    <div class="py-3 px-6 border-b border-gray-300 text-sky-500">
                                        Room id: <span className='text-sky-300'>62aedb5d6843d0303346b3a7</span>
                                    </div>
                                    <div class="p-6">

                                        <h5 class="text-gray-900 text-xl font-medium mb-2">Living Room</h5>
                                        <p class="text-gray-700 text-base mb-4">
                                            This is Living room. You can control this room by clicking the buttons below.
                                        </p>
                                        <button type="button" class=" inline-block px-6 py-2.5 bg-[#3ca2db] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#11a8ff] hover:shadow-lg focus:bg-[#3ca2db] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#3a5f75] active:shadow-lg transition duration-150 ease-in-out">Enter</button>
                                    </div>
                                    <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
                                        2 days ago
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full px-4 md:w-1/2 xl:w-1/3">
                            <div class="flex justify-center">
                                <div class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 block rounded-lg shadow-lg hover:shadow-2xl bg-white max-w-sm text-center block rounded-lg shadow-lg bg-white max-w-sm text-center">
                                    <div class="py-3 px-6 border-b border-gray-300 text-sky-500">
                                        Room id: <span className='text-sky-300'>62aedb5d6843d0303346b3a7</span>
                                    </div>
                                    <div class="p-6">

                                        <h5 class="text-gray-900 text-xl font-medium mb-2">Living Room</h5>
                                        <p class="text-gray-700 text-base mb-4">
                                            This is Living room. You can control this room by clicking the buttons below.
                                        </p>
                                        <button type="button" class=" inline-block px-6 py-2.5 bg-[#3ca2db] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#11a8ff] hover:shadow-lg focus:bg-[#3ca2db] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#3a5f75] active:shadow-lg transition duration-150 ease-in-out">Enter</button>
                                    </div>
                                    <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
                                        2 days ago
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
