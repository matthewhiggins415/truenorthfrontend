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

export const Form = styled.form`
  display: ${(props) => (props.loading ? "none" : "flex")};
  width: 400px;
  min-height: 480px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 2px solid white;
  padding: 10px;
  background-color: white;
  border-radius: 15px;
  color: black;

  h2 {
    margin-bottom: 20px;
    padding-bottom: 5px;
    border-bottom: 2px solid lightblue;
  }

  @media only screen and (max-width: 600px) {
    width: 300px;
    margin-top: 80px;
  }
`

export const InputContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`

export const Input = styled.input`
  height: 40px;
  border-radius: 15px;
  border: 1px solid black;
  width: 200px;
  padding-left: 10px;
  padding-right: 10px;
  color: black;
`

export const Select = styled.select`
  height: 40px;
  border-radius: 15px;
  border: 1px solid black;
  width: 200px;
  padding: 10px;
  color: black;
`

export const SubmitBtn = styled.button`
  width: 80%;
  border: 1px solid black;
  padding: 10px 50px;
  text-align: center;
  background-color: white;
  transition: 150ms;
  cursor: pointer;
  margin-top: 20px;
  border-radius: 15px;
  color: black;

  &:hover {
    background-color: black;
    color: white;
  }
`

export const CloseBtn = styled.button`
  width: 80%;
  border: 1px solid black;
  padding: 10px 50px;
  text-align: center;
  background-color: white;
  transition: 150ms;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 15px;
  color: black;

  &:hover {
    background-color: red;
    color: white;
    border: 1px solid red;
  }
`

export const LoadingContainer = styled.div`
  padding: 100px 200px;
  background-color: white;
  color: black;
  border-radius: 40px;
  display: ${(props) => (props.loading ? "flex" : "none")};
  flex-direction: column;
  text-align: center;

  h2 {
    margin-bottom: 20px;
  }

`