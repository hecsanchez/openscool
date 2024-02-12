import styled from 'styled-components';

interface BarProps {
  progress: number;
}

export const ProgressBarWrapper = styled.div`
  margin: 10px 0 15px;
  
  @media screen and (min-width: 767px) {
    margin: 20px 0;
  }
`;
export const ProgressText = styled.span`
  font-size: 12px;
  margin-bottom: 5px;
`;
export const ProgressBarBackground = styled.div`
  background: #f5f5f5;
  border-radius: 50px;
  height: 6px;
  width: 100%;
  display: flex;
`;

export const Bar = styled.div<BarProps>`
  height: 6px;
  border-radius: 50px;
  width: ${({ progress }) => progress ?? 0}%;
  background: #ff6134;
`;
