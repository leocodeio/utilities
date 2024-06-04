import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/login">login</Link>
      <Link to="/signup">Signup</Link>
      home!!!
    </div>
  )
}

export default Home
