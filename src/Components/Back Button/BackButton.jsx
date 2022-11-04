import React from 'react'
import {Link} from 'react-router-dom'
function BackButton() {
  return (
    <Link to='/' style={{position: 'absolute', top: 20, left: '70%', textAlign: 'center'}}>
        <i className='bi bi-arrow-left' style={{ fontSize: 20, backgroundColor: '#EBEBFC', color: 'black',borderRadius: '2rem', width: 30, height: 35, paddingLeft: 5, paddingRight: 5}}/>
    </Link>
  )
}

export default BackButton