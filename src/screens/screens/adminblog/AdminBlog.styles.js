import { styled } from 'styled-components';

export const AdminBlogScreenContainer = styled.div`
  width: 100%;
  min-height: 90vh;
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
  padding: 10px 20px;
  background-color: white;
  border: 1px solid black;
  transition: 150ms ease-in-out;
  cursor: pointer;
  margin-bottom: 20px;
  color: black;

  &:hover {
    color: white;
    background-color: black;
  }
`

export const RemoveBtn = styled.button`
  padding: 10px 20px;
  background-color: white;
  border: 1px solid red;
  transition: 150ms ease-in-out;
  cursor: pointer;
  margin-bottom: 20px;
  color: red;
  margin-left: 20px;

  &:hover {
    color: white;
    background-color: red;
  }
`

export const BlogPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  justify-content: space-evenly;
  margin: 20px auto;
  font-family: 'Mulish', sans-serif;

  @media only screen and (max-width: 600px) {
    width: 300px;
  }
`

export const MetaContainer = styled.div`
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 20px;
  border-radius: 15px;
  width: 90%;

  div {
    margin-bottom: 10px;
  }

  h3 {
    font-size: 20px;
    margin-bottom: 5px;
  }
`

export const LoadingContainer = styled.div`
  min-height: 90vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`