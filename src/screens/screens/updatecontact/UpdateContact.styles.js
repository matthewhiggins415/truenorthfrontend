import { styled } from 'styled-components';

export const UpdateContactContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 20px;
  border-top: 2px solid lightblue;
`;

export const BackBtn = styled.button`
  padding: 5px 10px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
  transition: 150ms ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: black;
    color: white;
  }

  @media only screen and (max-width: 600px) {
    color: black;
  }

`