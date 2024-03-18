import styled from 'styled-components';
import { Link } from "react-router-dom";

export const NewContactContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fefefe;
  padding: 20px;
  border-top: 2px solid lightblue;
`

export const BackBtn = styled.button`
  padding: 10px 20px;
  background-color: white;
  border: 1px solid black;
  transition: 150ms ease-in-out;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    color: white;
    background-color: black;
  }
`

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 20px;
  flex-direction: column;
  border: none;

  label {
    font-family: 'Mulish', sans-serif;
    font-size: 24px;
    margin-bottom: 10px;
  }
`

export const SubmitBtn = styled.button`
  border-radius: 10px;
  width: 100%;
  padding: 15px 30px;
  margin: 0px auto;
  border: 1px solid black;
  margin-top: 20px;
  background-color: black;
  cursor: pointer;
  color: white;
  font-size: 20px;
`

export const TextArea = styled.textarea`
  min-height: 200px;
  width: 100%;
  background-color: #efefef;
  border: none;
  cursor: pointer;
  padding: 25px;
`

export const Select = styled.select`
  height: 40px;
  border: 1px solid black;
  width: 100%;
  background-color: #efefef;
  padding: 5px;
  color: black;
  cursor: pointer;
  border: none;
  font-family: 'Mulish', sans-serif;
  font-size: 18px;
`

export const Form = styled.form`
  width: 400px;
  min-height: 480px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 2px solid white;
  padding: 10px;
  background-color: white;
  color: black;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 15px;

  h2 {
    margin-bottom: 30px;
    margin-top: 30px;
    font-family: 'Mulish', sans-serif;
    text-align: center;
  }

  @media only screen and (max-width: 600px) {
    width: 300px;
    margin-top: 120px;
  }
`

export const Input = styled.input`
  height: 40px;
  width: 100%;
  background-color: #efefef;
  border: none;
  padding: 25px;
  color: black;
  outline: none;
  font-family: 'Mulish', sans-serif;
  font-size: 18px;
`