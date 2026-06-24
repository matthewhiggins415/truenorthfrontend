import { styled } from 'styled-components'
import SmartImage from '../smartimage/SmartImage'

export const ContactContainer = styled.div`
  min-height: 70vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
`

export const Container = styled.div`
  display: flex;
  width: 90%;
  min-height: 400px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;  border-radius: 15px;
  padding: 30px;
  margin-bottom: 40px;
 
  @media only screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 600px;
    padding: 30px;
  }
`

export const MapContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly; 

  h1 {
    font-family: 'Inter', sans-serif;
  }

  @media only screen and (max-width: 700px) {
    width: 100%;

    h1 {
      text-align: center;
    }
  }
`

export const Img = styled(SmartImage)`
  width: 90%;
  min-height: 75%;
  border-radius: 15px;
  margin-top: 15px;

  @media only screen and (max-width: 700px) {
    margin-bottom: 20px;
  }
`

export const Form = styled.form`
  width: 50%;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  h1 {
    font-family: 'Inter', sans-serif;
  }

  @media only screen and (max-width: 700px) {
    width: 100%;
    height: 50%;
    margin-top: 30px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;

    h1 {
      text-align: center;
    }
  }


`

export const FormTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;

  @media only screen and (max-width: 700px) {
    margin-bottom: 20px;
    margin-top: 20px;
    width: 90%;
  }

  @media only screen and (max-width: 500px) {
    flex-direction: column;
    width: 90%;
  }
`

export const FormBottom = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;

  @media only screen and (max-width: 700px) {
    width: 90%;
  }
`

export const InputTop = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.surfaceMuted};
  padding: 14px 18px;
  width: 45%;
  outline: none;
  border-radius: ${({ theme }) => theme.radius.md};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 16px;
  transition: ${({ theme }) => theme.transition};

  &:focus {
    border-color: ${({ theme }) => theme.colors.navy};
    background-color: ${({ theme }) => theme.colors.surface};
    box-shadow: 0 0 0 3px rgba(37, 51, 95, 0.12);
  }

  @media only screen and (max-width: 500px) {
    width: 100%;

    &:last-child {
      margin-top: 20px;
    }
  }
`

export const InputBottom = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.surfaceMuted};
  padding: 14px 18px;
  width: 100%;
  outline: none;
  border-radius: ${({ theme }) => theme.radius.md};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 16px;
  transition: ${({ theme }) => theme.transition};

  &:focus {
    border-color: ${({ theme }) => theme.colors.navy};
    background-color: ${({ theme }) => theme.colors.surface};
    box-shadow: 0 0 0 3px rgba(37, 51, 95, 0.12);
  }

  &:last-child {
    margin-top: 30px;
  }

  @media only screen and (max-width: 700px) {
    &:last-child {
      margin-top: 20px;
    }
  }
`

export const SubmitBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.red};
  color: white;
  padding: 16px 30px;
  width: 80%;
  margin-top: 24px;
  border: none;
  border-radius: ${({ theme }) => theme.radius.pill};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 0.3px;
  box-shadow: 0 10px 24px rgba(238, 28, 74, 0.28);
  transition: ${({ theme }) => theme.transition};

  &:hover {
    background-color: ${({ theme }) => theme.colors.redDark};
    transform: translateY(-2px);
    box-shadow: 0 14px 30px rgba(238, 28, 74, 0.38);
  }

  @media only screen and (max-width: 700px) {
    margin-top: 30px;
    width: 90%;
  }
`