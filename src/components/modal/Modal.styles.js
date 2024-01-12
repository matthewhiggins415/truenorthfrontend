import styled from 'styled-components';

export const ModalContainer = styled.div`   
  display: ${(props) => (props.modalOpen ? 'block' : 'none')};
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100%;
  background-color: rgba(0,0,0,.5);
  color: white;
  z-index: 10;
`

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100%;
`

export const CloseBtn = styled.button`
  position: relative;
  top: -250px;
  left: 450px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`

export const Form = styled.form`
  width: 400px;
  min-height: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 2px solid white;
  padding: 10px;
  background-color: white;
  border-radius: 15px;
  color: black;
`

export const InputContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Input = styled.input`
  height: 40px;
  border-radius: 15px;
  border: 1px solid black;
  width: 200px;
`

export const Select = styled.select`
  height: 40px;
  border-radius: 15px;
  border: 1px solid black;
  width: 200px;
  padding: 10px;
`

export const SubmitBtn = styled.button`
  border: 1px solid black;
  padding: 10px 50px;
  text-align: center;
  background-color: white;
  transition: 150ms;
  cursor: pointer;
  margin-top: 20px;
  border-radius: 15px;

  &:hover {
    background-color: #ececec;
  }
`