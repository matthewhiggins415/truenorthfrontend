import { styled } from 'styled-components';

export const EditBlogScreen = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  width: 100%;
  border-top: 2px solid lightblue;
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