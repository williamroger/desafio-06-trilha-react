import { Flex } from "@chakra-ui/react"
import { ReactNode } from "react"

type ContainerProps = {
  children: ReactNode
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <Flex maxW="1200px" height="100%" mx="auto" px="4">
      {children}
    </Flex>
  )
}