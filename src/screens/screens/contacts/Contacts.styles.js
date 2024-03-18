import styled from 'styled-components';
import { Link } from "react-router-dom";

export const ContactsContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fefefe;
`

export const BottomSection = styled.div`
  border-top: 2px solid lightblue;
  display: flex;
  flex-direction: column;
  padding: 40px;
  min-height: 80vh;
`

export const ContactsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  h2 {
    font-family: 'Mulish', sans-serif;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }

  form {
    @media only screen and (max-width: 600px) {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
      margin-top: 20px;
      color: black;
    }
  }
`

export const Btn = styled.button`
  text-decoration: none;
  color: black;
  padding: 5px 10px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
  transition: 150ms ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: black;
    color: white;
  }

  @media only screen and (max-width: 600px) {
    margin-top: 10px;
    width: 200px;
  }
`

export const IndividualContact = styled.button`
  border: ${({ isSelected }) => isSelected ? '2px solid red' : 'none'};
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  font-family: 'Mulish', sans-serif;

  justify-content: space-between;
  margin: 10px 0px;
  padding: 15px 25px;
  border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  transition: 150ms ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  @media only screen and (max-width: 600px) {
    height: auto;
    flex-direction: column;
    align-items: start;
    color: black;
  }
`

export const ContactBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: black;
  font-size: 20px;
  text-align: center;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  transition: 150ms ease-in-out;
  color: white;

  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-top: 10px;
  }
`

export const SearchInput = styled.input`
  padding: 5px 10px;
  border-radius: 10px;
  border: 1px solid black;
  outline: none;
  margin-right: 10px;

  @media only screen and (max-width: 600px) {
    width: 200px;
    margin-right: 0px;
    margin-top: 10px;
  }
`

export const Select = styled.select`
  padding: 5px 10px;
  border-radius: 10px;
  border: 1px solid black;
  outline: none;
  margin-right: 10px;

  @media only screen and (max-width: 600px) {
    width: 200px;
    margin-right: 0px;
    margin-top: 10px;
  }
`

export const EmailBtn = styled.button`
  padding: 10px 20px;
  border-radius: 4px;
  color: white;
  background-color: black;
  border: 1px solid black;
  cursor: pointer;
`

export const SearchForm = styled.form`
  @media only screen and (max-width: 600px) {
    padding: 0px 10px 10px 10px;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
`