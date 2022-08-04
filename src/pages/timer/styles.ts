import styled from 'styled-components';

export const Container = styled.main`
  padding: 40px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
    max-width: 640px;
    width: 100%;

    p {
      width: 100%;
      height: 40px;
      line-height: 40px;
    }
  }

  @media (max-width: 575.98px) {
    padding: 16px;
  }
`;

export const BaseCountdownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme['gray-100']};
  gap: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const StartCountdownButton = styled(BaseCountdownButton)`
  background: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme['gray-100']};
  &:not(:disabled):hover {
    background: ${({ theme }) => theme['green-700']};
  }
`;

export const StopCountdownButton = styled(BaseCountdownButton)`
  background: ${({ theme }) => theme['red-500']};
  &:not(:disabled):hover {
    background: ${({ theme }) => theme['red-700']};
  }
`;
