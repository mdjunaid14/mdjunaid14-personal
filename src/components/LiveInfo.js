import { useState } from 'react'


// professions & hobbies arrays 
const professions = [' an engineer', ' a trader', ' a researcher', ' a procrastinator']
const hobbies = ['reading books', 'playing chess', 'playing badminton', 'watching movies']

const LiveInfo = () => {
  const [count, setCount] = useState(0)

  // incrementing the count for professions & hobbies
  const increment = () => {
    if (count > 2) {
      setCount(0)
    } else {
      setCount(count + 1)
    }
  }

  // iterating the array - professions & hobbies 
  setTimeout(increment, 1000)

	return (
		<div className='live-info'>
			<h2>I am <span className='bg-mask'>{professions[count]}</span></h2>
	        <h2>I love <span className='bg-mask'>{hobbies[count]}</span></h2>
	    </div>
	)
}

export default LiveInfo;