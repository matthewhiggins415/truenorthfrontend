import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeroContainer = styled.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  align-items: center;
  margin: 0px;
  background-image: url(${props => props.imgSrc});
  background-size: cover; 
  background-position: center; 
  /* background-size: 120%; Increase the background-size */
  background-repeat: no-repeat;

  @media only screen and (max-width: 600px) {
    min-height: 500px;
    background-size: cover;
  }
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
  top: 320px;
  left: 0;
  width: 100%;
  height: auto;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1; 
  padding-top: 15px;
  padding-bottom: 15px;

  @media only screen and (max-width: 600px) {
    font-size: 1.5em;
    width: 100%;
    height: 50%;
    top: 420px;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
    justify-content: center;

    h2 {
      text-decoration: none;
    }
  }
`;

export const QuoteBtn = styled.button`
  padding: 20px 80px;
  border: 2px solid #ee1c4a;
  font-size: 20px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: .8px;
  color: white;
  border-radius: 15px;
  cursor: pointer;
  background-color: #ee1c4a;
  transition: 150ms ease-in-out;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const HeroNavContainer = styled.div`
  background-color: black;
  color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: end;
  font-family: "DM Sans", sans-serif;
  background-color: #25335F;

  @media only screen and (max-width: 600px) {
    width: 100%;
    justify-content: space-evenly;
  }

  @media only screen and (max-width: 400px) {
    width: 100%;
    justify-content: space-between;
  }
`

export const HeroNavLink = styled(Link)`
  margin-right: 30px;
  color: white;
  text-decoration: none;
  cursor: pointer;
  padding: 10px;
  font-size: 20px;

  @media only screen and (max-width: 600px) {
    margin-right: 0px;
  }
`

export const ServicesBtn = styled.button`
  margin-right: 30px;
  color: white;
  text-decoration: none;
  cursor: pointer;
  padding: 10px;
  font-size: 20px;
  color: white;
  background-color: #25335F;
  border: none;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 600px) {
    margin-right: 0px;
  }
`

export const ServiceDropDown = styled.div`
  display: ${(props) => (props.showDropDown ? "flex" : "none")};
  position: absolute;
  right: 110px;
  top: 230px;
  background-color: white;
  color: black;
  width: 250px;
  height: auto;
  z-index: 20;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  @media only screen and (max-width: 600px) {
    top: 350px;
  }
`

export const ServiceLink = styled(Link)`
  padding-left: 10px;
  padding-top: 20px;
  color: black;
  cursor: pointer;
  text-decoration: none;
  font-size: 20px;
  transition: 150ms ease-in-out;
  padding: 20px;
  padding-left: 20px;
  display: flex;
  
  &:hover {
    color: white;
    background-color: #25335F;
  }

  &:first-child {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    padding-top: 20px;
  }

  &:last-child {
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    padding-bottom: 20px;
  }
`