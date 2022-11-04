import React from 'react'
import DarkTheme from '../../assets/Dark Mode.mp4'
import LightTheme from '../../assets/Light Mode.mp4'
import DarkLogo from '../Logo/DarkLogo'
import LightLogo from '../Logo/LightLogo'
import {createTheme} from 'react-dark-theme'

import '../../styles/Theme.css'

function Theme() {

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
        <>    
            {myTheme.text == "black" ?        
            <div className='themeContainer'>
                <LightLogo/>
                <video autoPlay loop muted id="myVideoDark">
                    <source src={LightTheme} type="video/mp4" />
                </video>
            </div>
            :
            <div className='themeContainer'>
                <DarkLogo/>
                <video autoPlay loop muted id="myVideoDark">
                    <source src={DarkTheme} type="video/mp4" />
                </video>
            </div>
            }
        </>
    )
}

export default Theme