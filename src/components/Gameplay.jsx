import React from 'react'
import styled from 'styled-components'

import Score from '../components/Score'
import NumberSelection from './NumberSelection'
import RolDice from './RolDice'
import { useState } from 'react';



const Gameplay = () => {

  const [clickNum, setClickNum] = useState(false);

  const [changeDice, setchangeDice] = useState(1);

  const [scoreCard, setscoreCard] = useState(0);

  const random = (min, max) => {
    // console.log(Math.floor(Math.random()*(max - min) + min))
    return Math.floor(Math.random() * (max - min) + min);
  }

  const Roller = () => {
    const randomDice = random(1, 7);
    setchangeDice((prev) => randomDice);


    if (changeDice === randomDice) {

      setscoreCard((prev) => prev + randomDice);
    } else {

      setscoreCard((prev) => prev - 2);
    }

    setClickNum(undefined);
  }



  return (
    <>

      <Container>

        <Score scoreCard={scoreCard} />
        <NumberSelection clickNum={clickNum} setClickNum={setClickNum} />



      </Container>
      <RolDice changeDice={changeDice} Roller={Roller} />



    </>
  )
}

export default Gameplay

const Container = styled.div`
  display: flex;
  justify-content: space-between; /* pushes children to ends */
  align-items: center;             /* optional: align vertically */
  gap: 20px; 
  padding: 20px;
  
`



