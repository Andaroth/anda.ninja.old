import { BlitzPage } from "blitz"
import { Img } from "@chakra-ui/react"
import Layout from "app/core/layouts/Layout"

import {
  Heading,
  Box,
  Text,
  Flex,
  Avatar,
  Spacer,
  Grid,
  GridItem,
  Button,
  Divider,
  Tooltip,
} from "@chakra-ui/react"

import { Link } from "react-scroll"

import CustomSection from "app/core/components/CustomSection"
import FloatingMenu from "app/core/components/FloatingMenu"

import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs"
import { EmailIcon } from "@chakra-ui/icons"

import Footer from "app/core/components/Footer"

const CustomerCard = (props: { name: string; href: string; bg: string }) => {
  return (
    <GridItem
      textAlign="center"
      borderRadius="2xl"
      overflow="hidden"
      bg="black"
      color="white"
      css={`
        &:hover {
          background: white;
          color: black;
          text-decoration: underline;
        }
        &:hover .screen {
          transform: scale(1.1);
        }
      `}
    >
      <a href={props.href} target="_blank" rel="noreferrer">
        <Text
          p="2"
          textAlign="center"
          fontSize="24px"
          fontWeight="bold"
          cursor="pointer"
          fontFamily="Ubuntu"
        >
          @&nbsp;{props.name}
        </Text>
        <Box
          w="100%"
          h={{ sm: "180px", md: "400px", xl: "180px" }}
          overflow="hidden"
          margin="0 auto"
        >
          <Box
            className="screen"
            w="100%"
            h={{ sm: "180px", md: "400px", xl: "160px" }}
            backgroundImage={`url(${props.bg})`}
            backgroundSize="cover"
            backgroundPosition="center"
            transition="all 0.5s ease-out"
          ></Box>
        </Box>
      </a>
    </GridItem>
  )
}

