import React from 'react'
import { Link } from 'react-router-dom'
import dots from '../images/icons8-dot-32.png'
import edit from '../images/icons8-edit-30.png'
import deleteIcon from '../images/icons8-trash.gif'
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
    IconButton,
  } from "@material-tailwind/react";

export const Room = ({ room }) => {
    return (
        <div className=''>
            <section className=" mx-5 my-20 ">
                <div key={room._id}>
                    <div className="transition ease-in-out  delay-150 hover:-translate-y-1 hover:scale-110  duration-300  rounded-lg shadow-lg hover:shadow-2xl bg-white  text-center">
                        <div className="py-3 px-6 border-b border-gray-300 text-sky-500">
                            <Link to={`/room/${room._id}`}>  Room id: <span className='text-sky-300'>{room._id}</span> </Link>
                            <div className='float-right cursor-pointer'>
                                <Menu className="w-8">
                                    <MenuHandler>
                                        <img width="20px" src={dots} alt="dots" />
                                    </MenuHandler>
                                    <MenuList>
                                        <MenuItem className='w-12 mx-auto'>  <img src={edit} alt="edit" width={30} />  </MenuItem>
                                        <MenuItem className='w-12 mx-auto'>  <img src={deleteIcon} alt="deleteIcon" width={30}/>  </MenuItem>
                                    </MenuList>
                                </Menu>
                            </div>
                        </div>
                        <div className="p-6">

                            <h5 className="text-gray-900 text-xl font-medium mb-2"> {room.name} </h5>
                            <p className="text-gray-700 text-base mb-4">
                                {room.description}
                            </p>
                            <Link to={`/room/${room._id}`}>
                                <button type="button" className=" inline-block px-6 py-2.5 bg-[#3ca2db] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#11a8ff] hover:shadow-lg focus:bg-[#3ca2db] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#3a5f75] active:shadow-lg transition duration-150 ease-in-out">Enter</button>
                            </Link>
                        </div>

                        <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
                            {/* 2 days ago */}
                            {/* {room.createdAt.split('T')[0]} */}
                            {new Date(room.createdAt).toString().split(' ').slice(0, 4).join(' ')}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
