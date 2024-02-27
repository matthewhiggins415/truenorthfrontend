import { styled } from 'styled-components'

export const LoginBtn = styled.button`
  position: absolute;
  right: 0px;
  padding: 15px 20px;
  background-color: white;
  cursor: pointer;
  border: none;
  transition: 150ms ease-in-out;
  display: flex;
  color: black;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: black;
    color: white;
  }
`