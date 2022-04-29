import { Flex, Box, Text } from '@chakra-ui/react';
import Image from 'next/image';

import cocktail from '../../../public/images/cocktail.svg';
import surf from '../../../public/images/surf.svg';
import earth from '../../../public/images/earth.svg';
import building from '../../../public/images/building.svg';
import museum from '../../../public/images/museum.svg';

import { Container } from "../Container"

export const TravelTypes = () => {
  return (
    <Container>
      <Flex width="100%" pt="7rem" align="center" justify="space-between">
        <Box display="flex" flexDirection="column" alignItems="center">
          <Image src={cocktail} alt="Ícone Coquetel" />
          <Text
            fontSize="1.1rem"
            mt="1.5rem"
            fontWeight="semibold"
            color="gray.600"
          >
            vida noturna
          </Text>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Image src={surf} alt="Ícone Coquetel" />
          <Text
            fontSize="1.1rem"
            mt="1.5rem"
            fontWeight="semibold"
            color="gray.600"
          >
            praia
          </Text>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Image src={building} alt="Ícone Prédio" />
          <Text
            fontSize="1.1rem"
            mt="1.5rem"
            fontWeight="semibold"
            color="gray.600"
          >
            moderno
          </Text>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Image src={museum} alt="Ícone Museu" />
          <Text
            fontSize="1.1rem"
            mt="1.5rem"
            fontWeight="semibold"
            color="gray.600"
          >
            clássico
          </Text>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Image src={earth} alt="Ícone Terra" />
          <Text
            fontSize="1.1rem"
            mt="1.5rem"
            fontWeight="semibold"
            color="gray.600"
          >
            e mais...
          </Text>
        </Box>
      </Flex>
    </Container>
  )
}