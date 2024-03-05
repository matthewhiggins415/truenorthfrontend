import { styled } from 'styled-components';

export const ServiceContainer = styled.div`
  min-height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-top: 2px solid lightblue;
  padding: 20px;
`

export const BackBtn = styled.button`
  padding: 10px;
  width: 100px;
  margin-bottom: 20px;
  background-color: white;
  color: black;
  transition: 150ms ease-in-out;
  border-radius: 10px;
  border: 1px solid black;
  cursor: pointer;
  justify-content: flex-start;


  &:hover {
    color: white;
    background-color: black;
  }
`

export const Img = styled.img`
  border-radius: 15px;
  margin-bottom: 20px;
  margin-top: 20px;
`

export const Container = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media only screen and (max-width: 600px) {
    width: 300px;
  }

  h1 {
    font-family: 'Mulish', sans-serif;
  }

`

export const H2 = styled.h2`
  margin-bottom: 20px;
  font-family: 'Mulish', sans-serif;
`

export const Line = styled.div`
  width: 120px;
  border-bottom: 2px solid red;
  margin-bottom: 20px;
`

export const P = styled.p`
  margin-bottom: 20px;
  font-family: 'Mulish', sans-serif;

  &:last-child {
    margin-bottom: 50px;
  }

`