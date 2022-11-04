import {createTheme} from 'react-dark-theme'
import React from 'react'

function Footer() {

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
        <div className='d-flex' style={{ position: 'relative', marginTop: '0%', marginLeft: '68%', flexWrap: 'wrap', justifyContent: 'space-between', padding: 10, color: myTheme.text}}>
            <div className="links d-flex" style={{flexDirection: 'column'}}>
                <a href="" style={{ color: myTheme.text, fontSize: 'small', fontWeight: 'bold', textUnderlineOffset: 'black', padding: 10}}>
                    Terms and Conditions
                </a>
                <a href=" " style={{ color: myTheme.text, fontSize: 'small', fontWeight: 'bold', textUnderlineOffset: 'black', padding: 10}}>
                    Privacy
                </a>
                <a href="" style={{ color: myTheme.text, fontSize: 'small', fontWeight: 'bold', textUnderlineOffset: 'black', padding: 10}}>
                    Refund and Cancellations
                </a>
            </div>
            <div className="links d-flex" style={{flexDirection: 'column',  color: myTheme.text}}>
                <a href="" style={{ color: myTheme.text, fontSize: 'small', fontWeight: 'bold', textUnderlineOffset: 'black', padding: 10}}>
                    Disclamer
                </a>
                <a href="" style={{ color: myTheme.text, fontSize: 'small', fontWeight: 'bold', textUnderlineOffset: 'black', padding: 10}}>
                    Contact Us
                </a>
            </div>
        </div>
    )
}

export default Footer