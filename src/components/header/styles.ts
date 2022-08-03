import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
  margin-top: 48px;
  align-items: center;

  nav {
    display: flex;
    gap: 8px;

    a {
      color: ${({ theme }) => theme.white};
      border-bottom: 3px solid transparent;
      border-top: 3px solid transparent;
      transition: 0.3s ease all;
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;

      &:not(.active):hover {
        border-bottom-color: ${({ theme }) => theme['green-500']};
        color: ${({ theme }) => theme['green-500']};
      }

      &.active {
        color: ${({ theme }) => theme['green-500']};
      }
    }
  }
`;
