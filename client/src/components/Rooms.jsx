import React from 'react'
import { Room } from './Room'

export const Rooms = ({rooms}) => {
  return (
    <div className='grid grid-cols-3 gap-2'>
        {
          rooms.map((room) =>(
            <Room key={room._id} room={room}/>
          ))
        }
    </div>
  )
}
