import styled from 'styled-components';

export const ModalContainer = styled.div`   
  display: ${(props) => (props.modalOpen ? 'block' : 'none')};
  position: fixed;
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
    margin-bottom: 10px;
    margin-top: 10px;
    padding-bottom: 5px;
    font-family: 'Mulish', sans-serif;
    text-align: center;
  }

  @media only screen and (max-width: 600px) {
    width: 300px;
    margin-top: 120px;
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
  width: 100%;
  background-color: #efefef;
  border: none;
  padding: 25px;
  color: black;
  outline: none;
  font-family: 'Mulish', sans-serif;
  font-size: 18px;
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
  width: 90%;
  border: none;
  padding: 20px 50px;
  text-align: center;
  background-color: #ee1c4a;
  cursor: pointer;
  margin-top: 10px;
  color: white;
  font-family: 'Mulish', sans-serif;
  font-size: 18px;
`

export const CloseBtn = styled.button`
  width: 90%;
  border: none;
  padding: 20px 50px;
  text-align: center;
  background-color: black;
  cursor: pointer;
  margin-top: 10px;
  color: white;
  font-family: 'Mulish', sans-serif;
  font-size: 18px;
`

export const LoadingContainer = styled.div`
  padding: 100px 200px;
  background-color: white;
  color: black;
  border-radius: 40px;
  display: ${(props) => (props.loading ? "flex" : "none")};
  flex-direction: column;
  text-align: center;
  font-family: 'Mulish', sans-serif;
  justify-content: center;
  align-items: center;

  h2 {
    margin-bottom: 20px;
  }
  
  @media only screen and (max-width: 600px) {
    max-width: 200px;
    padding: 100px 150px;
  }
`