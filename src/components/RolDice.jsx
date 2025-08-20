import React from 'react'

import  styled from 'styled-components'
import {useState} from 'react'

const RolDice = () => {

    const [changeDice, setchangeDice] = useState(1);

    const random = (min,max) =>{
        // console.log(Math.floor(Math.random()*(max - min) + min))
        return Math.floor(Math.random()*(max - min) + min);
    }

    const rollDice = () => {
        const randomDice = random(1,7);
        setchangeDice((prev)=>randomDice);
    }

 
  return (
    <DiceDiv>
      <img onClick={rollDice} src={`../public/dice/dice_${changeDice}.png`} alt={`../public/dice/dice_${changeDice}.png`} />

      <p>Click on Dice to roll</p>
    </DiceDiv>
  )
}

export default RolDice

const DiceDiv = styled.div`

align-items: center;
display:flex;
flex-direction:column;

p{
    font-size: 15px;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
}

img{
    cursor:pointer;
}


`
