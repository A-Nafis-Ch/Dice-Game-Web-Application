import React from 'react'
import styled from 'styled-components'

import Score from '../components/Score'
import NumberSelection from './NumberSelection'
import RolDice from './RolDice'
import Rules from './Rules'
import { useState } from 'react';



const Gameplay = () => {

  const [clickNum, setClickNum] = useState(false);

  const [changeDice, setchangeDice] = useState(1);

  const [scoreCard, setscoreCard] = useState(0);

  const [error, setError] = useState("");

  const [showRules, setshowRules] = useState(false);

  const toggleShowRules = () => {
    setshowRules((prev) => !prev);
  }

  const random = (min, max) => {
    // console.log(Math.floor(Math.random()*(max - min) + min))
    return Math.floor(Math.random() * (max - min) + min);
  }

  const resetScore = () => {

    setscoreCard(0);
  }

  const Roller = () => {



    if (!clickNum) {

      setError("You have not selected any number");
      return;
    };


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
        <NumberSelection setError={setError} error={error} clickNum={clickNum} setClickNum={setClickNum} />

        



      </Container>
      <RolDice changeDice={changeDice} Roller={Roller} />

      <BtnDiv>
        <button onClick={resetScore} className='reset'>Reset Score</button>
        <button onClick={toggleShowRules} className='rules'>{showRules? "Hide " : "Show "}Rules</button>
      </BtnDiv>

     {showRules && <Rules />} 
      



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

const BtnDiv = styled.div`


    display: flex;
    flex-direction: column;
    gap: 8px;              /* space between buttons */
    margin-top: 16px;
    align-items: center;



.reset{
background-color: black;
color:white;
}

button{
 height: 40px;
 width: 200px;
 padding: 10px;
 text-align:center;
 cursor: pointer;


}


`



