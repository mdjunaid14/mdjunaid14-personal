import { useEffect } from 'react'

// Greeting component 
const Greeting = ({ setData }) => {

  //  func for returning the time of the day 
  const greet = () => {
    let time = new Date().getHours()
    if (time < 12) {
        return 'Morning'
      } else if (time >= 12 && time < 16 ) {
        return 'Noon'
      } else {
        return 'Evening'
      }
    }

    // assigning the time of the day to a variable 
    const greeting = greet();

    // setting the state for tom-jerry 
    useEffect(() => {
      greeting === 'Morning' ? setData(true) : setData(false)
    }, [setData, greeting])
    

    return (
      <h1>Hi, Good <u>{greeting}!</u> </h1>
    )
}

export default Greeting;