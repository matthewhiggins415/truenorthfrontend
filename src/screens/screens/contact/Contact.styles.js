import { styled } from 'styled-components';

export const ContactPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-top: 2px solid #25335F;
`

export const ContactSectionContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  font-family: 'Mulish', sans-serif;
  font-size: 18px;
  height: 60%;

  h2 {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 30px;
  }
`

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 10px;
  margin-bottom: 15px;
  margin-top: 25px;
  padding-left: 20px;
  padding-right: 20px;

  @media only screen and (max-width: 600px) {
    width: 100%;
    color: black;
    margin-bottom: 20px;
  }
`

export const ContactInfoContainer = styled.div`
  display: flex;
  min-width: 300px;
  align-items: start;
  justify-content: space-between;
  margin-top: 15px;
  flex-direction: column;
`

export const Btn = styled.button`
  padding: 10px 20px;
  background-color: white;
  border: 1px solid black;
  transition: 150ms ease-in-out;
  margin-right: 30px;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: black;
  }

  @media only screen and (max-width: 600px) {
    padding: 5px 10px;
  }
`

export const DeleteBtn = styled.button`
  padding: 10px 20px;
  background-color: white;
  border: 1px solid red;
  transition: 150ms ease-in-out;
  cursor: pointer;
  color: red;

  &:hover {
    color: white;
    background-color: red;
  }

  @media only screen and (max-width: 600px) {
    padding: 5px 10px;
  }
`

export const NotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  align-items: left;
  justify-content: space-between;
  margin-top: 15px;

  h3 {
    margin-bottom: 10px;
  }
`

export const ContactContainer = styled.div`
  display: flex;
  height: 100%;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`

export const CustomerIdWarning = styled.p`
  font-size: '6px';
  background-color: pink;
  padding: 5px;
`