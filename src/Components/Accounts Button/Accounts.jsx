import React from 'react'
import Login from './Login'
import Register from './Register'

function Accounts() {
  return (
    <div className='d-flex' style={{marginLeft: '80rem', width: 10, marginTop: 35}}>
        <Login/>
        <Register/>
    </div>
  )
}

export default Accounts