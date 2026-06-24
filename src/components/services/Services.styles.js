import { styled } from 'styled-components'
import SmartImage from '../smartimage/SmartImage'

export const Container = styled.div`
  min-height: 400px;
`

export const ServiceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #25335F;
`

export const ServiceCard = styled.div`
  min-height: 300px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  border-radius: ${({ theme }) => theme.radius.md};
  margin: 12px;
  border: 4px solid rgba(238, 28, 74, 0.55);
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadow.md};
  transition: ${({ theme }) => theme.transition};
  background-image: url(${props => props.imgSrc});
  background-size: cover; 
  background-position: center; 
  /* background-size: 120%; Increase the background-size */
  background-repeat: no-repeat;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadow.lg};
  }


  h3 {
    margin-bottom: 10px;
    margin-top: 10px;
    letter-spacing: 1px;
    font-size: 22px;
    font-family: 'Inter', sans-serif;
    color: white;

  }

  p {
    font-family: 'Inter', sans-serif;
    font-size: 18px;
  }
`

export const OfferCard = styled.div`
  min-height: 200px;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: ${({ theme }) => theme.radius.md};
  margin: 12px;
  background-color: ${({ theme }) => theme.colors.surface};
  text-align: center;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  transition: ${({ theme }) => theme.transition};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadow.lg};
  }

  div {
    padding: 16px;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colors.textMuted};
    margin-top: 8px;
    font-size: 16px;
  } 

  h3 {
    letter-spacing: -0.01em;
    font-size: 21px;
  }
`



export const OfferContainer = styled.div`
`

export const OfferTopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding-top: 40px;
  border-bottom: none;
  text-align: center;

  h2 {
    position: relative;
    padding-bottom: 18px;
    margin-bottom: 24px;
    margin-top: 20px;
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 700;
    font-style: normal;
    width: 60%;
    max-width: 760px;
    font-size: 40px;
    line-height: 1.15;
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

  p {
    width: 60%;
    max-width: 680px;
    margin-top: 10px;
    margin-bottom: 20px;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 18px;
    line-height: 1.7;
    letter-spacing: 0;
    color: ${({ theme }) => theme.colors.textMuted};
  }
`

export const OffersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  padding-top: 20px;
  padding-bottom: 40px;
  background-color: white;
`

export const CardContainer = styled.div`
  width: 80%;
  display: flex;
  min-height: 400px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

export const Img = styled(SmartImage)`
  width: 250px;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`

export const DetailsBtn = styled.button`
  width: 80%;
  min-width: 170px;
  padding: 12px 20px;
  margin: 8px auto 20px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radius.pill};
  border: none;
  background-color: ${({ theme }) => theme.colors.red};
  color: white;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    background-color: ${({ theme }) => theme.colors.redDark};
    transform: translateY(-1px);
  }
`

export const CardInfo = styled.div`
  display: flex;
  width: 100%;
  background-color: rgba(238, 28, 74, 0.6);
  position: relative;
  bottom: 15px;
  align-items: center;
  justify-content: space-evenly;
`