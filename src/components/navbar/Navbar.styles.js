import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  width: auto;
  min-height: 80px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
  margin: 0 auto;

  h3 {
    font-family: 'Mulish', sans-serif;
    font-size: 20px;
    font-weight: 600;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;

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
  height: 60px;
  width: 60px;
  object-fit: cover;
  margin-right: 20px;
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
  top: 80px;
  right: 25px;
  background-color: white;
  z-index: 15;
  border: none;
  border-radius: 15px;
`

export const CallUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 25px;
  font-family: "Libre Franklin", sans-serif;
`

export const CallContainer = styled.div`
  display: flex;
  font-size: 25px;

  a {
    color: blue;
    text-decoration: none;
    margin-left: 5px;
  }
`