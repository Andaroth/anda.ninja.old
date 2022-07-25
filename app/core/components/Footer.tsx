import { Flex, Box, Text } from "@chakra-ui/react"
import { Code } from "@chakra-ui/react"

export const Footer = () => {
  return (
    <Flex p="8" bg="#2e3133" borderTop="2px solid #cc9a54">
      <Box color="white" margin="0 auto" textAlign="center">
        <Text mb="4">
          Made with <Code>Blitz</Code>, <Code>ReactJS</Code>, <strong>Love</strong> and lot of{" "}
          <Code>!patience</Code>.
        </Text>
        <Text>Axel Fiolle 2005 - {new Date().getFullYear()} &copy; All rights reserved</Text>
      </Box>
    </Flex>
  )
}

export default Footer
