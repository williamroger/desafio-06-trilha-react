import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';

import airplane from '../../../public/images/airplane.png';
import { Container } from '../Container';

export const Banner = () => {
  return (
    <Box
      backgroundImage="url('/images/background.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      width="100%"
      height="335px"
    >
      <Container>
        <Flex width="100%" height="100%" align="center" justify="space-between" position="relative">
          <Box flex="1" maxW="600px">
            <Text fontSize="2.25rem" fontWeight="medium" color="white" mb="8">5 Continentes, infinitas possibilidades.</Text>
            <Text fontSize="1.25rem" color="white">Chegou a hora de tirar do papel a viagem que você  sempre sonhou.</Text>
          </Box>
          <Box position="absolute" right="0" bottom="-40px">
            <Image
              src={airplane}
              alt="Imagem de um avião voando entre as nuvens"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}