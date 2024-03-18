import { styled } from 'styled-components';

export const AboutScreenContainer = styled.div`
  min-height: 90vh;
  width: 100%;
  display: flex;
  padding: 20px;
  flex-direction: column;
`


export const BackBtn = styled.button`
  padding: 10px 20px;
  background-color: white;
  border: 1px solid black;
  transition: 150ms ease-in-out;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    color: white;
    background-color: black;
  }
`

export const Section = styled.section`
  width: 90%;
  font-family: 'Mulish', sans-serif;

  h1 {
    margin-bottom: 20px;
  }
`

export const Img = styled.img`
  width: 90%;
  max-height: 400px;
  margin-bottom: 20px;
`

export const SectionContainer = styled.div`
  margin: 20px auto;
  width: 60%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`