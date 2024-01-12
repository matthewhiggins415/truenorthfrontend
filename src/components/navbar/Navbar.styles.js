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

  @media (max-width: 420px) {
    /* Styles for screens up to 576px wide */
    align-items: center;
    justify-content: space-between;
    padding-left: 0px;
    padding-right: 0px;
  }
`

export const AvailabilityContainer = styled.div`
  display: flex;
  align-items: center;

  h3 {
    margin-left: 10px;
  }
`