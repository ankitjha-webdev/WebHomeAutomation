import React, { useEffect } from 'react'
import { Rooms } from '../components/Rooms'
import Modal from '../components/Model'
import Axios from 'axios'
export const Dashboard = () => {

  const [rooms, setRooms] = React.useState([])

  // axios call to get all rooms
  useEffect(() => {
    const getRooms = async () => {
      const res = await Axios.get('http://localhost:4000/api/room')
      setRooms(res.data);
      console.log(res.data)
    }
    getRooms();
  }, []);


const deleteRoom = async (id) => {
  await Axios.delete(`http://localhost:4000/api/room/${id}`)
  setRooms(rooms.filter(room => room._id !== id))
  window.location.reload(); 
}



  
if(!rooms.length){
  return <div>Loading...</div>
}
  return (
    <div>
      <div className=" mx-auto max-w-7xl">
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
                      <span className="">
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
                  <Modal />
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className="mx-auto max-w-7xl ">
        <Rooms rooms={rooms} />
      </div>
    </div>
  )
}
