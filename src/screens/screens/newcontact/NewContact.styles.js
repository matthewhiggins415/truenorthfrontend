import styled from 'styled-components';
import { Link } from "react-router-dom";

export const NewContactContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fefefe;
  padding: 20px;
  border-top: 2px solid lightblue;
`
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
`