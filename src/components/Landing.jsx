import React from 'react'
import styled from 'styled-components'

const Landing = ({toggle}) => {
    return (
        <Container>
            <div className="imageLayout">
                <img src="../public/images/dices.png" alt="" />

                
            </div>

            <div className="content">

                    <h1>DICE GAME</h1>
                    <Button onClick={toggle}>Play Now</Button>
                </div>

        </Container>
    )
}

export default Landing

const Container = styled.div`
  display: flex;
  justify-content: center;

  h1 {
    font-size: 92px;
    font-weight: 700;
    width: 528px;
    height: 110px;
    margin-top: 200px;
    font-family: 'Poppins', sans-serif;
  }
`;

const Button = styled.button`

width: 220px;
height: 34px;
margin-left: 280px;
background: #000;
color:white;
border:none;
cursor:pointer;

&: hover {



}

`;


