import { styled } from 'styled-components';

export const EditServiceContainer = styled.div`
  width: 100%;
  padding: 40px;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  border-top: 2px solid lightblue;
`

export const BackBtn = styled.button`
  width: 100px;
  padding: 10px;
  background-color: white;
  transition: 150ms ease-in-out;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`

export const RemoveBtn = styled.button`
  width: 100px;
  padding: 10px;
  background-color: white;
  transition: 150ms ease-in-out;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: red;
    color: white;
    border: 1px solid red;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 250px;
  margin: 0 auto;
`

export const FormContainer = styled.div`
  margin: 40px auto;
  text-align: center;
  border: none;
  padding: 20px;
  justify-content: space-between;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 15px;
`

export const Input = styled.input`
  margin-top: 20px;
  padding: 10px 20px;
`

export const TextArea = styled.textarea`
  margin-top: 20px;
  padding: 10px 20px;
`

export const SubmitBtn = styled.button`
  width: 100%;
  padding: 10px;
  background-color: white;
  transition: 150ms ease-in-out;
  border: 1px solid black;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`