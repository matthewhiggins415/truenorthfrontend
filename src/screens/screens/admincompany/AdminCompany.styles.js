import { styled } from 'styled-components';

export const ProfileScreen = styled.div`
  min-height: 90vh;
  width: 100%;
  border-top: 2px solid lightblue;
  padding: 20px;
  font-family: 'Mulish', sans-serif;
`

export const ProfileContainer = styled.div`
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

export const EditBtn = styled.button`
  padding: 5px 20px;
  cursor: pointer;
  border-radius: 10px;
  background-color: white;
  border: 1px solid black;
  transition: 150ms ease-in-out;
  border: none;

  &:hover {
    background-color: black;
    color: white;
  }
`
 
export const ProfImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 1px solid black;
  margin: 20px auto;
`

export const InfoContainer = styled.div`
  margin-top: 20px;
`