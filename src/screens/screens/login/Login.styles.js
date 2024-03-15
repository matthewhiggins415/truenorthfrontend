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
  border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`

export const Input = styled.input`
  height: 40px;
  border: none;
  background-color: #efefef;
  width: 200px;
  padding-left: 10px;
  padding-right: 10px;
  color: black;
  margin-bottom: 20px;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`

export const SubmitBtn = styled.button`
  width: 100%;
  border: 1px solid black;
  padding: 20px 50px;
  text-align: center;
  background-color: black;
  cursor: pointer;
  margin: 0 auto;
  margin-bottom: none;
  color: white;
`