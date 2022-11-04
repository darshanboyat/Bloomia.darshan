import React from 'react'
import logo from '../../assets/Logo v1.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../../styles/Login.css'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { useState } from 'react';

function Registration() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [registerationStatus, setRegisterationStatus] = useState(false)

    const onSubmit = data => {
        const value = {
            ...data,
            contact: 9691174714
        }
        
      
        axios.post('https://bloomia.herokuapp.com/users/signup', value, 
        {headers: {
            'Content-Type': 'application/json'
        },} )
        .then((res) => res.json())
        .then(response => console.log('postdata: ', response));

        document.querySelector('#form').reset()

        setRegisterationStatus(true)
    }

    return (
        <>
            <div className="d-flex" style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Link to='/'>
                    <img src={logo} alt="" width='200px' style={{ marginTop: 73 }} />
                </Link>
                <h2 className='login-label' style={{ color: 'black' }}>Welcome Back to Bloomia</h2>
                <p style={{ color: 'gray', fontSize: 14, fontWeight: '500' }}>Please enter your address and password to login</p>
                {registerationStatus && <h6 style={{color: 'green', fontSize: 10, fontWeight: 'bold'}}>Registration successful!, Check your email to verify your account</h6>}

                <Form id="form" onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className='ml-0' style={{ marginLeft: 0 }}>
                        <Form.Group className="mt-2 mb-1 d-flex" controlId="formBasicEmail">
                            <Form.Control className='input-field' required type="text" placeholder="Firstname" {...register("first_name", { required: true, maxLength: 50 })} style={{ padding: '6px 12px', border: 'none', backgroundColor: '#EBEBEB', borderRadius: '.5rem 0% 0% .5rem', height: 33.4 }} />
                            <span>
                                <i className="bi bi-person" style={{ color: 'black', backgroundColor: '#EBEBEB', paddingTop: 7, paddingRight: 4, borderRadius: '0rem .5rem .5rem 0rem', fontSize: 20 }} />
                            </span>
                        </Form.Group>
                        {errors.first_name && <p style={{ color: '#dc3545', fontSize: 10, fontWeight: '500' }}>First name is required</p>}

                        <Form.Group className="mb-1 d-flex" controlId="formBasicPassword">
                            <Form.Control className='input-field' required type="text" placeholder="Lastname"  {...register("last_name", { required: true, maxLength: 50 })} style={{ padding: '6px 12px', border: 'none', backgroundColor: '#EBEBEB', borderRadius: '.5rem 0% 0% .5rem', height: 33.4 }} />
                            <span>
                                <i className="bi bi-person" style={{ color: 'black', backgroundColor: '#EBEBEB', paddingTop: 7, paddingRight: 2, borderRadius: '0rem .5rem .5rem 0rem', fontSize: 20 }} />
                            </span>
                        </Form.Group>
                        {errors.last_name && <p style={{ color: '#dc3545', fontSize: 10, fontWeight: '500' }}>Last name is required</p>}


                        <Form.Group className="mb-1 d-flex" controlId="formBasicPassword">
                            <Form.Control className='input-field' type="email" placeholder="Enter your email address"  {...register("email", { required: true, maxLength: 50 })} style={{ padding: '6px 12px', border: 'none', backgroundColor: '#EBEBEB', borderRadius: '.5rem 0% 0% .5rem', height: 33.4 }} />
                            <span>
                                <i className="bi bi-envelope" style={{ color: 'black', backgroundColor: '#EBEBEB', paddingTop: 7.5, paddingRight: 2, borderRadius: '0rem .5rem .5rem 0rem', fontSize: 20 }} />
                            </span>
                        </Form.Group>
                        {errors.email && <p style={{ color: '#dc3545', fontSize: 10, fontWeight: '500' }}>Email is required</p>}

                        <Form.Group className="mb-1 d-flex" controlId="formBasicPassword">
                            <Form.Control className='input-field' type="password"  {...register("password", { required: true, minLength: 8, maxLength: 32 })} placeholder="Enter your password" style={{ padding: '6px 12px', border: 'none', backgroundColor: '#EBEBEB', borderRadius: '.5rem 0% 0% .5rem', height: 33.4 }} />
                            <span>
                                <i className="bi bi-lock-fill" style={{ color: 'black', backgroundColor: '#EBEBEB', paddingTop: 7.5, paddingRight: 2, borderRadius: '0rem .5rem .5rem 0rem', fontSize: 20 }} />
                            </span>
                        </Form.Group>
                        {errors.password && <p style={{ color: '#dc3545', fontSize: 10, fontWeight: '500' }}>Password is required</p>}

                        <div className="d-grid gap-1 mt-4 p-0" style={{ textAlign: 'center' }}>
                            <button type='submit' style={{ backgroundColor: '#2f45c5', border: 'none', color: 'white', fontSize: 16, padding: '8px 20px', borderRadius: 8 }}>Register</button>
                            <p className='mt-4' style={{ fontSize: 15, fontWeight: 600, color: 'gray' }}>Or sign in with</p>
                        </div>
                        <div className="d-flex" style={{ justifyContent: 'center' }}>
                            <Button variant="outline-dark" style={{ width: 200, padding: '2% 0%', fontSize: 15 }}>
                                <i className='bi bi-google' />
                                &nbsp; Sign in with google
                            </Button>
                        </div>
                        <div className="sign-i mt-4 d-flex" style={{ color: 'black', fontSize: 15, fontWeight: 600, justifyContent: 'center', width: 400, paddingLeft: 0, paddingTop: 0, color: 'gray' }}>
                            Already have an account? &nbsp; <Link to='/auth/login' style={{ color: 'black', textDecoration: 'none', fontSize: 16 }}>Sign In</Link>
                        </div>
                    </Form.Group>
                </Form>

            </div>
        </>
    )
}

export default Registration