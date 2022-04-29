import Image from 'next/image';
import { Flex } from '@chakra-ui/react';

import logoWorldTrip from '../../../public/images/logo_world_trip.png';

export const Header = () => {
  return (
    <Flex
      as="header"
      align="center"
      justify="center"
      bg="white"
      width="100%"
      height="100px"
    >
      <Image src={logoWorldTrip} alt="Logo World Trip" />
    </Flex>
  );
}