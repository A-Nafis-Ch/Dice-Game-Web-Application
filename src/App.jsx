import './App.css'
import Landing from './components/Landing'
import Gameplay from './components/Gameplay'
import {useState} from 'react'

function App() {

  const [isGameStarted, setisGameStarted] = useState(false);

  const toggleGameStart = () => {

    setisGameStarted(prev => !prev);
  }


  

  return (
    <>

    { isGameStarted? <Gameplay /> : <Landing toggle = {toggleGameStart}/>}

    </>
  )
}

export default App
