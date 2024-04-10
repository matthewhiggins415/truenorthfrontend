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

export const ProfileHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const EditBtn = styled.button`
  padding: 10px 20px;
  background-color: white;
  border: 1px solid black;
  transition: 150ms ease-in-out;
  cursor: pointer;

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

export const InfoContainer = styled.div`
  margin-top: 20px;

  h3 {
    margin-bottom: 8px;
  }
`

export const Img = styled.img`
  width: 350px;
  height: auto;
  margin: 0 auto;
`

export const LoadingContainer = styled.div`
  min-height: 90vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`