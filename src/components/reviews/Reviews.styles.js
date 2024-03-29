import { styled } from 'styled-components';

export const ReviewSectionContainer = styled.div`
  width: 100vw;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  margin-bottom: 100px;
  margin-top: 100px;

  h2 {
    text-align: center;
    padding-bottom: 20px;
    border-bottom: 3px solid black;
    margin-bottom: 20px;
    margin-top: 20px;
    font-family: "Fjalla One", sans-serif;
    font-weight: 400;
    font-style: normal;
    width: 50%;
    font-size: 45px;
    letter-spacing: 1px;
  }
`

export const ReviewContainer = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 50px;
  flex-wrap: wrap;

  h3 {
    font-size: 18px;
    letter-spacing: 1.2px;
  }

  @media only screen and (max-width: 400px) {
    margin-top: 5px;
  }
`

export const Review  = styled.div`
  width: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    font-family: 'Mulish', sans-serif;
  }

  @media only screen and (max-width: 600px) {
    margin-bottom: 25px;
  } 
`

export const Img = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #d4d4d4;
  padding: 4px;
`

export const P = styled.p`
  text-align: center;
  font-size: 18px;
  letter-spacing: 1.2px;
  font-style: bold;
  margin-bottom: 15px;
`

export const StarContainer = styled.div`
  color: gold;  
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 15px 0px;
`