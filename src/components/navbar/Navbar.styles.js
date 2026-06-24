import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  width: auto;
  min-height: 80px;
  background-color: ${({ theme }) => theme.colors.surface};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 32px;
  margin: 0 auto;
  position: sticky;
  top: 0;
  z-index: 50;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadow.sm};

  h3 {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 20px;
    font-weight: 600;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding: 12px 16px 20px;

    h3 {
      margin-bottom: 15px;
      text-align: center;
    }
  }
`

export const AvailabilityContainer = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-left: 10px;
  }
`

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: black;
  text-decoration: none;
  cursor: pointer;


  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`

export const Img = styled.img`
  height: auto;
  width: 230px;
  object-fit: cover;
  margin-right: 20px;

  @media only screen and (max-width: 500px) {
    width: 200px;
    margin-right: 0px;
  }
`

export const AdminNavBarSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const AdminBtn = styled.button`
  width: 200px;
  padding: 15px;
  background-color: white;
  transition: 150ms ease-in-out;
  border: none;
  font-family: 'Inter', sans-serif;
  font-size: 14px;

  &:hover {
    cursor: pointer;
    background-color: black;
    color: white;
  }

  &:first-child {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
`

export const AdminLink = styled(Link)`
  width: 200px;
  padding: 15px;
  background-color: white;
  transition: 150ms ease-in-out;
  border: none;
  text-align: center;
  color: black;
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  font-size: 14px;

  &:hover {
    cursor: pointer;
    background-color: black;
    color: white;
  }
`

export const LogoutBtn = styled.button`
  width: 100%;
  padding: 15px;
  background-color: white;
  transition: 150ms ease-in-out;
  border: none;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;

  &:hover {
    cursor: pointer;
    background-color: red;
    color: white;
    border: 1px solid red;
  }
`

export const DropDownMenu = styled.div`
  display: ${(props) => (props.showMenu ? "flex" : "none")};
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  flex-direction: column;
  position: absolute;
  top: 100px;
  right: 25px;
  background-color: white;
  z-index: 15;
  border: none;
  border-radius: 15px;

  @media only screen and (max-width: 600px) {
    top: 200px;
    right: 100px;
  }
`

export const CallUsContainer = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 25px;
  margin-right: 25px;
  font-family: 'Inter', sans-serif;

  @media only screen and (max-width: 600px) {
    margin-right: 0px;
  }
`

export const CallContainer = styled.div`
  a {
    color: white;
    text-decoration: none;
    background-color: ${({ theme }) => theme.colors.red};
    padding: 10px 18px;
    border-radius: ${({ theme }) => theme.radius.pill};
    cursor: pointer;
    font-weight: 600;
    box-shadow: ${({ theme }) => theme.shadow.sm};
    transition: ${({ theme }) => theme.transition};
    display: inline-block;

    &:hover {
      background-color: ${({ theme }) => theme.colors.redDark};
      transform: translateY(-1px);
    }
  }
`
