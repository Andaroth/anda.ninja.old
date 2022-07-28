import { Flex, Box, Text } from "@chakra-ui/react"
import { Code, Link, Grid, GridItem, Tooltip, Divider } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs"

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
          <Divider my="2" mx="auto" w="256px" maxW="50%" />
          <Grid
            templateColumns="repeat(4, 1fr)"
            width="50%"
            margin="0 auto"
            textAlign="center"
            my="2"
          >
            <GridItem textAlign="center" m="2">
              <Tooltip placement="top" label="Join me on LinkedIn">
                <a
                  href="https://www.linkedin.com/in/axel-fiolle/"
                  target="_blank"
                  rel="noreferrer"
                  className="social"
                >
                  <BsLinkedin className="react-icons" />
                </a>
              </Tooltip>
            </GridItem>
            <GridItem textAlign="center" m="2">
              <Tooltip placement="top" label="Check my GitHub code">
                <a
                  href="https://github.com/Andaroth"
                  target="_blank"
                  rel="noreferrer"
                  className="social"
                >
                  <BsGithub className="react-icons" />
                </a>
              </Tooltip>
            </GridItem>
            <GridItem textAlign="center" m="2">
              <Tooltip placement="top" label="Follow me on Twitter">
                <a
                  href="https://twitter.com/Andaroth"
                  target="_blank"
                  rel="noreferrer"
                  className="social"
                >
                  <BsTwitter className="react-icons" />
                </a>
              </Tooltip>
            </GridItem>
            <GridItem textAlign="center" m="2">
              <Tooltip placement="top" label="Follow me on Instagram">
                <a
                  href="https://instagram.com/an.da.ro.th"
                  target="_blank"
                  rel="noreferrer"
                  className="social"
                >
                  <BsInstagram className="react-icons" />
                </a>
              </Tooltip>
            </GridItem>
          </Grid>

          <Text>Axel Fiolle 2005 - {new Date().getFullYear()} &copy; All rights reserved</Text>
        </Box>
      </Flex>
    </footer>
  )
}

export default Footer
