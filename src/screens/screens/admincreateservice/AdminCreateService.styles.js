import { styled } from 'styled-components';

export const CreateServiceContainer = styled.div`
  width: 100%;
  padding: 40px;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  border-top: 2px solid lightblue;
`

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
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

  h2 {
    font-family: 'Mulish', sans-serif;
  }
`

export const Input = styled.input`
  padding: 10px 20px;
  width: 100%;
  border: none;
  background-color: #efefef;
  margin-top: 10px;
`

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  align-items: start;
  flex-direction: column;

  label {
    font-family: 'Mulish', sans-serif;
  }
`

export const TextArea = styled.textarea`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #efefef;
  border: none;
  width: 100%;
  min-height: 200px;
`

export const SubmitBtn = styled.button`
  border-radius: 10px;
  width: 100%;
  padding: 15px 30px;
  margin: 0px auto;
  border: 1px solid black;
  margin-top: 40px;
  background-color: black;
  cursor: pointer;
  color: white;
  font-size: 20px;
`

export const ImgForm = styled.form`
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #efefef;
  padding: 10px 20px;

  input {
    background-color: white;
    padding: 10px 20px;
    border-radius: 15px;
  }

  button {
    background-color: black;
    padding: 10px 20px;
    cursor: pointer;
    border: 1px solid black;
    color: white;
    border-radius: 15px;
    margin-left: 10px;
  }
`

export const Img = styled.img`
  width: 150px;
  height: 150px;
  margin: 10px auto;
`