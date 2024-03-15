import { styled } from 'styled-components';

export const ImagesScreenContainer = styled.div`
  min-height: 90vh;
  border-top: 2px solid lightblue;
  padding: 20px;
`

export const Warning = styled.p`
  background-color: #ffcccb;
  width: 50%;
  margin-top: 20px;
  padding: 15px 30px;
  font-family: 'Mulish', sans-serif;
`

export const ImagesContainer = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  min-height: 90%;
  padding: 20px;
  margin: 0 auto;
`

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: auto;
  margin: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 10px;
`

export const Img = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
`

export const RemoveBtn = styled.button`
  padding: 10px 30px;
  cursor: pointer;
  margin: 10px auto;
  background-color: black;
  width: 100%;
  border: 1px solid black;
  color: white;
`

export const H1 = styled.h1`
  font-family: 'Mulish', sans-serif;
`