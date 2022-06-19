import React from 'react'
import { Card } from "../components/Card"
import { Link } from 'react-router-dom'
import RoomPage from './RoomPage'
import { Rooms } from '../components/Rooms'
import Status from '../components/StatusComp'
import Modal from '../components/Model'
export const Home = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div>
      <div className="text-red-600 mx-auto max-w-7xl">
        <header className="bg-white">
          <div className="container px-6 py-16 mx-auto">
            <div className="items-center lg:flex">
              <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                  <h1 className="text-3xl font-bold leading-tight text-gray-900">
                    <span className="text-2xl font-bold leading-tight text-gray-900">
                      Welcome to the
                    </span>
                    <span className="text-5xl font-bold leading-tight text-gray-900">
                      <span className="text-red-600">
                        <span className="text-2xl font-bold  leading-tight text-[#3ca2db] mx-3 ">
                          Smart</span>
                        <span className="text-2xl font-bold leading-tight text-[#3ca2db] ">
                          Home</span>
                          🏡
                      </span>
                    </span>
                  </h1>
                  <p className="text-gray-600 text-lg">
                    The best way to manage your home.
                    and the best way to manage your home.
                    and the best way to manage your home.
                    and the best way to manage your home.
                  </p>
                  {/* <button className="  w-full border-4 border-gray-100 px-6 py-4 skew-x-4 skew-y-1 mt-6 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-[#3ca2db] shadow-lg rounded-md lg:w-auto hover:bg-blue-400 focus:outline-none focus:bg-blue-500">
                    <Link to="/register"> Create a Room!</Link>
                    Create a Room!
                  </button> */}
                  <Modal/>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      {/* <Link to="/home/light">
       <Card />
      </Link> */}
      <Rooms />
    </div>
  )
}
