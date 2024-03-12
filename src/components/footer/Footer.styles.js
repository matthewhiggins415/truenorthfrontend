import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  width: 100%;
  min-height: 60vh;
  background-color: black;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media only screen and (max-width: 600px) {
    width: 100%;
    justify-content: space-between;
    font-size: 15px;
    flex-direction: column;
    height: auto;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`

export const LoginBtn = styled.button`
  position: absolute;
  right: 0px;
  bottom: 0px;
  padding: 15px 20px;
  background-color: black;
  cursor: pointer;
  border: none;
  transition: 150ms ease-in-out;
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
  }
`

export const FooterInfo = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: left;
  min-height: 300px;
  min-width: 200px;
  height: auto;

  @media only screen and (max-width: 600px) {
    margin-top: 10px;
  }

  p {
    font-family: "Libre Franklin", sans-serif;
  }

  h4 {
    border-bottom: 2px solid lightblue;
    padding: 5px;
    font-family: 'Mulish', sans-serif;
    font-size: 25px;
  }

  a {
    color: white;
    text-decoration: none;
    cursor: pointer;
  }
`

export const FooterServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  a {
    font-family: 'Mulish', sans-serif;
    font-size: 18px;
    margin-top: 15px;
    transition: 250ms ease-in-out;

    &:hover {
      color: red;
    }
  }
`

export const FooterServiceLink = styled(Link)`
  font-family: 'Mulish', sans-serif;
  font-size: 15px;
  margin-top: 5px;
`