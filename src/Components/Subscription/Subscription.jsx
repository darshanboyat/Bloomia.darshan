import React from 'react'
import {createTheme} from 'react-dark-theme'

import '../../styles/Subscription.css'

function Subscription() {

    const darkTheme = {
        background: '#1b1b3a',
        text: 'white'
    }
    const lightTheme = {
      background: 'white',
      text: 'black'
    }

  
    const myTheme = createTheme(lightTheme, darkTheme)

    return (
        <div className='Subscription-container'>
            <div className="d-flex Subscription-label" style={{color: myTheme.text}}>
                <h5 style={{ fontSize: 15, color: myTheme.text}}>Upgrade Your Plan</h5>
            </div>
            <div className="Subscription">
                <h6 style={{color: 'white'}}>Premium Plan</h6>
                <p style={{ fontSize: 13 }}>Bloomia Premium will allow you to:</p>
                <ul style={{ fontSize: 12, textAlign: 'start', paddingLeft: 35 }}>
                    <li>Set workout goals</li>
                    <li>Remember prior workouts</li>
                    <li>See graphs/stats of your workouts</li>
                    <li>Receive email reminders</li>
                </ul>
                <p style={{ fontSize: 13 }}>Being a premium subscriber is a way to help support Bloomia and to commit to your goals!</p>
                <div className="d-flex" style={{fontWeight: 'bold', color: 'white'}}>
                    <h4 style={{color: 'white'}}>$5.00</h4>
                    <h5 style={{paddingTop: 5, color: 'gray'}}>/Month</h5>
                </div>
                <button style={{backgroundColor: 'white', fontSize: 'small', border: 'none', borderRadius: 5, color: 'black'}}>Subscribe</button>
            </div>
            <hr style={{width: 430}}/>
        </div>
    )
}

export default Subscription