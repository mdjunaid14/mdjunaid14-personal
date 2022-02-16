// functional imports 
import { useState } from 'react'

// component imports 
import Greeting from './components/Greeting'
import SideImage from './components/SideImage'
import BasicIntro from './components/BasicIntro'
import LetsTalk from './components/LetsTalk'
import LiveInfo from './components/LiveInfo'

// Side image imports 
import jerry from './images/jerry.png'
import tommy from './images/tommy.png'

// Style Sheet import 
import "./index.css";

// Main application func
export default function App() {
  const [morning, setMorning] = useState(false)

  // setting side image - tom & jerry 
  const dataImage = !morning ? tommy : jerry

  return (
    <div className='main-container'>
      <div className='container'>
        <Greeting setData={setMorning} />
        <BasicIntro />
        <LiveInfo />
        <LetsTalk />
      </div>
      <SideImage data={dataImage} />
    </div>
  );
}



