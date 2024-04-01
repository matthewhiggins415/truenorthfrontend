import { styled } from 'styled-components';

export const ContactPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-top: 2px solid #25335F;
`

export const ContactSectionContainer = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 1200px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  font-family: 'Mulish', sans-serif;
  font-size: 18px;
  height: auto;

  h2 {
    text-align: start;
    margin-bottom: 30px;
  }
`

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 10px;
  margin-top: 25px;
  padding-left: 20px;
  padding-right: 20px;

  @media only screen and (max-width: 600px) {
    width: 100%;
    color: black;
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
  height: auto;
  width: 90%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const CustomerIdWarning = styled.p`
  font-size: '6px';
  background-color: pink;
  padding: 5px;
`

export const ContactSectionContainerBottom = styled.div`
  display: flex;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`

export const JobBtn = styled.button`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: 150ms ease-in-out;
  margin-bottom: 10px;

  &:hover {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    height: auto;
  }
`

export const JobBtnContainer = styled.div`
  width: 100%;
  display: flex;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`

export const JobBtnInfoContainer = styled.div`
  margin-right: 20px;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  height: 100%;

  @media only screen and (max-width: 600px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`