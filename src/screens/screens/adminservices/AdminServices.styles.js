import { styled } from 'styled-components';

export const AdminServiceScreenContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  border-top: 2px solid lightblue;
  padding: 40px;
`

export const AdminServiceScreenHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;

  h2 {
    font-family: 'Mulish', sans-serif;
  }
`

export const ServiceContainer = styled.button`
  width: 100%;
  display: flex;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  padding: 20px;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  margin-top: 10px;
  transition: 150ms ease-in-out;
  cursor: pointer;
  background-color: white;
  border: none;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`

export const Btn = styled.button`
  padding: 5px 15px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid black;
  transition: 150ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: black;
  }
`

export const ServiceBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: white;
  font-size: 15px;
  text-align: center;
  transition: 150ms ease-in-out;
  padding: 10px;

  &:hover {
    background-color: black;
    color: white;
  }
`