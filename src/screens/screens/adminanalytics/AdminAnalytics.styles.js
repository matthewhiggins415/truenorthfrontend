import { styled } from 'styled-components';

export const AnalyticsContainer = styled.div`
  min-height: 80vh;
  width: 100%;
  padding: 40px;
  border-top: 2px solid lightblue;
`

export const VisitorContainer = styled.div`
  border: none;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  width: 150px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 10px;
  justify-content: space-evenly;
`

export const VisitorTopContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding-top: 20px;
`