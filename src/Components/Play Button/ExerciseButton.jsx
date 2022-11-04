import React from 'react'
import '../../styles/ExerciseButton.css'
import Stopwatch from '../Timer/Stopwatch'
import Wheel from '../Progress Wheel/Wheel'

function ExerciseButton(props) {
    return (
        <>
            <Wheel time={props.time} />
        </>
    )
}

export default ExerciseButton