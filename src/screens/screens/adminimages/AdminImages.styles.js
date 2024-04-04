import { styled } from 'styled-components';

export const ImagesScreenContainer = styled.div`
  min-height: 90vh;
  border-top: 2px solid lightblue;
  padding: 20px;

  h2 {
    font-family: 'Mulish', sans-serif;
  }
`

export const Warning = styled.p`
  background-color: #ffcccb;
  width: 50%;
  margin-top: 20px;
  padding: 15px 30px;
  font-family: 'Mulish', sans-serif;

  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`

export const ImagesContainer = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  min-height: 40vh;
  margin: 0 auto;

  @media only screen and (max-width: 600px) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

export const UploadContainer = styled.div`
  width: fit-content;
  margin: 20px auto;
  padding: 30px;
  border-radius: 15px;
  display: flex;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

export const UploadBtn = styled.button`
  display: flex;
  padding: 10px 30px;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 15px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  transition: 150ms ease-in-out;
  background-color: white;
  width: 150px;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  letter-spacing: 1.2px;
  
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
`

export const FileLabel = styled.label`
  width: 150px;
  padding: 10px 20px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  cursor: pointer;
  margin-top: 15px;
  transition: 150ms ease-in-out;
  margin-bottom: 10px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
`

export const RemoveFilesBtn = styled.button`
  display: ${(props) => (props.showUploadBtn ? "flex" : "none")};
  padding: 10px 30px;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 15px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  transition: 150ms ease-in-out;
  background-color: white;
  width: 150px;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  letter-spacing: 1.2px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
`

export const LoadingContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  min-height: 40vh;
  height: auto;
  margin: 0 auto;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`

export const ImgContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin: 10px;
`

export const DeleteImageButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: white;
  border: none;
  margin-top: 10px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
`