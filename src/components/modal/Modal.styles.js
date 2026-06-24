import styled from 'styled-components';

export const ModalContainer = styled.div`   
  display: ${(props) => (props.modalOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100%;
  background-color: rgba(0,0,0,.5);
  color: white;
  z-index: 10;
`

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100%;
`

export const Form = styled.form`
  display: ${(props) => (props.loading ? "none" : "flex")};
  width: 400px;
  min-height: 480px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: none;
  padding: 28px 24px;
  background-color: white;
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadow.lg};
  color: black;

  h2 {
    margin-bottom: 10px;
    margin-top: 10px;
    padding-bottom: 5px;
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.navy};
    text-align: center;
  }

  @media only screen and (max-width: 600px) {
    width: 300px;
    margin-top: 120px;
  }
`

export const InputContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`

export const Input = styled.input`
  height: 40px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.surfaceMuted};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 25px;
  color: black;
  outline: none;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 16px;
  transition: ${({ theme }) => theme.transition};

  &:focus {
    border-color: ${({ theme }) => theme.colors.navy};
    background-color: ${({ theme }) => theme.colors.surface};
    box-shadow: 0 0 0 3px rgba(37, 51, 95, 0.12);
  }
`

export const Select = styled.select`
  height: 40px;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  width: 200px;
  padding: 10px;
  color: black;
`

export const SubmitBtn = styled.button`
  width: 90%;
  border: none;
  padding: 16px 50px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.red};
  cursor: pointer;
  margin-top: 10px;
  color: white;
  border-radius: ${({ theme }) => theme.radius.pill};
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 600;
  font-size: 16px;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    background-color: ${({ theme }) => theme.colors.redDark};
    transform: translateY(-1px);
  }
`

export const CloseBtn = styled.button`
  width: 90%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 16px 50px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.surfaceMuted};
  cursor: pointer;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.radius.pill};
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 600;
  font-size: 16px;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    background-color: ${({ theme }) => theme.colors.border};
  }
`

export const LoadingContainer = styled.div`
  padding: 100px 200px;
  background-color: white;
  color: black;
  border-radius: 40px;
  display: ${(props) => (props.loading ? "flex" : "none")};
  flex-direction: column;
  text-align: center;
  font-family: 'Inter', sans-serif;
  justify-content: center;
  align-items: center;

  h2 {
    margin-bottom: 20px;
  }
  
  @media only screen and (max-width: 600px) {
    max-width: 200px;
    padding: 100px 150px;
  }
`