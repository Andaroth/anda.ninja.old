import { useState } from "react"
import { BlitzPage, useMutation } from "blitz"
import Layout from "app/core/layouts/Layout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"
import { Link } from "react-scroll"

import { Heading, Flex, Box, Text, Button } from "@chakra-ui/react"

import LoginForm from "app/auth/components/LoginForm"
import SignupForm from "app/auth/components/SignupForm"

import CustomSection from "app/core/components/Section"

const UserInfo = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)
  const [isSigning, setSigning] = useState(false)
  const [isLogging, setLogging] = useState(false)

  if (isSigning) return <SignupForm onLeave={() => setSigning(false)} />
  if (isLogging)
    return (
      <LoginForm
        onLeave={() => setLogging(false)}
        gotoSignup={() => {
          setLogging(false)
          setSigning(true)
        }}
      />
    )

  if (currentUser) {
    return (
      <Flex direction="row">
        <Button
          color="black"
          mr="1"
          onClick={async () => {
            await logoutMutation()
          }}
        >
          Logout
        </Button>
        <Flex direction="column" m="0" ml="1">
          <Text textAlign="left" m="0" p="0">
            <code>{currentUser.email}</code>
          </Text>
          <Text textAlign="left" m="0" p="0">
            Role: <code>{currentUser.role}</code>
          </Text>
        </Flex>
      </Flex>
    )
  } else {
    return (
      <Flex direction="row">
        <Button
          variant="outline"
          width="100%"
          mr="1"
          color="white"
          onClick={() => setSigning(true)}
        >
          <strong>Sign Up</strong>
        </Button>
        <Button width="100%" ml="1" color="black" onClick={() => setLogging(true)}>
          <strong>Login</strong>
        </Button>
      </Flex>
    )
  }
}

const Home: BlitzPage = () => {
  return (
    <div className="container">
      <CustomSection id="about" bg="url(./img/clonex_001.jpeg)" backgroundAttachment="initial">
        <Box
          ml="calc(100% * 0.6)"
          mr="4"
          my="4"
          p="4"
          bg="rgba(255,255,255,.7)"
          borderRadius="2xl"
          w="100%"
        >
          <Heading as="h1" textAlign="center" w="100%">
            Axel Andaroth
          </Heading>
          <Text fontWeight="bold" textAlign="center" w="100%">
            FullStack Dev
            <br />
            Videogames &amp; websites
            <br />
            maker
          </Text>
          <Text my="4">
            With more than fifteen years of experience in web design and developement, I can help
            you to create your own website and assert your presence online.
          </Text>
        </Box>
      </CustomSection>
      <CustomSection bg="#2e3133" id="work"></CustomSection>
      <CustomSection bg="white" id="contact"></CustomSection>

      <Box
        border="1px solid grey"
        p="4"
        borderRadius="2xl"
        position="fixed"
        top="24px"
        left="24px"
        bg="#2e3133"
        color="white"
      >
        <Link to="about" smooth={true}>
          <Button variant="outline" mr="2">
            About me
          </Button>
        </Link>
        <Link to="work" smooth={true}>
          <Button variant="outline" mr="2">
            My work
          </Button>
        </Link>
        <Link to="contact" smooth={true}>
          <Button textTransform="uppercase" color="black">
            Contact
          </Button>
        </Link>
        {/* <Suspense fallback="Loading...">
          <UserInfo />
        </Suspense> */}
      </Box>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;700&display=swap");

        html,
        body {
          padding: 0;
          margin: 0;
          font-family: "Libre Franklin", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          box-sizing: border-box;
        }
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main p {
          font-size: 1.2rem;
        }

        p {
          text-align: center;
        }

        footer {
          width: 100%;
          height: 60px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #45009d;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer a {
          color: #f4f4f4;
          text-decoration: none;
        }

        .logo {
          margin-bottom: 2rem;
        }

        .logo img {
          width: 300px;
        }

        .buttons {
          display: grid;
          grid-auto-flow: column;
          grid-gap: 0.5rem;
        }
        .button {
          font-size: 1rem;
          background-color: #6700eb;
          padding: 1rem 2rem;
          color: #f4f4f4;
          text-align: center;
        }

        .button.small {
          padding: 0.5rem 1rem;
        }

        .button:hover {
          background-color: #45009d;
        }

        .button-outline {
          border: 2px solid #6700eb;
          padding: 1rem 2rem;
          color: #6700eb;
          text-align: center;
        }

        .button-outline:hover {
          border-color: #45009d;
          color: #45009d;
        }

        pre {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          text-align: center;
        }
        code {
          font-size: 0.9rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
            Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
