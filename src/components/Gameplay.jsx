import React from 'react'
import styled from 'styled-components'

import Score from '../components/Score'
import NumberSelection from './NumberSelection'
import RolDice from './RolDice'

const Gameplay = () => {
  return (
    <>

      <Container>

        <Score />
        <NumberSelection />

        

      </Container>
      <RolDice />



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



