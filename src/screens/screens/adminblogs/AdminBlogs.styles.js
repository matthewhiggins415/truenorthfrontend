import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const AdminBlogScreenContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  border-top: 2px solid lightblue;
  padding: 40px;
`

export const AdminBlogScreenHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;

  h2 {
    font-family: 'Mulish', sans-serif;
  }
`

export const BlogContainer = styled.button`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  margin-top: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  color: black;
  text-decoration: none;
  border: none;
  background-color: white;
  width: 100%;
  cursor: pointer;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: start;
    width: 90%;

    p {
      margin-bottom: 10px;
      text-align: start;
    }
  }


  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`

export const Btn = styled.button`
  padding: 5px 15px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid black;
  transition: 150ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: black;
  }
`

export const BlogBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: white;
  font-size: 20px;
  text-align: center;
`