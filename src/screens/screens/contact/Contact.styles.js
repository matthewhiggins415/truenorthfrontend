import { styled } from 'styled-components';

export const ContactPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
`

export const ContactSectionContainer = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  h2 {
    text-align: center;
  }
`

export const BtnContainer = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  margin: 10px;
  margin-bottom: 15px;
`

export const ContactInfoContainer = styled.div`
  display: flex;
  min-width: 300px;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
`

export const Btn = styled.button`
  padding: 5px 10px;
  border-radius: 10px;
  background-color: white;
  transition: 150ms ease-in-out;
  cursor: pointer;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
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