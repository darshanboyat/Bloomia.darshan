import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createTheme } from 'react-dark-theme'

import '../../styles/Navbar.css'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Login from '../Accounts Button/Accounts'

function Navbar() {

    const darkTheme = {
        background: '#1b1b3a',
        text: 'white'
    }
    const lightTheme = {
        background: 'white',
        text: 'black'
    }

    const navigate = useNavigate()
    const logout = () => {
        setLogin(false)
        localStorage.removeItem('token');
        navigate('/')
        window.location.reload()
    }

    const myTheme = createTheme(lightTheme, darkTheme)
    const [data, setData] = useState({})
    const [login, setLogin] = useState(true)

    useEffect(() => {
        const token = "Bearer " + localStorage.getItem('token')

        return () => {
            axios.get('https://bloomia.herokuapp.com/users/getUser', { headers: { 'Authorization': token } }).then(res => {
                setData(res.data.data)
                (res.sucess && setLogin(true))

                console.log('Login Status is :- ', login)
            })
        }
    }, [login])

    return (
        <>
            {data.first_name === undefined ? <Login /> :

                <div className='d-flex Navbar-container'>
                    <div className="greet" style={{ color: myTheme.text }}>
                        <p className="greet" style={{ color: myTheme.text }}>Welcome,</p>
                        <h5 className="greet" style={{ color: myTheme.text }}>{data.first_name + " " + data.last_name}</h5>
                    </div>
                    <ol className="d-flex justify-content-center nav-item dropdown" style={{ color: myTheme.text }}>
                        <a
                            className="d-flex nav-link dropdown-toggle"
                            href="#h"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <div className="avatar-container">
                                <i className='bi bi-person-circle' />
                            </div>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link className="dropdown-item" to="/profile">
                                    <i className='bi bi-person' />
                                    <small>Profile</small>
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/" onClick={logout}>
                                    <i className='bi bi-box-arrow-right' />
                                    <small>Logout</small>
                                </Link>
                            </li>
                        </ul>
                    </ol>

                </div>
                }
        </>
    )
}

export default Navbar