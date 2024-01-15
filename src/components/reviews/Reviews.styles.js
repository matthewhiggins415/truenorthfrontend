import { styled } from 'styled-components';

export const ReviewSectionContainer = styled.div`
  width: 100vw;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  margin-bottom: 100px;

  h2 {
    padding-bottom: 7px;
    border-bottom: 3px solid lightblue;
    margin-bottom: 10px;
  }
`

export const ReviewContainer = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 50px;

  h3 {
    font-size: 18px;
    letter-spacing: 1.2px;
  }
`

export const Review  = styled.div`
  width: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Img = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid lightblue;
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