import React from 'react';
import 'antd/dist/antd.css';
import '../../styles/ExerciseCard.css';
import { Select } from 'antd';
import { createTheme } from 'react-dark-theme'
import Switch from '../Switch/Switch'
import { useState } from 'react';
import ExerciseButton from '../Play Button/ExerciseButton';


const ExerciseCard = () => {

    const [shareToTimer, setShareToTimer] = useState(3)
    const handleSqueezeChange = (value) => {
        console.log(`${value}`);
        setShareToTimer(value)
    };
    const handleRestChange = (value) => {
        console.log(`${value}`);
        setShareToTimer(value)
    };
    const handleRepsChange = (value) => {
        console.log(`${value}`);
        setShareToTimer(value)
    };

    var squeezeSecond = Array.from(Array(61).keys())
    var squeezeArray = [];

    squeezeSecond.map(item => {
        squeezeArray.push({ value: item, label: item })
    })

    const darkTheme = {
        background: '#1b1b3a',
        text: 'white',
        icons: 'black',
        guideBackground: '#29294d',
        cardBackground: '#29294D'
    }
    const lightTheme = {
        background: 'white',
        text: 'black',
        icons: 'black',
        guideBackground: 'white',
        cardBackground: '#EBEBFC'
    }

    const myTheme = createTheme(lightTheme, darkTheme)

    const [toggleSwitch, setToggleSwitch] = useState(false)
    return (
        <>
            <ExerciseButton time={shareToTimer} />
            <div className="squeeze-card" style={{ backgroundColor: myTheme.cardBackground, marginTop: '0%'}}>
                <div className="inner-card" style={{ backgroundColor: myTheme.cardBackground }}>
                    <label style={{ color: myTheme.text }} htmlFor="selector">Long Squeeze</label>
                    <div className="d-flex form-wrapper">
                        <div className="container">
                            <Select
                                defaultValue="3"
                                style={{
                                    width: 120,
                                }}
                                onChange={handleSqueezeChange}
                                options={[...squeezeArray]}
                            />
                            <h6 className='selector-label' style={{ color: myTheme.text }}>Squeeze Seconds</h6>
                        </div>
                        <div className="container">
                            <Select
                                defaultValue="3"
                                style={{
                                    width: 120,
                                }}
                                onChange={handleRestChange}
                                options={[...squeezeArray]}
                            />
                            <h6 className='selector-label' style={{ color: myTheme.text }}>Rest Seconds</h6>
                        </div>
                        <div className="container">
                            <Select
                                defaultValue="5"
                                style={{
                                    width: 120,
                                }}
                                onChange={handleRepsChange}
                                options={[...squeezeArray]}
                            />
                            <h6 className='selector-label' style={{ color: myTheme.text }}>Reps</h6>
                        </div>
                    </div>


                    <label style={{ color: myTheme.text }} htmlFor="selector">Short Squeeze</label>
                    <div className="d-flex form-wrapper">
                        <div className="container">
                            <Select
                                defaultValue="1"
                                style={{
                                    width: 120,

                                }}
                                onChange={handleSqueezeChange}
                                options={[...squeezeArray]}
                            />
                            <h6 className='selector-label' style={{ color: myTheme.text }}>Squeeze Seconds</h6>
                        </div>
                        <div className="container">
                            <Select
                                defaultValue="1"
                                style={{
                                    width: 120,

                                }}
                                onChange={handleRestChange}
                                options={[...squeezeArray]}
                            />
                            <h6 className='selector-label' style={{ color: myTheme.text }}>Rest Seconds</h6>
                        </div>
                        <div className="container">
                            <Select
                                className='selector'
                                defaultValue="5"
                                style={{
                                    width: 120,

                                }}
                                onChange={handleRepsChange}
                                options={[...squeezeArray]}
                            />
                            <h6 className='selector-label' style={{ color: myTheme.text }}>Reps</h6>
                        </div>
                    </div>


                    <div className="d-flex reverse-kegel-exercise mt-4 mb-2">
                        {!toggleSwitch ? <label style={{ color: "gray" }} htmlFor="selector">
                            Reverse Kegel Exercise
                            <i className="bi bi-question-circle p-2" style={{ fontWeight: 'bold', color: myTheme.icons }} />
                        </label> :
                            <label style={{ color: myTheme.text }} htmlFor="selector">
                                Reverse Kegel Exercise
                                <i className="bi bi-question-circle p-2" style={{ fontWeight: 'bold', color: myTheme.icons }} />
                            </label>}
                        <Switch setToggleSwitch={setToggleSwitch} />
                    </div>
                    <div className="d-flex form-wrapper">
                        <div className="container">
                            <Select disabled={!toggleSwitch}
                                defaultValue="9"
                                style={{
                                    width: 120,

                                }}
                                onChange={handleSqueezeChange}
                                options={[...squeezeArray]}
                            />
                            {!toggleSwitch ? <h6 className='selector-label' style={{ color: 'gray' }}>Squeeze Seconds</h6> : <h6 className='selector-label' style={{ color: myTheme.text }}>Squeeze Seconds</h6>}
                        </div>
                        <div className="container">
                            <Select disabled={!toggleSwitch}
                                defaultValue="4"
                                style={{
                                    width: 120,

                                }}
                                onChange={handleRestChange}
                                options={[...squeezeArray]}
                            />
                            {!toggleSwitch ? <h6 className='selector-label' style={{ color: 'gray' }}>Rest Seconds</h6> : <h6 className='selector-label' style={{ color: myTheme.text }}>Rest Seconds</h6>}
                        </div>
                        <div className="container">
                            <Select disabled={!toggleSwitch}
                                defaultValue="5"
                                style={{
                                    width: 120,

                                }}
                                onChange={handleRepsChange}
                                options={[...squeezeArray]}
                            />
                            {!toggleSwitch ? <h6 className='selector-label' style={{ color: 'gray' }}>Reps</h6> : <h6 className='selector-label' style={{ color: myTheme.text }}>Reps</h6>}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
};
export default ExerciseCard;