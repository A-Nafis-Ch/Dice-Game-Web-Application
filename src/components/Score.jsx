import React from 'react'
import styled from 'styled-components'

const Score = () => {
  return (
    <ScoreCard>

        <div className="score">

            <h1>0</h1>

        </div>
        <p>Total Score</p>
      
    </ScoreCard>
  )
}

export default Score

const ScoreCard = styled.div`

width:135px;
height:151px;
font-family: 'Poppins', sans-serif;
align-items: center;
justify-content: center;
display: flex;
flex-direction: column;
flex-wrap: wrap;

.score h1{
    font-size: 70px;
    font-weight:500;
    }

p{
    font-size: 24px;
    }    
`
