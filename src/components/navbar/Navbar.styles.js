import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  width: auto;
  min-height: 80px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
  margin: 0 auto;

  h3 {
    font-family: 'Mulish', sans-serif;
    font-size: 20px;
    font-weight: 600;
  }

  @media only screen and (max-width: 400px) {
    flex-direction: column;

    h3 {
      margin-bottom: 15px;
      text-align: center;
    }
  }
`

export const AvailabilityContainer = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-left: 10px;
  }
`