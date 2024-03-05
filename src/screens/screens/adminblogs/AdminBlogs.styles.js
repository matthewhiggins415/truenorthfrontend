import { styled } from 'styled-components';

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
`

export const BlogContainer = styled.div`
  display: flex;
  border: 1px solid black;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  margin-top: 10px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: start;
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