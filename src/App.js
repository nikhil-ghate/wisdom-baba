import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
	const [advice, setAdvice] = useState('')
	useEffect(() => {
		fetchAdvice()
	}, [advice])

	const fetchAdvice = async () => {
		axios
			.get('https://api.adviceslip.com/advice')

			.then((response) => {
				const { advice } = response.data.slip
				setAdvice(advice)
			})
			.catch((err) => {
				console.log(err)
			})
	}
	return (
		<div className='app'>
			<div className='card'>
				<h2 className='heading'>{advice}</h2>
				<button className='button' onClick={() => fetchAdvice()}>
					<span>GIVE ME ADVICE !</span>
				</button>
			</div>
		</div>
	)
}

export default App
