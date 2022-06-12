import React from 'react'
import { Card } from './Card'
import { Link } from 'react-router-dom'
export const Home = () => {
  return (
    <div>
      <Link to="/home/light">
       <Card />
      </Link>
    </div>
  )
}
