import React, { useState, useRef, useEffect } from 'react'

export default function Stopwatch(props) {
	console.log(props.time)
	const Ref = useRef(null);
	const [timer, setTimer] = useState('0');

	const getTimeRemaining = (e) => {
		const total = Date.parse(e) - Date.parse(new Date());
		const seconds = Math.floor((total / 1000) % 60);
		return {
			total, seconds
		};
	}


	const startTimer = (e) => {
		let { total, seconds }
			= getTimeRemaining(e);
		if (total >= 0) {
			setTimer(
				(seconds > props.time ? seconds : seconds)
			)
		}
	}


	const clearTimer = (e) => {
		setTimer(props.time);

		if (Ref.current) clearInterval(Ref.current);
		const id = setInterval(() => {
			startTimer(e);
		}, 1000)
		Ref.current = id;
	}

	const getDeadTime = () => {
		let deadline = new Date();

		deadline.setSeconds(deadline.getSeconds() + props.time);
		return deadline;
	}


	useEffect(() => {
		clearTimer(getDeadTime());
	}, []);



	return (
		<>
			<div className="App" style={{display: props.display}}>
				<h2 style={{ position: 'absolute',color: 'white', fontSize: 20, top: 50, left: 140, zIndex: 999999}}>{timer}S</h2>
			</div>
		</>
	)
}