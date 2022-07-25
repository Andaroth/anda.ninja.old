import { useState } from "react"
import { useMutation } from "blitz"

import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"

import LoginForm from "app/auth/components/LoginForm"
import SignupForm from "app/auth/components/SignupForm"

import { Flex, Button, Text } from "@chakra-ui/react"

export const UserInfo = () => {
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

export default UserInfo
