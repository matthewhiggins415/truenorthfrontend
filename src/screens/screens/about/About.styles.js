import { styled } from 'styled-components';
import SmartImage from '../../../components/smartimage/SmartImage';

export const AboutScreenContainer = styled.div`
  min-height: 90vh;
  width: 100%;
  display: flex;
  padding: 20px;
  flex-direction: column;
`

export const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

export const BackBtn = styled.button`
  padding: 10px 22px;
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.navy};
  color: ${({ theme }) => theme.colors.navy};
  border-radius: ${({ theme }) => theme.radius.pill};
  font-weight: 600;
  transition: ${({ theme }) => theme.transition};
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    color: white;
    background-color: ${({ theme }) => theme.colors.navy};
  }
`

export const Section = styled.section`
  width: 90%;
  font-family: 'Inter', sans-serif;

  h1 {
    margin-bottom: 20px;
  }
`

export const Img = styled(SmartImage)`
  width: 40%;
  max-height: 400px;
  margin-bottom: 20px;
  margin-left: 10px;
  margin-right: 10px;
  object-fit: cover;
  border-radius: 10px;
`

export const SectionContainer = styled.div`
  margin: 20px auto;
  width: 60%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`