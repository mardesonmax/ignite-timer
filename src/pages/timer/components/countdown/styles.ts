import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  color: ${({ theme }) => theme['gray-100']};
  display: flex;
  gap: 1rem;
  width: 100%;

  span {
    background: ${({ theme }) => theme['gray-700']};
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  }

  @media (max-width: 767.98px) {
    font-size: 8rem;
  }

  @media (max-width: 575.98px) {
    font-size: 4rem;
    gap: 0.5rem;
  }
`;

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media (max-width: 767.98px) {
    width: 3rem;
  }

  @media (max-width: 575.98px) {
    width: 1rem;
  }
`;
