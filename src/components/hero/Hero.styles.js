import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeroContainer = styled.div`
  width: 100%;
  min-height: 560px;
  display: flex;
  align-items: center;
  margin: 0px;
  background-image: linear-gradient(rgba(27, 38, 71, 0.30), rgba(27, 38, 71, 0.60)), url(${props => props.imgSrc});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media only screen and (max-width: 600px) {
    min-height: 500px;
    background-size: cover;
  }
`

export const Overlay = styled.div`
  font-size: 2.6em;
  font-weight: 700;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.heading};
  letter-spacing: -0.01em;
  line-height: 1.15;
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
  text-shadow: 0 2px 14px rgba(0, 0, 0, 0.45);
  z-index: 1;
  padding-top: 15px;
  padding-bottom: 15px;
  gap: 6px;

  @media only screen and (max-width: 600px) {
    font-size: 1.6em;
    width: 100%;
    height: 50%;
    top: 420px;
    align-items: center;
    justify-content: center;

    h2 {
      text-decoration: none;
    }
  }
`;

export const QuoteBtn = styled.button`
  padding: 16px 56px;
  border: none;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.body};
  letter-spacing: 0.3px;
  color: white;
  border-radius: ${({ theme }) => theme.radius.pill};
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.red};
  box-shadow: 0 10px 24px rgba(238, 28, 74, 0.35);
  transition: ${({ theme }) => theme.transition};
  margin-top: 24px;
  margin-bottom: 20px;
  text-transform: capitalize;

  &:hover {
    background-color: ${({ theme }) => theme.colors.redDark};
    transform: translateY(-2px);
    box-shadow: 0 14px 30px rgba(238, 28, 74, 0.45);
  }
`

export const HeroNavContainer = styled.div`
  background-color: black;
  color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: end;
  font-family: ${({ theme }) => theme.fonts.body};
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