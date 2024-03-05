import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const BlogsPageContainer = styled.div`
  width: 100%;
  border-top: 2px solid lightblue;
  padding: 40px;
  min-height: 80vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`
export const BlogCard = styled(Link)`
  width: 250px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: black;
  text-decoration: none;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  padding: 15px; 
  border-radius: 15px;
  margin: 20px;
  font-family: 'Mulish', sans-serif;

  img {
    width: 100%;
    border-radius: 10px;
  }

  h3 {
    margin-top: 15px;
    margin-bottom: 15px;
  }
`

export const BackBtn = styled.button`
  padding: 10px;
  width: 100px;
  margin-bottom: 20px;
  background-color: white;
  color: black;
  transition: 150ms ease-in-out;
  border-radius: 10px;
  border: 1px solid black;
  cursor: pointer;
  justify-content: flex-start;


  &:hover {
    color: white;
    background-color: black;
  }
`