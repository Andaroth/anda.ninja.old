import { useMutation } from "blitz"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { Form, FORM_ERROR } from "app/core/components/Form"
import signup from "app/auth/mutations/signup"
import { Signup } from "app/auth/validations"

import { Text, Button } from "@chakra-ui/react"

type SignupFormProps = {
  onSuccess?: () => void
  onLeave?: () => void
}

export const SignupForm = (props: SignupFormProps) => {
  const [signupMutation] = useMutation(signup)

  return (
    <div>
      <Text fontSize="2xl">Create an Account</Text>
      <Form
        schema={Signup}
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values) => {
          try {
            await signupMutation(values)
            props.onSuccess?.()
            props.onLeave?.()
          } catch (error: any) {
            if (error.code === "P2002" && error.meta?.target?.includes("email")) {
              // This error comes from Prisma
              return { email: "This email is already being used" }
            } else {
              return { [FORM_ERROR]: error.toString() }
            }
          }
        }}
      >
        <LabeledTextField name="email" label="Email" placeholder="Email" />
        <LabeledTextField name="password" label="Password" placeholder="Password" type="password" />
        <Button bg="black" color="white" w="100%" type="submit">
          Register
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

export default SignupForm
