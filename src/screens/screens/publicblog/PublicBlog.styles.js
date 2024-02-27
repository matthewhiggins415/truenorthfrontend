import { styled } from 'styled-components';

export const PublicBlogContainer = styled.div`
  padding: 40px;
  border-top: 2px solid lightblue;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  div {
    max-width: 600px;
  }
`

export const Img = styled.img`
  margin: 0px auto;
  margin-bottom: 20px;
  width: 100%;
  border-radius: 20px;
`

export const Btn = styled.button`
  padding: 5px 10px;
  border-radius: 10px;
  background-color: white;
  transition: 150ms ease-in-out;
  cursor: pointer;
  border: 1px solid black;
  margin-bottom: 20px;

  &:hover {
    background-color: black;
    color: white;
}
`