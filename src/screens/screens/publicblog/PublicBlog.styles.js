import { styled } from 'styled-components';
import SmartImage from '../../../components/smartimage/SmartImage';

export const PublicBlogContainer = styled.div`
  padding: 40px;
  border-top: 2px solid lightblue;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  div {
    max-width: 600px;
  }
`

export const Img = styled(SmartImage)`
  margin: 0px auto;
  margin-bottom: 20px;
  width: 100%;
  border-radius: 20px;
`

export const Btn = styled.button`
  padding: 8px 20px;
  border-radius: ${({ theme }) => theme.radius.pill};
  background-color: ${({ theme }) => theme.colors.surface};
  transition: ${({ theme }) => theme.transition};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.navy};
  font-weight: 600;
  border: 1px solid ${({ theme }) => theme.colors.navy};
  margin-bottom: 20px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.navy};
    color: white;
  }
`