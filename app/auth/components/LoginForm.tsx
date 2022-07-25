import { AuthenticationError, useMutation, PromiseReturnType } from "blitz"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { Form, FORM_ERROR } from "app/core/components/Form"
import login from "app/auth/mutations/login"
import { Login } from "app/auth/validations"

import { Text, Button } from "@chakra-ui/react"

type LoginFormProps = {
  onSuccess?: (user: PromiseReturnType<typeof login>) => void
  onLeave?: () => void
  gotoSignup?: () => void
}

export const LoginForm = (props: LoginFormProps) => {
  const [loginMutation] = useMutation(login)

  return (
    <div>
      <Text fontSize="2xl">Login</Text>
      <Form
        schema={Login}
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values) => {
          try {
            const user = await loginMutation(values)
            props.onSuccess?.(user)
            props.onLeave?.()
          } catch (error: any) {
            if (error instanceof AuthenticationError) {
              return { [FORM_ERROR]: "Sorry, those credentials are invalid" }
            } else {
              return {
                [FORM_ERROR]:
                  "Sorry, we had an unexpected error. Please try again. - " + error.toString(),
              }
            }
          }
        }}
      >
        <LabeledTextField name="email" label="Email" placeholder="Email" />
        <LabeledTextField name="password" label="Password" placeholder="Password" type="password" />
        <Button bg="black" color="white" w="100%" type="submit">
          Login
        </Button>
      </Form>

      <Text
        onClick={() => props.onLeave?.()}
        css={`
          &:hover {
            text-decoration: underline;
            cursor: pointer;
          }
        `}
      >
        Cancel
      </Text>
    </div>
  )
}

export default LoginForm