const Home: BlitzPage = () => {
  return (
    <div id="top" className="container">
      <CustomSection bg="url(./img/clonex_001.jpeg)" bgMobile="url(./img/clonex_001_mobile.jpeg)">
        <Flex justifyContent="flex-end" w="100%">
          <Flex className="about_content" direction="column">
            <Spacer h="100%" />
            <Box m="4" maxW={{ sm: "none", md: "33vw" }}>
              <Flex
                direction="column"
                bg="rgba(0,0,0,.7)"
                borderRadius="xl"
                p="4"
                mb="4"
                textAlign="center"
              >
                <Heading color="#cc9a54" w="100%" fontFamily="Ubuntu">
                  Game Maker &amp;&nbsp;Web&nbsp;Dev
                </Heading>
                <Text my="6" fontSize="xl" color="white">
                  With more than fifteen years <strong>building</strong> and{" "}
                  <strong>revolutionizing</strong> the <strong>web</strong>, I&nbsp;can help you to
                  create and assert your project.
                </Text>
                <Box alignSelf="center">
                  <Link to="about" smooth={true}>
                    <Button className="detail" colorScheme="transparent">
                      Learn more
                    </Button>
                  </Link>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </CustomSection>
      <CustomSection
        id="about"
        bg="url(./img/clonex_002.jpeg)"
        bgMobile="url(./img/clonex_002_mobile.jpeg)"
      >
        <Flex justifyContent="center" m="4" w="100%">
          <Flex
            direction="column"
            bg="rgba(0,0,0,.5)"
            color="white"
            maxW="800px"
            w="100%"
            alignSelf="center"
            borderRadius="xl"
            overflow="hidden"
            mt="35vh"
          >
            <Flex bg="rgba(0,0,0,.5)" color="#cc9a54" p="4">
              <Flex>
                <Avatar name="Axel Fiolle" src="./img/avatar.jpeg" />
                <Heading fontSize="3xl" ml="4" lineHeight="48px" fontFamily="Ubuntu" w="100%">
                  <Text display="none">FullStack </Text>
                  <Flex>
                    <span className="hidden">
                      Web dev<span className="hidden">eloper</span>&nbsp;
                    </span>
                    Passionate&nbsp;about new tech
                    <span className="nomobile">nologie</span>s
                  </Flex>
                </Heading>
              </Flex>
            </Flex>
            <Flex direction="column" p="4">
              <Text pb="4">
                Hello, my name is Axel Fiolle, alias <strong>Andaroth</strong>!<br />
                I&nbsp;was young when I wrote my first line of code.
              </Text>
              <Text pb="4">
                My dedication for the <strong>art of code</strong> and my curiosity made me jump
                into the <strong>Web3 paradigm</strong>.
              </Text>
              <Text>
                Let me help you getting online and expand on the <strong>Internet of Things</strong>
                !
              </Text>
            </Flex>
            <Grid
              templateColumns="repeat(4, 1fr)"
              width="50%"
              margin="0 auto"
              textAlign="center"
              my="2"
            >
              <GridItem textAlign="center" m="2">
                <Tooltip label="Join me on LinkedIn">
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
                <Tooltip label="Check my GitHub code">
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
                <Tooltip label="Follow me on Twitter">
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
                <Tooltip label="Follow me on Instagram">
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
            <Divider my="2" mx="auto" w="256px" maxW="50%" />
            <Box w="100%" textAlign="center">
              <Link to="work" smooth={true}>
                <Button className="detail" colorScheme="transparent" m="4">
                  Discover my work
                </Button>
              </Link>
            </Box>
          </Flex>
        </Flex>
      </CustomSection>
      <CustomSection
        id="work"
        bg="url(./img/clonex_003.jpeg)"
        bgMobile="url(./img/clonex_003_mobile.jpeg)"
      >
        <Flex direction="column" w="100%" justifyContent="center">
          <Box m="auto">
            <Flex
              direction="column"
              bg="rgba(0,0,0,.5)"
              maxW="800px"
              borderRadius="xl"
              p="6"
              color="white"
              textAlign="center"
              m="4"
              mt="35vh"
            >
              <Heading as="h2" fontSize="4xl" fontFamily="Ubuntu">
                <span className="hidden">I have multiple </span>
                <strong>Web3</strong> &amp; <strong>Blockchain</strong>
                <span className="hidden"> experiences:</span>
              </Heading>
              <Divider my="4" mx="auto" w="256px" maxW="50%" />
              <Text maxW={{ sm: "none", md: "50%" }} margin="0 auto">
                I&nbsp;used to work with the best actors from the metaverse who trust me to
                implement their most important website.
              </Text>
              <Box alignSelf="center">
                <Flex>
                  <Img
                    src="./img/emoji/wizard.svg"
                    alt="ninja"
                    height="24px"
                    alignSelf="center"
                    m="auto 8px"
                  />
                  <Text my="2">
                    <strong>
                      My skills are refined and precise,
                      <br />
                      I&apos;m a Code Guardian
                      <span className="hidden">.</span>
                    </strong>
                  </Text>
                  <Img
                    src="./img/emoji/ninja.svg"
                    alt="ninja"
                    height="24px"
                    alignSelf="center"
                    m="auto 8px"
                  />
                </Flex>
              </Box>
              <Grid
                templateColumns={{ lg: "repeat(1, 1fr)", xl: "repeat(3, 1fr)" }}
                gap={6}
                w="100%"
                alignSelf="center"
                mt="2"
              >
                <CustomerCard name="RTFKT" bg="./img/b2b/rtfkt.jpeg" href="https://rtfkt.com/" />
                <CustomerCard
                  name="GameOfBlocks"
                  bg="./img/b2b/screenshot.jpeg"
                  href="https://gameofblocks.io/"
                />
                <CustomerCard
                  name="EtheRPG Online"
                  bg="./img/b2b/etherpg.jpeg"
                  href="https://etherpg.online/"
                />
              </Grid>
              <Box>
                <a href="mailto:ax.fiolle@gmail.com">
                  <Button
                    mt="8"
                    mb="2"
                    className="detail large"
                    colorScheme="transparent"
                    fontSize="xl"
                    css={`
                      &:hover .icon {
                        color: white;
                      }
                    `}
                  >
                    <Flex>
                      <Text mr="1">Get in touch</Text>
                      <EmailIcon className="icon" m="auto" mx="2px" color="#cc9a54" />
                    </Flex>
                  </Button>
                </a>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </CustomSection>

      <Footer />

      <FloatingMenu page="home" />

      <style jsx global>{`
        @font-face {
          font-family: "UbuntuTh";
          src: url("./Fonts/Ubuntu-Th.ttf") format("truetype");
        }
        @font-face {
          font-family: "UbuntuL";
          src: url("./Fonts/Ubuntu-L.ttf") format("truetype");
        }
        @font-face {
          font-family: "Ubuntu";
          src: url("./Fonts/Ubuntu-R.ttf") format("truetype");
        }
        @font-face {
          font-family: "UbuntuB";
          src: url("./Fonts/Ubuntu-B.ttf") format("truetype");
        }

        strong {
          color: #cc9a54;
          font-weight: normal !important;
        }

        button.detail {
          font-family: "UbuntuB";
          padding: 24px;
          background: #2e3133;
          background: linear-gradient(
            0deg,
            rgba(204, 154, 84, 1) 0%,
            rgba(82, 84, 85, 1) 50%,
            rgba(46, 49, 51, 1) 100%
          );
          background-size: 100% 400%;
          background-position: 0 0;
          color: white;
          min-width: 180px;
          border-bottom: 2px solid #cc9a54;
          /* border-radius: 0px !important;
          clip-path: polygon(0 0, 90% 0, 100% 20%, 100% 100%, 10% 100%, 0 80%); */
          transition: all 0.5s ease-in-out;
        }
        button.detail.large {
          font-family: "UbuntuL";
          padding: 36px 24px;
          font-size: 32px;
          min-width: 260px;
        }
        button.detail.small {
          padding: 12px;
        }
        button.detail:hover {
          background-position: 0 100%;
        }

        .react-icons {
          font-size: 24px;
          margin: 0 auto;
        }
        .social:hover .react-icons {
          color: #cc9a54;
        }

        @media screen and (max-width: 800px) {
          .about_content {
            margin-top: 50vh;
          }
          .nomobile {
            display: none;
          }
        }

        .hidden {
          display: none;
        }
      `}</style>
    </div>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Andaroth">{page}</Layout>

export default Home
