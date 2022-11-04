import React, { useState } from 'react'
import logo from '../../assets/Logo v1.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../../styles/Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';


function Login({ setLogin }) {

    var { register, handleSubmit, formState: { errors } } = useForm();
    const [loginData, setLoginData] = useState({})
    const [loginError, setLoginError] = useState(false)
    const navigate = useNavigate()

    const onSubmit = async (data) => {

        await axios.post('https://bloomia.herokuapp.com/users/login', data,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(response => {
                if(response.data.token != undefined){
                    setLoginData(response);
                    console.log('postdata: ', response.data.message)
                    localStorage.setItem('token', response.data.token);
                    setLogin(false)
                    navigate('/')
                }
                else{
                    setLoginError(true)
                    // window.location.reload()
                }
            });
        document.querySelector('#form').reset()
    }


    return (
        <>
            <div className="d-flex" style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Link to='/'>
                    <img src={logo} alt="" width='200px' style={{ marginTop: 73 }} />
                </Link>
                <h2 className='login-label' style={{ color: 'black' }}>Welcome Back to Bloomia</h2>
                <p style={{ color: 'gray', fontSize: 14, fontWeight: 'bold' }}>Please enter your address and password to login</p>
                {loginError && <h6 style={{color: 'red', fontSize: 10, fontWeight: 'bold'}}>Email id or password isn't valid</h6>}
                

                <Form id="form" onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mt-2 mb-3 d-flex" controlId="formBasicEmail">
                        <Form.Control className='input-field' type="email" placeholder="Enter your email address" {...register("email", { required: true, maxLength: 80 })} style={{ width: 442, border: 'none', backgroundColor: '#EBEBEB ', borderRadius: '.5rem 0% 0% .5rem', height: 35.5 }} />
                        <span style={{ height: 40 }}>
                            <i className="bi bi-envelope" style={{ color: 'black', backgroundColor: '#EBEBEB', paddingTop: 1.5, paddingRight: 2, borderRadius: '0rem .5rem .5rem 0rem', height: 80 }} />
                        </span>
                    </Form.Group>
                    {errors.email && <p style={{ color: 'red', fontSize: 10, fontWeight: 'bold' }}>Email is required</p>}

                    <Form.Group className="mb-3 d-flex" controlId="formBasicPassword">
                        <Form.Control className='input-field' type="password" placeholder="Enter your password" {...register("password", { required: true, minLength: 8, maxLength: 32 })} style={{ width: 442, border: 'none', backgroundColor: '#EBEBEB', borderRadius: '.5rem 0% 0% .5rem', height: 35.5 }} />
                        <span>
                            <i className="bi bi-lock-fill" style={{ color: 'black', backgroundColor: '#EBEBEB', paddingTop: 1.5, paddingRight: 2, borderRadius: '0rem .5rem .5rem 0rem' }} />
                        </span>
                    </Form.Group>
                    {errors.password && <p style={{ color: 'red', fontSize: 10, fontWeight: 'bold' }}>Password is required</p>}
                    <Link className="d-flex" style={{ fontSize: 15, textDecoration: 'none', fontWeight: 'bold', color: 'gray', textAlign: 'center', justifyContent: 'end', width: 460 }}>
                        Forget Your password?
                    </Link>
                    <div className="d-grid gap-1 mt-4" style={{ textAlign: 'center' }}>
                        <button type='submit' style={{ backgroundColor: '#2f45c5', border: 'none', color: 'white', fontSize: 16, padding: '8px 20px', borderRadius: 8 }}>Sign in</button>
                        <p className='mt-4' style={{ fontSize: 15, fontWeight: 600, color: 'gray' }}>Or sign in with</p>
                    </div>
                    <div className="d-flex" style={{ justifyContent: 'center' }}>
                        <Button variant="outline-dark" style={{ width: 250, padding: '3% 0%' }}>
                            <i className='bi bi-google' />
                            &nbsp; Sign in with google
                        </Button>
                    </div>
                    <div className="sign-i mt-4 d-flex" style={{ color: 'black', fontSize: 15, fontWeight: 600, justifyContent: 'center', width: 400, paddingLeft: 80, paddingTop: 100 }}>
                        Don't have an account? &nbsp; <Link to='/auth/signup' style={{ color: 'black', textDecoration: 'none', fontSize: 16 }}>Sign Up</Link>
                    </div>
                </Form>

            </div>
        </>
    )
}

export default Login