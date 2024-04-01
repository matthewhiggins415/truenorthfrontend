import { styled } from 'styled-components';

export const AddJobModalContainer = styled.div`
  position: absolute;
  width: 100vw;
  min-height: 100%;
  height: auto;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContainerWithForm = styled.div`
  width: 50%;
  max-width: 600px;
  padding: 20px;
  min-height: 200px;
  height: auto;
  border-radius: 15px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    text-align: center;
  }

  @media only screen and (max-width: 600px) {
    max-height: 400px;
    width: 90%;
    overflow-y: scroll;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  justify-content: space-between;

  &:last-child {
    margin-bottom: 0px;
  }
`

export const NotesContainer = styled.div`
  display: flex;
  flex-direction: column; 

  p {
    margin-top: 10px;
  }
`

export const TopContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-bottom: 20px;
  font-family: 'Mulish', sans-serif;
`

export const CloseBtn = styled.button`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  color: red;
  border: none;
  background-color: white;

  &:hover {
    cursor: pointer;
  }
`
export const BottomContainer = styled.div`
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  padding: 20px;
  border-radius: 10px;
`

export const BottomBtnContainer = styled.div`
  width: 100%;  
  margin-top: 20px;
  display: flex;
  justify-content: end;
  height: 40px;
`

export const EditBtn = styled.button`
  padding: 5px 10px;
  font-family: 'Mulish', sans-serif;
  padding: 5px 10px;
  font-size: 18px;
  font-family: 'Mulish', sans-serif;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
`

export const DeleteBtn = styled.button`
  padding: 5px 10px;
  font-size: 18px;
  font-family: 'Mulish', sans-serif;
  margin-left: 20px;
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
`

export const LoadingContainer = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 15px;
`