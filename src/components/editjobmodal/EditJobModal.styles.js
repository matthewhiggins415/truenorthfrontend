import { styled } from 'styled-components';

export const AddJobModalContainer = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContainerWithForm = styled.div`
  width: auto;
  padding: 20px;
  min-height: 200px;
  margin-top: 20px;
  margin-bottom: 20px;
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: auto;
  background-color: white;
`
export const FormTop = styled.div`
  display: flex;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`
export const FormInputsContainer = styled.div`
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  min-height: auto;
  width: 50%;
  overflow-y: scroll;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`

export const FormInputTextArea = styled.div`
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  padding: 10px;
  border-radius: 5px;
  height: auto;
  width: 100%;
  margin-top: 20px;
`

export const Select = styled.select`
  border: 1px solid black;
  width: 100%;
  background-color: #efefef;
  padding: 10px;
  color: black;
  cursor: pointer;
  border: none;
  margin-top: 8px;
  font-family: 'Mulish', sans-serif;
  font-size: 14px;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  padding: 10px;
  background-image: url('down-arrow.png');
  background-position: right center;
  background-repeat: no-repeat;
`

export const InputContainer = styled.div`
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0px;
  }
`

export const Input = styled.input`
  margin-top: 8px;
  padding: 10px;
  background-color: #efefef;
  border: none;
  width: 100%;
  cursor: pointer;
  outline: none;
`

export const TextArea = styled.textarea`
  margin-top: 10px;
  padding: 10px;
  min-height: 100px;
  width: 100%;
  background-color: #efefef;
  border: none;
  outline: none;
  cursor: pointer;
`

export const FormBtn = styled.button`
  border-radius: 10px;
  width: 100%;
  padding: 15px 30px;
  margin: 0px auto;
  border: 1px solid #ee1c4a;
  margin-top: 20px;
  background-color: #ee1c4a;
  cursor: pointer;
  color: white;
  font-family: "Bebas Neue", sans-serif;
  font-size: 25px;
  letter-spacing: 1px;
`

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
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

export const Label = styled.label`
  text-align: start;
  font-family: 'Mulish', sans-serif;
`

export const LoadingContainer = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`