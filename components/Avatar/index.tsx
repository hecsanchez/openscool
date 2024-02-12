import AvatarWrapper from '@/components/Avatar/styled';
import Image from 'next/image';
import { FC } from 'react';
import placeholder from '@/assets/img/avatar-placeholder.jpg';

interface AvatarProps {
  url?: string;
}

const Avatar: FC<AvatarProps> = ({ url }) => {
  return (
    <AvatarWrapper>
      {url ? (
        <Image src={url} alt="avatar" width={40} height={40} />
      ) : (
        <Image src={placeholder} alt="avatar" width={30} height={30} />
      )}
    </AvatarWrapper>
  );
};

export default Avatar;
