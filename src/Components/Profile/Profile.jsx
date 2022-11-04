import React from 'react'
import Form from 'react-bootstrap/Form';
import profileAvatar from '../../assets/avatar.jpg'
import DarkTheme, { createTheme } from "react-dark-theme"

import '../../styles/Profile.css'
import axios from 'axios';

function Profile() {
    const trial = 'disabled'
    const [formDetail, setFormDetail] = React.useState({ fname: 'Darshan', lname: 'Boyat', mail: 'forstudypurpose129@gmail.com', phone: '' })

    const editDetails = () => {
        const editBtn = document.querySelector('.edit-btn')
        const pencil = document.querySelector('.pencil')


        if (editBtn.style.display == 'none') {
            editBtn.style.display = 'block'
            pencil.style.display = 'none'
        }
        else {
            editBtn.style.display = 'none'
            pencil.style.display = 'block'
        }

    }

    const [image, setImage] = React.useState([])
    const onImageChange = (file) => {
        setImage([...file.target.file])
    }

    const darkTheme = {
        background: '#1b1b3a',
        text: 'white'
    }
    const lightTheme = {
        background: 'white',
        text: 'black'
    }


    const myTheme = createTheme(lightTheme, darkTheme)
    const [data, setData] = React.useState({})

    React.useEffect(() => {

        const token = "Bearer " + localStorage.getItem('token')

        return () => {
            axios.get('https://bloomia.herokuapp.com/users/getUser', { headers: { 'Authorization': token } }).then(res => setData(res.data.data))

        }
    })


    return (
        <div style={{ position: 'relative', top: 13, left: '69%', color: myTheme.text }}>
            <h6 style={{ color: myTheme.text }}>Avatar</h6>
            <div className="d-flex profile-photo">
                <img src={profileAvatar} alt="" width={100} style={{ borderRadius: '5rem' }} />
                <div className="add-photo" style={{ marginTop: 50 }}>
                    <input type='file' className='custom-file-input' accept='image/*' value={image} onChange={onImageChange} style={{ color: 'transparent' }} />
                </div>
            </div>
            <div className="d-flex profile-label" style={{ color: myTheme.text, justifyContent: 'space-between', width: 400 }}>
                <h6 style={{ color: myTheme.text }}>Personal Information</h6>
                <i className="bi bi-pencil-fill pencil" style={{ color: 'white', backgroundColor: '#2F45C5', fontSize: 10, textAlign: 'center', padding: 5, borderRadius: 100, width: 30 }} onClick={editDetails} />
                <div className="edit-btn" style={{ display: 'none', height: 1 }} onClick={editDetails}>
                    <i className='bi bi-check' style={{ backgroundColor: '#2F45C5', color: 'white', borderRadius: '2rem', fontSize: 25, height: 2, paddingLeft: 4, paddingRight: 4, marginRight: 2 }} />
                    <i className='bi bi-x' style={{ backgroundColor: '#EBEBFC', color: 'black', border: '1px solid blue', borderRadius: '2rem', fontSize: 25, height: 2, paddingLeft: 4, paddingRight: 4 }} />
                </div>
            </div>

            <div className="d-flex form" style={{ justifyContent: 'space-around', width: 400 }}>
                <div className="form-field">
                    <Form.Label htmlFor="inputPassword5" style={{ fontSize: 12, fontWeight: 'bold' }}>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        style={{ fontSize: 13.2, fontWeight: 'bold', width: 180, backgroundColor: '#E2E2E2', border: 'none', height: 30 }} disabled value={data.first_name}
                    />
                </div>
                <div className="form-field">
                    <Form.Label htmlFor="inputPassword5" style={{ fontSize: 12, fontWeight: 'bold' }}>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        style={{ fontSize: 13.2, fontWeight: 'bold', width: 180, backgroundColor: '#E2E2E2', border: 'none', height: 30 }} disabled value={data.last_name}
                    />
                </div>
            </div>
            <div className="d-flex" style={{ flexDirection: 'column', paddingLeft: 10 }}>
                <div className="form-field">
                    <Form.Label htmlFor="inputPassword5" style={{ fontSize: 12, fontWeight: 'bold' }}>Email Address</Form.Label>
                    <Form.Control
                        type="text"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        style={{ fontSize: 13.2, fontWeight: 'bold', width: 180, backgroundColor: '#E2E2E2', border: 'none', height: 30 }} disabled value={data.email}
                    />
                </div>
                <div className="form-field">
                    <Form.Label htmlFor="inputPassword5" style={{ fontSize: 12, fontWeight: 'bold' }}>Phone Number</Form.Label>
                    <Form.Control
                        type="text"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        style={{ width: 180, backgroundColor: '#E2E2E2', border: 'none', height: 30 }} disabled value={data.contact}
                    />
                </div>
            </div>
            <hr />
            <div className="password-form" style={{ paddingLeft: 10, color: myTheme.text }}>
                <div className="d-flex password-label" style={{ color: myTheme.text, justifyContent: 'space-between', width: 400 }}>
                    <h6 style={{ color: myTheme.text }}>Password Settings</h6>
                </div>
                <div className="form-field">
                    <div className="d-flex" style={{ justifyContent: 'space-between', width: 150 }}>
                        <Form.Label htmlFor="inputPassword5" style={{ fontSize: 12, fontWeight: 'bold' }}>Current Password</Form.Label>
                        <i className="bi bi-pencil-fill mb-2" style={{ color: 'white', backgroundColor: '#2F45C5', fontSize: 10, textAlign: 'center', padding: 5, borderRadius: 100, width: 30 }} />
                    </div>
                    <Form.Control
                        type="text"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        style={{ width: 180, backgroundColor: '#E2E2E2', border: 'none', height: 30 }}
                    />
                </div>

            </div>

        </div>
    )
}

export default Profile