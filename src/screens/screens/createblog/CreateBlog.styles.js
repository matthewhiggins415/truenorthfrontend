import { styled } from 'styled-components';

export const CreateBlogScreen = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  width: 100%;
  border-top: 2px solid lightblue;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  align-items: center;
`

export const SectionContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  h3 {
    margin-bottom: 15px;
  }
`

export const Label = styled.label`
  text-align: left;
  width: 100%;
  margin-top: 10px;
`

export const Input = styled.input`
  padding: 10px;
  width: 100%;
`

export const TextArea = styled.textarea`
  padding: 10px;
  width: 100%;
  min-height: 100px;
`

export const Btn = styled.button`
  padding: 5px 15px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid black;
  transition: 150ms ease-in-out;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    color: white;
    background-color: black;
  }
`