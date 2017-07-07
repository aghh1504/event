import React from 'react'
import {Link} from 'react-router'

export default () => {
  return (
    <div>
      <h1 className='welcome_header'>Lets plan your day 😀 </h1>
      <button className='welcome_button'><Link to='/signup'>Create your own plan now</Link></button>
    </div>
  )
}
