import styled from 'styled-components';
import { Card } from '@/components/Card';

interface FeedItemWrapperProps {
  pinned: boolean;
}
export const FeedItemWrapper = styled(Card)<FeedItemWrapperProps>`
  cursor: pointer;
  ${({ pinned }) => (pinned ? `background: #fff9e5;` : '')}

  &:hover {
    box-shadow: 0 2px 5px 2px #dddddd;
  }
`;

export const PinnedHeader = styled.div`
  height: 20px;
  padding-left: 15px;
  padding-top: 15px;
  display: flex;
  align-items: center;

  & > img {
    transform: rotate(270deg);
  }

  & > span {
    margin-left: 8px;
    font-size: 14px;
    color: #b4b4b4;
  }
`;
export const Title = styled.h2`
  font-size: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  color: #323232;
  line-height: 1.5;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const Summary = styled.div`
  overflow: hidden;
  word-break: break-word;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 300;
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  p {
    margin: 0;
    font-weight: 500;
  }

  span {
    font-size: 13px;
    color: #b4b4b4;
  }
`;
