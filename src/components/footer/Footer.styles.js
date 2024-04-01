import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  width: 100%;
  padding-top: 50px;
  max-height: auto;
  background-color: #25335F;
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
    max-height: none;
    padding-top: 50px;
    padding-bottom: 100px;
  }
`

export const LoginBtn = styled.button`
  position: absolute;
  right: 0px;
  bottom: 0px;
  padding: 15px 20px;
  background-color: #25335F;
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
  min-height: 400px;
  min-width: 200px;

  @media only screen and (max-width: 600px) {
    margin-top: 10px;
    width: 70%;
    margin-bottom: 20px;
    min-height: auto;
  }

  p {
    font-family: "Libre Franklin", sans-serif;
  }

  h4 {
    border-bottom: 2px solid #ee1c4a;
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
      color: #ee1c4a;
    }
  }
`

export const FooterServiceLink = styled(Link)`
  font-family: 'Mulish', sans-serif;
  font-size: 15px;
  margin-top: 5px;
`