import React from 'react'
import {Link} from 'react-router-dom'

function Home (props) {
  return (
    <div className='home-container'>
      <h1>Github Battle: Battle Your Friends</h1>
      <Link className='button' to='/battle'>Battle</Link>
    </div>
  )
}

module.exports = Home
