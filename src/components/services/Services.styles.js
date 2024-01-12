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
  background-color: #ececec;
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
  }
`

export const OfferCard = styled.div`
  min-height: 200px;
  width: 300px;
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
    margin-bottom: 20px;
    margin-top: 20px;
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
  padding-bottom: 10px;
  border-bottom: none;

  h2 {
    padding-bottom: 7px;
    border-bottom: 3px solid lightblue;
    margin-bottom: 10px;
  }
`

export const OffersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: white;
`