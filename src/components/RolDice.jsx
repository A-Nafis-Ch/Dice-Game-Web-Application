import React from 'react'

import styled from 'styled-components'



const RolDice = ({ resetScore, changeDice, Roller }) => {




  const resetHandler = () => {
    
    resetScore();
  }




  return (
    <DiceDiv>
      <img onClick={Roller} src={`../public/dice/dice_${changeDice}.png`} alt={`../public/dice/dice_${changeDice}.png`} />

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


}


`
