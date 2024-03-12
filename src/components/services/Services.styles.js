import { styled } from 'styled-components'

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
  background-color: black;
`

export const ServiceCard = styled.div`
  min-height: 200px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
  background-color: white;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  h3 {
    margin-bottom: 10px;
    margin-top: 10px;
    letter-spacing: 1px;
    font-size: 22px;
  }

  p {
    font-family: 'Mulish', sans-serif;
    font-size: 18px;
  }
`

export const OfferCard = styled.div`
  min-height: 200px;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin: 10px;
  background-color: white;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  div {
    padding: 10px;
  }

  p {
    font-family: 'Mulish', sans-serif;
    margin-top: 10px;
    font-size: 18px;
  } 

  h3 {
    letter-spacing: 1px;
    font-size: 22px;
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
    padding-bottom: 20px;
    border-bottom: 3px solid lightblue;
    margin-bottom: 20px;
    margin-top: 20px;
    font-family: "Fjalla One", sans-serif;
    font-weight: 400;
    font-style: normal;
    width: 50%;
    font-size: 45px;
    letter-spacing: 1px;
  }

  p {
    width: 50%;
    margin-top: 10px;
    margin-bottom: 20px;
    font-family: 'Mulish', sans-serif;
    font-size: 20px;
    letter-spacing: 1px;
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

export const Img = styled.img`
  width: 250px;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`

export const DetailsBtn = styled.button`
  width: 80%;
  padding: 15px 20px;
  margin: 20px auto;
  font-family: "Bebas Neue", sans-serif;
  font-size: 20px;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid black;
  background-color: black;
  color: white;
`