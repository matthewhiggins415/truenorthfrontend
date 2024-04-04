import { styled } from 'styled-components';

export const AdminEditScreen = styled.div`
  width: 100%;
  padding: 40px;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  border-top: 2px solid lightblue;
`

export const ProfileEditContainer = styled.div`
  width: 400px;
  min-height: 400px;
  height: auto;
  border: none;
  margin: 20px auto;
  padding: 20px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  h1 {
    font-family: 'Mulish', sans-serif;
    text-align: center;
    margin-bottom: 15px;
  }
`

export const BackBtn = styled.button`
  padding: 10px 20px;
  background-color: white;
  border: 1px solid black;
  transition: 150ms ease-in-out;
  cursor: pointer;
  margin-bottom: 20px;
  width: 100px;

  &:hover {
    color: white;
    background-color: black;
  }
`
 
export const ProfImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 1px solid black;
  margin: 20px auto;
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

export const Input = styled.input`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #efefef;
  border: none;
  width: 100%;
  cursor: pointer;
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

export const Img = styled.img`
  width: 350px;
  height: 150px;
  margin-top: 20px auto;
`

export const ImgContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #efefef;
  padding: 10px 20px;
  margin-top: 10px;
  
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
    margin-top: 10px;
  }
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

`

export const FormContainer = styled.div`
  margin: 40px auto;
  width: 700px;
  text-align: center;
  border: none;
  padding: 20px;
  justify-content: space-between;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 15px;
  font-family: 'Mulish', sans-serif;

  @media only screen and (max-width: 600px) {
    width: 300px;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
`