import { styled } from 'styled-components';

export const EditBlogScreen = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  width: 100%;
  border-top: 2px solid lightblue;
`

export const Btn = styled.button`
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

export const Img = styled.img`
  width: 150px;
  height: 150px;
  margin: 10px auto;
`

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #efefef;
  padding: 10px 20px;
  margin-top: 20px;
  
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

export const ImgContainer = styled.form`
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