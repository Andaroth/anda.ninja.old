import { FC } from "react"

import { Flex, Text, Heading, Spacer, Button } from "@chakra-ui/react"

import { Link } from "react-scroll"

interface Props {
  page: string
}

export const FloatingMenu: FC<Props> = ({ page = "home" }: Props) => {
  return (
    <Flex
      p="0"
      position="fixed"
      top="0"
      left="0"
      bg="rgba(0,0,0,.7)"
      color="white"
      w="100%"
      overflowX="auto"
    >
      <Link to="top" smooth={true}>
        <Heading
          as="h1"
          cursor="pointer"
          m="2"
          ml="4"
          css={`
            &:hover {
              color: #cc9a54;
            }
          `}
        >
          <Text display="none">
            <span className="nomobile">&nbsp;Axel&nbsp;</span>Andaroth
          </Text>
          <Text fontFamily="UbuntuL">![Λnda]</Text>
        </Heading>
      </Link>
      <Spacer w="100%" />
      {page === "home" && (
        <Flex fontFamily="Ubuntu">
          <Link to="about" smooth={true} className="nomobile">
            <Text
              fontSize="2xl"
              p="2"
              mr="2"
              cursor="pointer"
              h="100%"
              css={`
                &:hover {
                  color: #cc9a54;
                  border-bottom: 4px solid #cc9a54;
                }
              `}
            >
              About me
            </Text>
          </Link>
          <Link to="work" smooth={true} className="nomobile">
            <Text
              fontSize="2xl"
              p="2"
              mr="2"
              cursor="pointer"
              h="100%"
              css={`
                &:hover {
                  color: #cc9a54;
                  border-bottom: 4px solid #cc9a54;
                }
              `}
            >
              My work
            </Text>
          </Link>
          <a href="mailto:ax.fiolle@gmail.com">
            <Button
              className="detail small"
              mr="4"
              cursor="pointer"
              mt="2"
              textTransform="uppercase"
              css={`
                padding: 0;
                font-family: "UbuntuB";
                &:hover {
                  color: #cc9a54;
                  border-bottom: 4px solid #cc9a54;
                }
              `}
            >
              Contact
            </Button>
          </a>
        </Flex>
      )}
    </Flex>
  )
}

export default FloatingMenu
