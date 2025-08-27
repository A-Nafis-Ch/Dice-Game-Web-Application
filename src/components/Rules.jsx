import styled from "styled-components"

const Rules = () => {
  return (
    <RulesDiv>

        <h2>How to play dice game</h2>
        <p>Select any number</p>
        <p>Click on dice image </p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p>if you get wrong guess then  2 point will be dedcuted </p>
      
    </RulesDiv>
  )
}

export default Rules

const RulesDiv = styled.div`

height: 120px;
width: 600px;
background-color: #FBF1F1;
align-items: center;
margin-top: 60px;
margin-left: 340px;
font-family: 'Poppins', sans-serif;
padding: 20px;

h2{
font-size: 15px;
}

p{
font-size: 12px;
}

`
