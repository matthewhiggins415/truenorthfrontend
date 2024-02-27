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

export const IndividualContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  transition: 150ms ease-in-out;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    cursor: pointer;
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
`