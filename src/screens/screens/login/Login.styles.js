import styled from 'styled-components';
import { Link } from "react-router-dom";

export const LoginScreenContainer = styled.div`
  width: 100%;
  min-height: 80vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-top: 2px solid lightblue;
`

export const Form = styled.form`
  width: auto;
  height: auto; 
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 35px;
  border-radius: 20px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
`

export const Input = styled.input`
  height: 40px;
  border-radius: 15px;
  border: 1px solid black;
  width: 200px;
  padding-left: 10px;
  padding-right: 10px;
  color: black;
  margin-bottom: 10px;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`

export const SubmitBtn = styled.button`
  width: 80%;
  border: 1px solid black;
  padding: 10px 50px;
  text-align: center;
  background-color: white;
  transition: 150ms;
  cursor: pointer;
  margin: 10px auto;
  margin-bottom: none;
  border-radius: 15px;
  color: black;

  &:hover {
    background-color: black;
    color: white;
  }
`

export const BackLink = styled(Link)`
  padding: 5px 10px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
  transition: 150ms ease-in-out;
  margin-bottom: 20px;
  text-decoration: none;
  color: black;

  &:hover {
    cursor: pointer;
    background-color: black;
    color: white;
  }
`