import { styled } from 'styled-components';

export const AdminEditScreen = styled.div`
  min-height: 90vh;
  width: 100%;
  border-top: 2px solid lightblue;
  padding: 20px;
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
 
export const ProfImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 1px solid black;
  margin: 20px auto;
`

export const InputContainer = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  align-items: center;
`

export const Input = styled.input`
  padding: 5px;
  border: 1px solid black;
  width: 200px;
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

`