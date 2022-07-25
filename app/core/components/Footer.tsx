import { Flex, Box, Text } from "@chakra-ui/react"
import { Code, Link } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"

export const Footer = () => {
  return (
    <footer>
      <Flex p="8" bg="#2e3133" borderTop="2px solid #cc9a54">
        <Box color="white" margin="0 auto" textAlign="center">
          <Text>
            Made with <Code>ReactJS</Code>, <Code>ChakraUI</Code>, <strong>Love</strong> and{" "}
            <Code>!patience</Code>.
          </Text>
          <Text mt="1" mb="4">
            <Link href="https://github.com/Andaroth/anda.ninja" target="_blank">
              View sourcecode on GitHub <ExternalLinkIcon mx="2px" />
            </Link>
          </Text>
          <Text>Axel Fiolle 2005 - {new Date().getFullYear()} &copy; All rights reserved</Text>
        </Box>
      </Flex>
    </footer>
  )
}

export default Footer
