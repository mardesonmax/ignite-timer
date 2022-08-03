import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 16px;

  .content {
    background: ${({ theme }) => theme['gray-800']};
    border-radius: 8px;
    max-width: 1120px;
    width: 100%;
    min-height: calc(100vh - 160px);
    display: flex;
    flex-direction: column;
  }
`;
