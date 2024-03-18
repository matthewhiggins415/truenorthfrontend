import { styled } from 'styled-components';

export const CreateBlogScreen = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  width: 100%;
  border-top: 2px solid lightblue;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  align-items: center;
`

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
`

export const SectionContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  font-family: 'Mulish', sans-serif;

  h3 {
    margin-bottom: 15px;
  }
`

export const Label = styled.label`
  text-align: left;
  width: 100%;
  margin-top: 10px;
`

export const Input = styled.input`
  padding: 10px;
  background-color: #efefef;
  border: none;
  margin-top: 10px;
  width: 100%;
  outline: none;
  cursor: pointer;
`

export const TextArea = styled.textarea`
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  min-height: 150px;
  outline: none;
  background-color: #efefef;
  cursor: pointer;
  border: none;
`

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  align-items: start;
  flex-direction: column;
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

export const ImgForm = styled.form`
  margin: 0 auto;
  width: 100%;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #efefef;
  padding: 10px;
  margin-top: 20px;
  
  input {
    background-color: white;
    padding: 10px;
    border-radius: 15px;
    width: 100%;
  }

  button {
    background-color: black;
    padding: 10px 20px;
    cursor: pointer;
    border: 1px solid black;
    color: white;
    border-radius: 15px;
    margin-top: 10px;
  }
`