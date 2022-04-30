import { Box, Flex, Text } from "@chakra-ui/react"
import { Container } from "../Container"

export const TextDivider = () => {
  return (
    <Container>
      <Flex
        width="100%"
        direction="column"
        align="center"
        justify="center"
        pt="20"
        pb="10"
      >
        <Box width="90px" height="2px" bg="gray.600" mb="3.5rem"></Box>
        <Text
          color="gray.600"
          fontWeight="medium"
          fontSize="2.25rem"
          align="center"
        >
          Vamos nessa? <br /> Então escolha seu continente
        </Text>
      </Flex>
    </Container>
  )
}