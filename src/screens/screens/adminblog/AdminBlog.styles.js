import { styled } from 'styled-components';

export const AdminBlogScreenContainer = styled.div`
  width: 100%;
  min-width: 90vh;
  display: flex;
  flex-direction: column;
  border-top: 2px solid lightblue;
  padding: 20px;
`

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const Btn = styled.button`
  padding: 5px 15px;
  text-align: center;
  width: 80px;
  background-color: white;
  color: black;
  transition: 150ms ease-in-out;
  border-radius: 5px;
  border: 1px solid black;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`

export const BlogPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  justify-content: space-evenly;
  margin: 20px auto;
`

export const MetaContainer = styled.div`
  margin-bottom: 20px;

  div {
    margin-bottom: 10px;
  }
`