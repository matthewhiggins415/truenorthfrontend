import React from 'react';
import { ModalContainer, FormContainer, Form, CloseBtn, Input, SubmitBtn, InputContainer, Select } from './Modal.styles';
import { IoCloseCircleOutline } from "react-icons/io5";


const Modal = ({ modalOpen, setModalOpen }) => {
  const handleCloseModal = () => {
    setModalOpen(!modalOpen)
  }

  return (
    <ModalContainer modalOpen={modalOpen}>
      <FormContainer>
        <CloseBtn onClick={handleCloseModal}>
          <IoCloseCircleOutline size={40} color={'white'}/>
        </CloseBtn>
        <Form>
          <InputContainer>
            <label>First Name:</label>
            <Input type="text" required/>
          </InputContainer>
          <InputContainer>
            <label>Last Name:</label>
            <Input type="text" required/>
          </InputContainer>
          <InputContainer>
            <label>Chimneys:</label>
            <Input type="number" required/>
          </InputContainer>
          <InputContainer>
            <label for="roofs">Roof Type:</label>
            <Select name="roofs" id="roofs" required>
              <option value="shingle">Shingle</option>
              <option value="tile">Tile</option>
              <option value="flat">Flat</option>
              <option value="shake">Shake</option>
            </Select>
          </InputContainer>
          <InputContainer>
            <label>Address</label>
            <Input type="text" required/>
          </InputContainer>
          <InputContainer>
            <label>City</label>
            <Input type="text" required/>
          </InputContainer>
          <InputContainer>
            <label>Zip</label>
            <Input type="text" required/>
          </InputContainer>
          <SubmitBtn>Submit</SubmitBtn>
        </Form>
      </FormContainer>
    </ModalContainer>
  )
}

export default Modal