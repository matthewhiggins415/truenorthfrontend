import { styled } from 'styled-components'

export const ModalContainer = styled.div`
  position: relative;
  width: auto;
  overflow-y: scroll;
  left: 0px;
  min-height: 60vh;
  margin: 0 auto;
  height: auto;
  background-color: #efefef;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 5px;
`

export const ImagesContainer = styled.div`
  position: absolute;
  top: 40px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  display: flex;
  flex-wrap: wrap;
  align-items: start;
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const H3 = styled.h3`
  position: absolute;
  top: 10px;
  left: 10px;
  color: black;
`

export const LoadingContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ImageContainer = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  margin: 10px;
`

export const ImgSelectBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  border: none;
  padding: 5px;
  cursor: pointer;
  background-color: transparent;
`