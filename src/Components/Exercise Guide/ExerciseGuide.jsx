import React from 'react'
import {createTheme} from 'react-dark-theme'

import '../../styles/Guide.css'
// bg color code #535372 
function ExerciseGuide(props) {

    const darkTheme = {
        background: '#29294d',
        guideBackground: '#29294d',
        text: 'white'
    }
    const lightTheme = {
      background: 'white',
      guideBackground: 'white',
      text: 'black'
    }

  
    const myTheme = createTheme(lightTheme, darkTheme)

    return (
        <div className='guideContainer' style={{ position: 'fixed', display: props.display, color: myTheme.text, backgroundColor: myTheme.guideBackground }}>
            <div className="d-flex guide fixed" style={{backgroundColor: myTheme.guideBackground, color: myTheme.text}}>
                <h5 style={{color: myTheme.text}}>Guide To Kegel Exercises</h5>
                <i className="bi bi-x-circle" onClick={() => {
                    const guide = document.querySelector('.guideContainer')
                    guide.style.display = 'none'
                }} />
            </div>
            <div className="content">
                <p className='about-kegel-exercise' >Kegel Exercises (also known as pelvic floor exercises) are designed to strengthen your pelvic floor muscles. The pelvic floor muscles are responsible for supporting the uterus, bladder, bowl, and rectum. Strengthening these muscles has positive impact for both men and women. It can help with:</p>
                <ul className='list-kegel-exercise-guide'>
                    <li>Leaking or Dribbling Urine during normal activities (Urine Incontinence).</li>
                    <li>Prevent leaking urine after childbirth.</li>
                    <li>Increase sensitivity during sex and stronger orgasms.</li>
                    <li>Potential to help with Erectile dysfunction.</li>
                </ul>
                <h6 style={{color: myTheme.text}}>How to do Kegel exercises</h6>
                <p>To get started:</p>
                <ul>
                    <li>
                        <b> Find the right muscles.</b> To identify your pelvic floor muscles, stop urination in midstream. Once you've identified your pelvic floor muscles you can do the exercises in any position, although you might find it easiest to do them lying down at first.
                    </li>
                    <li>
                        <b>Perfect your technique.</b> To do Kegels, imagine you are sitting on a marble and tighten your pelvic muscles as if you're lifting the marble. Try it for three seconds at a time, then relax for a count of three.
                    </li>
                    <li>
                        <b>Maintain your focus.</b> For best results, focus on tightening only your pelvic floor muscles. Be careful not to flex the muscles in your abdomen, thighs or buttocks. Avoid holding your breath. Instead, breathe freely during the exercises.
                    </li>
                    <li>
                        <b>Repeat three times a day.</b> Aim for at least three sets of 10 to 15 repetitions a day (both fast and slow).
                    </li>
                </ul>
                <h6 style={{color: myTheme.text}}>
                How to Use Bloomia?
                </h6>
                <p>Bloomia is designed to be easy to use. Kegel exercises typically follow a process like:</p>

                <ul>
                    <li>Squeeze your pelvic floor muscles for X seconds</li>
                    <li>Rest for X seconds</li>
                    <li>Repeat Y number of times</li>
                </ul>
                <p>With Bloomia, we follow the same process but we make sure the exercises contain long squeezes and short squeezes which should help you.</p>
                <h6 style={{color: myTheme.text}}>How to Select a Workout?</h6>
                <p>Bloomia recommends starting with the beginner workout and increasing the repetitions and length as you strengthen your pelvic floor. The most important thing is consistency. Focus on completing your Kegels each day and keeping track of your progress!</p>
                <h6 style={{color: myTheme.text}}>Something is not working as expected</h6>
                <p>Let us know about it by emailing admin@bloomia.com</p>
            </div>
        </div>
    )
}

export default ExerciseGuide