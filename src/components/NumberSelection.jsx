import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';

const NumberSelection = () => {

    const ArrayNum = [1, 2, 3, 4, 5, 6];

    const [clickNum, setClickNum] = useState(false);


    return (

        <>

            <Container>
                <div>
                    {ArrayNum.map((num, i) => (
                        <Box
                            clickNum={num === clickNum}
                            onClick={() => setClickNum(num)}
                            key={i}
                        >
                            <h2>{num}</h2>
                        </Box>
                    ))}
                </div>

                <p>Select Number</p>
            </Container>


        </>
    )
}

export default NumberSelection
const Box = styled.div`
  width: 72px;
  height: 72px;
  border: 1px solid black;
  cursor: pointer;
  

  display: flex;              /* make Box a flex container */
  justify-content: center;    /* center horizontally */
  align-items: center;        /* center vertically */

   background-color: ${(props) => props.clickNum ? 'black' : 'white'};
  color: ${(props) => props.clickNum ? 'white' : 'black'};
//   color:white;

  h2 {
    font-size: 24px;
    margin: 0; /* remove default margin */
  }


`

const Container = styled.div`
  display: flex;
  flex-direction: column; /
  align-items: center;
  gap: 10px;

  div {
    display: flex; 
    gap: 10px;
  }

  p{
    font-size: 24px;
    font-weight: 600;
    margin-left: 320px
  }
`




    
