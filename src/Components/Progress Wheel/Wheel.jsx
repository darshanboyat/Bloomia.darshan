import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import '../../styles/ExerciseButton.css'
import Stopwatch from '../Timer/Stopwatch'
import Box from '@mui/material/Box';

var time = 3;
let proceed = false

function CircularProgressWithLabel(props) {
    const [state, setState] = React.useState(false)

    const exerciseToggle = () => {
        const play = document.querySelector('#play')
        const pause = document.querySelector('#pause')

        if (play.style.display === 'block') {
            play.style.display = 'none'
            pause.style.display = 'block'
            proceed = true
            setState(true)
        }
        else {
            play.style.display = 'block'
            pause.style.display = 'none'
            proceed = false
            setState(false)
        }
    }

    return (
        <Box style={{position: 'fixed', left: 400, top: 150}}>
            <Box sx={{ position: 'relative', zIndex: 99999, display: 'inline-flex', justifyContent: 'center', alignItem: 'center', marginLeft: '-35%', marginTop: 10, }}>
                <CircularProgress variant="determinate" {...props} size={300} sx={{ color: '#FD7279' }} />
                <Box
                    sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    >
                    <button className="play-button" onClick={exerciseToggle}>
                        {state && <Stopwatch className='stop-watch' time={props.time} />}
                        <i className="bi bi-play-fill" id='play' style={{ display: 'block' }}/>
                        <i className="bi bi-pause-fill" id='pause' style={{ display: 'none' }}/>
                    </button>
                </Box>
            </Box>
        </Box>
    );
}

CircularProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate variant.
     * Value between 0 and 100.
     * @default 0
     */
    value: PropTypes.number.isRequired,
};

export default function CircularStatic(props) {
    const [progress, setProgress] = React.useState(10);
    const [time, setTime] = React.useState(props.time)
    
    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) =>
                prevProgress >= 100 ? 0 : prevProgress + (100 / time)
            );
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return proceed ? <CircularProgressWithLabel time={props.time} value={progress} sx={{ width: 600 }} /> : <CircularProgressWithLabel time={props.time} value={100} sx={{ width: 600 }} />;
}
