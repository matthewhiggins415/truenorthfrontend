import styled from 'styled-components';

export const HeroContainer = styled.div`
  width: 100%;
  min-height: 60vh;
  display: flex;
  align-items: center;
  margin: 0px;
  border: 1px solid black;
`

export const Overlay = styled.div`
  font-size: 2.5em;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: .8px;
  color: white;
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 280px;
  left: 0;
  width: 100%;
  height: 50%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1; 

  @media (max-width: 900px) {
    top: 150px;
  }

  h6 {
    color: lightblue;
  }
`;

export const QuoteBtn = styled.button`
  padding: 20px 80px;
  border: 2px solid white;
  font-size: 20px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: .8px;
  color: white;
  border-radius: 15px;
  cursor: pointer;
  background-color: transparent;
  transition: 150ms ease-in-out;
  margin-top: 20px;
  margin-bottom: 20px;

  &:hover {
    background-color: white;
    color: black;
  }

`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;

  @media (max-width: 700px) {
    object-fit: cover;
    min-height: 500px;
  }
`