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
`

export const IndividualContact = styled.button`
  border: ${({ isSelected }) => isSelected ? '2px solid red' : 'none'};
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  transition: 150ms ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`

export const ContactBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: white;
  font-size: 20px;
  text-align: center;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  transition: 150ms ease-in-out;

  &:hover {
    background-color: black;
    color: white;
  }
`

export const SearchInput = styled.input`
  padding: 5px 10px;
  border-radius: 10px;
  border: 1px solid black;
  outline: none;
  margin-right: 10px;
`

export const Select = styled.select`
  padding: 5px 10px;
  border-radius: 10px;
  border: 1px solid black;
  outline: none;
  margin-right: 10px;
`

export const EmailBtn = styled.button`
  padding: 10px 20px;
  border-radius: 4px;
  color: white;
  background-color: black;
  border: 1px solid black;
  cursor: pointer;
`