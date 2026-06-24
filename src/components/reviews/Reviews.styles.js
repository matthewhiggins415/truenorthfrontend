import { styled } from 'styled-components';

export const ReviewSectionContainer = styled.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  margin-bottom: 100px;
  margin-top: 50px;
  padding: 0 20px;

  h2 {
    position: relative;
    text-align: center;
    padding-bottom: 18px;
    margin-bottom: 10px;
    margin-top: 20px;
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 700;
    font-style: normal;
    font-size: 40px;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.colors.navy};

    &::after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      width: 72px;
      height: 4px;
      border-radius: ${({ theme }) => theme.radius.pill};
      background-color: ${({ theme }) => theme.colors.red};
    }
  }
`

export const ReviewContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 24px;
  margin-top: 40px;
  flex-wrap: wrap;

  h3 {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.navy};
    letter-spacing: 0;
  }

  @media only screen and (max-width: 400px) {
    margin-top: 5px;
  }
`

export const Review  = styled.div`
  width: 320px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  padding: 28px 24px;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadow.lg};
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 600;
  }

  @media only screen and (max-width: 600px) {
    margin-bottom: 25px;
  } 
`

export const Img = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #d4d4d4;
  padding: 4px;
`

export const P = styled.p`
  text-align: center;
  font-size: 16px;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textMuted};
  letter-spacing: 0;
  margin-bottom: 18px;
`

export const StarContainer = styled.div`
  color: gold;  
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin: 4px 0px 16px;
`