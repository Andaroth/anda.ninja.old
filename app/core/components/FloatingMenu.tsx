import { FC, useState, useEffect } from "react"

import { Flex, Text, Heading, Spacer, Button } from "@chakra-ui/react"
import { EmailIcon } from "@chakra-ui/icons"

import { Link } from "react-scroll"

interface Props {
  page: string
}

export const FloatingMenu: FC<Props> = ({ page = "home" }: Props) => {
  const [lastScrollState, setLastScroll] = useState(0)
  const [newScrollState, setNewScroll] = useState(0)
  const [delta, setDelta] = useState(0)

  const displayTopBarBG = () => lastScrollState > 80

  useEffect(() => {
    window.addEventListener("scroll", () => {
      requestAnimationFrame(() => {
        const offset = window.pageYOffset || 0
        setNewScroll(offset)
        requestAnimationFrame(() => {
          setDelta(newScrollState - lastScrollState)
          requestAnimationFrame(() => setLastScroll(offset))
        })
      })
    })
    return () => window.removeEventListener("scroll", () => {})
  }, [lastScrollState, newScrollState])

  return (
    <header>
      <Flex
        p="0"
        position="fixed"
        top="0"
        left="0"
        bg={displayTopBarBG() ? "rgba(0,0,0,.7)" : "transparent"}
        color="white"
        w="100%"
        overflowX="auto"
        transition="all .25s"
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
            <Text display="none">Axel Andaroth</Text>
            <Text fontFamily="UbuntuL">![Λnda]</Text>
          </Heading>
        </Link>
        <Spacer w="100%" />
        {page === "home" && (
          <nav>
            <Flex fontFamily="Ubuntu" h="100%">
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
                  <span className="hidden">Learn more </span>About me
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
                  <span className="hidden">Discover </span>My work
                </Text>
              </Link>
              <a href="https://calendly.com/d/dv7-hmp-prs" target="_blank" rel="noreferrer">
                <Button
                  variant="outline"
                  mr="4"
                  cursor="pointer"
                  mt="2"
                  px="1.5"
                  textTransform="uppercase"
                  bg="rgba(0,0,0,.7)"
                  css={`
                    &:hover {
                      color: black;
                    }
                    &:hover .icon {
                      color: #cc9a54;
                    }
                  `}
                >
                  <Flex>
                    <Text mr="1">
                      Contact<span className="hidden"> me</span>
                    </Text>
                    <EmailIcon className="icon" m="auto" mx="2px" />
                  </Flex>
                </Button>
              </a>
            </Flex>
          </nav>
        )}
      </Flex>
    </header>
  )
}

export default FloatingMenu
